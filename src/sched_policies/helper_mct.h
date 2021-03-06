/* StarPU --- Runtime system for heterogeneous multicore architectures.
 *
 * Copyright (C) 2013-2014  Université de Bordeaux
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

struct _starpu_mct_data
{
	double alpha;
	double beta;
	double _gamma;
	double idle_power;
};

struct _starpu_mct_data *starpu_mct_init_parameters(struct starpu_sched_component_mct_data *params);

int starpu_mct_compute_expected_times(struct starpu_sched_component *component, struct starpu_task *task,
		double *estimated_lengths, double *estimated_transfer_length, double *estimated_ends_with_task,
		double *min_exp_end_with_task, double *max_exp_end_with_task, int *suitable_components);

double starpu_mct_compute_fitness(struct _starpu_mct_data * d, double exp_end, double min_exp_end, double max_exp_end, double transfer_len, double local_power);
