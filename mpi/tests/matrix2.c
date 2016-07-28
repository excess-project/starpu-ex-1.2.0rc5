/* StarPU --- Runtime system for heterogeneous multicore architectures.
 *
 * Copyright (C) 2015  CNRS
 *
 * StarPU is free software; you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation; either version 2.1 of the License, or (at
 * your option) any later version.
 *
 * StarPU is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 * See the GNU Lesser General Public License in COPYING.LGPL for more details.
 */

#include <starpu_mpi.h>
#include <math.h>
#include "helper.h"

void func_cpu(void *descr[], STARPU_ATTRIBUTE_UNUSED void *_args)
{
	unsigned *A = (unsigned *)STARPU_VARIABLE_GET_PTR(descr[0]);
	unsigned *X = (unsigned *)STARPU_VARIABLE_GET_PTR(descr[1]);
	unsigned *Y = (unsigned *)STARPU_VARIABLE_GET_PTR(descr[2]);

	FPRINTF_MPI(stderr, "VALUES: Y=%3u A=%3u X=%3u\n", *Y, *A, *X);
	*Y = *Y + *A * *X;
}

/* Dummy cost function for simgrid */
static double cost_function(struct starpu_task *task STARPU_ATTRIBUTE_UNUSED, unsigned nimpl STARPU_ATTRIBUTE_UNUSED)
{
	return 0.000001;
}
static struct starpu_perfmodel dumb_model =
{
	.type		= STARPU_COMMON,
	.cost_function	= cost_function
};

struct starpu_codelet mycodelet =
{
	.cpu_funcs = {func_cpu},
	.nbuffers = 3,
	.modes = {STARPU_R, STARPU_R, STARPU_RW},
	.model = &dumb_model
};

#define N 4

int main(int argc, char **argv)
{
	int rank, size;
	int n;
	int ret;
	unsigned A[N];
	unsigned X[N];
	starpu_data_handle_t data_A[N];
	starpu_data_handle_t data_X[N];

	MPI_Init(&argc, &argv);
	starpu_mpi_comm_rank(MPI_COMM_WORLD, &rank);
	starpu_mpi_comm_size(MPI_COMM_WORLD, &size);

	ret = starpu_init(NULL);
	STARPU_CHECK_RETURN_VALUE(ret, "starpu_init");
	ret = starpu_mpi_init(NULL, NULL, 0);
	STARPU_CHECK_RETURN_VALUE(ret, "starpu_mpi_init");

	if (size < 3)
	{
		if (rank == 0)
			FPRINTF(stderr, "We need at least 3 processes.\n");

		starpu_mpi_shutdown();
		starpu_shutdown();
		MPI_Finalize();
		return STARPU_TEST_SKIPPED;
	}

	for(n = 0; n < N; n++)
	{
		A[n] = (n+1)*10;
		X[n] = n+1;
	}

	FPRINTF_MPI(stderr, "A = ");
	for(n = 0; n < N; n++)
	{
		FPRINTF(stderr, "%u ", A[n]);
	}
	FPRINTF(stderr, "\n");
	FPRINTF_MPI(stderr, "X = ");
	for(n = 0; n < N; n++)
	{
		FPRINTF(stderr, "%u ", X[n]);
	}
	FPRINTF(stderr, "\n");

	for(n = 0; n < N; n++)
	{
		if (rank == n%2)
			starpu_variable_data_register(&data_A[n], STARPU_MAIN_RAM, (uintptr_t)&A[n], sizeof(unsigned));
		else
			starpu_variable_data_register(&data_A[n], -1, (uintptr_t)NULL, sizeof(unsigned));
		starpu_mpi_data_register(data_A[n], n+100, n%2);
		FPRINTF_MPI(stderr, "Registering A[%d] to %p with tag %d and node %d\n", n,data_A[n], n+100, n%2);
	}

	for(n = 0; n < N; n++)
	{
		if (rank == 2)
			starpu_variable_data_register(&data_X[n], STARPU_MAIN_RAM, (uintptr_t)&X[n], sizeof(unsigned));
		else
			starpu_variable_data_register(&data_X[n], -1, (uintptr_t)NULL, sizeof(unsigned));
		starpu_mpi_data_register(data_X[n], n+200, 2);
		FPRINTF_MPI(stderr, "Registering X[%d] to %p with tag %d and node %d\n", n, data_X[n], n+200, 2);
	}

	for(n = 0; n < N-1; n++)
	{
		ret = starpu_mpi_task_insert(MPI_COMM_WORLD, &mycodelet,
					     STARPU_R, data_A[n],
					     STARPU_R, data_X[n],
					     STARPU_RW, data_X[N-1],
					     STARPU_EXECUTE_ON_DATA, data_A[n],
					     0);
		STARPU_CHECK_RETURN_VALUE(ret, "starpu_mpi_task_insert");
	}

	FPRINTF(stderr, "Waiting ...\n");
	starpu_task_wait_for_all();

	for(n = 0; n < N; n++)
	{
		starpu_data_unregister(data_A[n]);
		starpu_data_unregister(data_X[n]);
	}

	starpu_mpi_shutdown();
	starpu_shutdown();

	FPRINTF(stdout, "[%d] X[%d]=%u\n", rank, N-1, X[N-1]);

#ifndef STARPU_SIMGRID
	if (rank == 2)
	{
		STARPU_ASSERT_MSG(X[N-1]==144, "Error when calculating X[N-1]=%u\n", X[N-1]);
	}
#endif

	MPI_Finalize();
	return 0;
}