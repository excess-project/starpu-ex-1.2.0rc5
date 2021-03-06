/* StarPU --- Runtime system for heterogeneous multicore architectures.
 *
 * Copyright (C) 2010-2013  Université de Bordeaux
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

/* FIFO queues, ready for use by schedulers */

#ifndef __FIFO_QUEUES_H__
#define __FIFO_QUEUES_H__

#include <starpu.h>

struct _starpu_fifo_taskq
{
	/* the actual list */
	struct starpu_task_list taskq;

	/* the number of tasks currently in the queue */
	unsigned ntasks;

	/* the number of tasks currently in the queue corresponding to each priority */
	unsigned *ntasks_per_priority;

	/* the number of tasks that were processed */
	unsigned nprocessed;

	/* only meaningful if the queue is only used by a single worker */
	double exp_start; /* Expected start date of next item to do in the
			   * queue (i.e. not started yet). This is thus updated
			   * when we start it. */
	double exp_end; /* Expected end date of last task in the queue */
	double exp_len; /* Expected duration of the set of tasks in the queue */
	double *exp_len_per_priority; /* Expected duration of the set of tasks in the queue corresponding to each priority */
};

struct _starpu_fifo_taskq*_starpu_create_fifo(void);
void _starpu_destroy_fifo(struct _starpu_fifo_taskq *fifo);

int _starpu_fifo_empty(struct _starpu_fifo_taskq *fifo);

double _starpu_fifo_get_exp_len_prev_task_list(struct _starpu_fifo_taskq *fifo_queue, struct starpu_task *task, 
					       int workerid, int nimpl, int *fifo_ntasks);

int _starpu_fifo_push_sorted_task(struct _starpu_fifo_taskq *fifo_queue, struct starpu_task *task);

int _starpu_fifo_push_task(struct _starpu_fifo_taskq *fifo, struct starpu_task *task);
int _starpu_fifo_push_back_task(struct _starpu_fifo_taskq *fifo_queue, struct starpu_task *task);

struct starpu_task *_starpu_fifo_pop_task(struct _starpu_fifo_taskq *fifo, int workerid);
struct starpu_task *_starpu_fifo_pop_local_task(struct _starpu_fifo_taskq *fifo);
struct starpu_task *_starpu_fifo_pop_every_task(struct _starpu_fifo_taskq *fifo, int workerid);

#endif // __FIFO_QUEUES_H__
