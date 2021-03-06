/* StarPU --- Runtime system for heterogeneous multicore architectures.
 *
 * Copyright (C) 2009-2011  Université de Bordeaux
 * Copyright (C) 2010  Mehdi Juhoor <mjuhoor@gmail.com>
 * Copyright (C) 2010, 2011, 2012, 2013, 2015  CNRS
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

#include "mpi_cholesky.h"

int main(int argc, char **argv)
{
	/* create a simple definite positive symetric matrix example
	 *
	 *	Hilbert matrix : h(i,j) = 1/(i+j+1)
	 * */

	float ***bmat;
	int rank, nodes, ret;
	double timing, flops;

	ret = starpu_init(NULL);
	STARPU_CHECK_RETURN_VALUE(ret, "starpu_init");

	ret = starpu_mpi_init(&argc, &argv, 1);
	STARPU_CHECK_RETURN_VALUE(ret, "starpu_mpi_init");
	starpu_mpi_comm_rank(MPI_COMM_WORLD, &rank);
	starpu_mpi_comm_size(MPI_COMM_WORLD, &nodes);
	starpu_cublas_init();

	parse_args(argc, argv, nodes);

	matrix_init(&bmat, rank, nodes, 0);

	dw_cholesky(bmat, size/nblocks, rank, nodes, &timing, &flops);

	starpu_mpi_shutdown();

	matrix_free(&bmat, rank, nodes, 0);
	starpu_cublas_shutdown();
	starpu_shutdown();

	if (rank == 0)
	{
		FPRINTF(stdout, "Computation time (in ms): %2.2f\n", timing/1000);
		FPRINTF(stdout, "Synthetic GFlops : %2.2f\n", (flops/timing/1000.0f));
	}

	return 0;
}
