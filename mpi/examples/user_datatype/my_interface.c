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

#include <starpu.h>

#include "my_interface.h"

void starpu_my_interface_display_codelet_cpu(void *descr[], void *_args)
{
	char c = STARPU_MY_INTERFACE_GET_CHAR(descr[0]);
	int d = STARPU_MY_INTERFACE_GET_INT(descr[0]);
	char msg[100];

	if (_args)
		starpu_codelet_unpack_args(_args, &msg);

	fprintf(stderr, "[%s] My value = '%c' %d\n", _args?msg:NULL, c, d);
}

void starpu_my_interface_compare_codelet_cpu(void *descr[], void *_args)
{
	int *compare;

	starpu_codelet_unpack_args(_args, &compare);

	int d0 = STARPU_MY_INTERFACE_GET_INT(descr[0]);
	char c0 = STARPU_MY_INTERFACE_GET_CHAR(descr[0]);
	int d1 = STARPU_MY_INTERFACE_GET_INT(descr[1]);
	char c1 = STARPU_MY_INTERFACE_GET_CHAR(descr[1]);

	*compare = (d0 == d1 && c0 == c1);
}

void _starpu_my_interface_datatype_allocate(MPI_Datatype *mpi_datatype)
{
	int ret;

	int blocklengths[2] = {1, 1};
	MPI_Aint displacements[2];
	MPI_Datatype types[2] = {MPI_INT, MPI_CHAR};
	struct starpu_my_interface *myinterface = malloc(sizeof(struct starpu_my_interface));

	MPI_Address(myinterface, displacements);
	MPI_Address(&myinterface[0].c, displacements+1);
	displacements[1] -= displacements[0];
	displacements[0] = 0;

	ret = MPI_Type_create_struct(2, blocklengths, displacements, types, mpi_datatype);
	STARPU_ASSERT_MSG(ret == MPI_SUCCESS, "MPI_Type_contiguous failed");

	ret = MPI_Type_commit(mpi_datatype);
	STARPU_ASSERT_MSG(ret == MPI_SUCCESS, "MPI_Type_commit failed");
}

void starpu_my_interface_datatype_allocate(starpu_data_handle_t handle, MPI_Datatype *mpi_datatype)
{
	(handle);
	_starpu_my_interface_datatype_allocate(mpi_datatype);
}

void starpu_my_interface_datatype_free(MPI_Datatype *mpi_datatype)
{
	MPI_Type_free(mpi_datatype);
}

int starpu_my_interface_get_int(starpu_data_handle_t handle)
{
	struct starpu_my_interface *my_interface =
		(struct starpu_my_interface *) starpu_data_get_interface_on_node(handle, STARPU_MAIN_RAM);

	return my_interface->d;
}

char starpu_my_interface_get_char(starpu_data_handle_t handle)
{
	struct starpu_my_interface *my_interface =
		(struct starpu_my_interface *) starpu_data_get_interface_on_node(handle, STARPU_MAIN_RAM);

	return my_interface->c;
}

static void data_register_data_handle(starpu_data_handle_t handle, unsigned home_node, void *data_interface)
{
	struct starpu_my_interface *my_interface = (struct starpu_my_interface *) data_interface;

	unsigned node;
	for (node = 0; node < STARPU_MAXNODES; node++)
	{
		struct starpu_my_interface *local_interface = (struct starpu_my_interface *)
			starpu_data_get_interface_on_node(handle, node);

		if (node == home_node)
		{
			local_interface->d = my_interface->d;
			local_interface->c = my_interface->c;
		}
		else
		{
			local_interface->d = 0;
			local_interface->c = 0;
		}
	}
}

static starpu_ssize_t data_allocate_data_on_node(void *data_interface, unsigned node)
{
	(data_interface);
	(node);
	return 0;
}

static void data_free_data_on_node(void *data_interface, unsigned node)
{
	(data_interface);
	(node);
}

static size_t data_get_size(starpu_data_handle_t handle)
{
	(handle);
	return sizeof(int) + sizeof(char);
}

static uint32_t data_footprint(starpu_data_handle_t handle)
{
	return starpu_hash_crc32c_be(starpu_my_interface_get_int(handle), 0);
}

static int data_pack_data(starpu_data_handle_t handle, unsigned node, void **ptr, starpu_ssize_t *count)
{
	(handle);
	(node);
	(ptr);
	(count);
	STARPU_ASSERT_MSG(0, "The data interface has been registered with starpu_mpi_datatype_register(). Calling the pack_data function should not happen\n");
}

static int data_unpack_data(starpu_data_handle_t handle, unsigned node, void *ptr, size_t count)
{
	(handle);
	(node);
	(ptr);
	(count);
	STARPU_ASSERT_MSG(0, "The data interface has been registered with starpu_mpi_datatype_register(). Calling the unpack_data function should not happen\n");
}

static starpu_ssize_t data_describe(void *data_interface, char *buf, size_t size)
{
	struct starpu_my_interface *my_interface = (struct starpu_my_interface *) data_interface;
	return snprintf(buf, size, "Data%d-%c", my_interface->d, my_interface->c);
}

static void *data_handle_to_pointer(starpu_data_handle_t handle, unsigned node)
{
	STARPU_ASSERT(starpu_data_test_if_allocated_on_node(handle, node));

	struct starpu_my_interface *my_interface = (struct starpu_my_interface *) starpu_data_get_interface_on_node(handle, node);

	return (void*) &my_interface->d;
}

static int copy_any_to_any(void *src_interface, unsigned src_node,
			   void *dst_interface, unsigned dst_node,
			   void *async_data)
{
	struct starpu_my_interface *src_data = src_interface;
	struct starpu_my_interface *dst_data = dst_interface;
	int ret = 0;

	if (starpu_interface_copy((uintptr_t) src_data->d, 0, src_node,
				  (uintptr_t) dst_data->d, 0, dst_node,
				  sizeof(src_data->d), async_data))
		ret = -EAGAIN;
	if (starpu_interface_copy((uintptr_t) src_data->c, 0, src_node,
				  (uintptr_t) dst_data->c, 0, dst_node,
				  sizeof(src_data->c),
				  async_data))
		ret = -EAGAIN;
	return ret;
}

static const struct starpu_data_copy_methods data_copy_methods =
{
	.any_to_any = copy_any_to_any
};

static struct starpu_data_interface_ops interface_data_ops =
{
	.register_data_handle = data_register_data_handle,
	.allocate_data_on_node = data_allocate_data_on_node,
	.free_data_on_node = data_free_data_on_node,
	.copy_methods = &data_copy_methods,
	.get_size = data_get_size,
	.footprint = data_footprint,
	.interfaceid = STARPU_UNKNOWN_INTERFACE_ID,
	.interface_size = sizeof(struct starpu_my_interface),
	.handle_to_pointer = data_handle_to_pointer,
	.pack_data = data_pack_data,
	.unpack_data = data_unpack_data,
	.describe = data_describe
};

void starpu_my_interface_data_register(starpu_data_handle_t *handleptr, unsigned home_node, struct starpu_my_interface *xc)
{
	if (interface_data_ops.interfaceid == STARPU_UNKNOWN_INTERFACE_ID)
	{
		interface_data_ops.interfaceid = starpu_data_interface_get_next_id();
	}

	starpu_data_register(handleptr, home_node, xc, &interface_data_ops);
}
