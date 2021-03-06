# StarPU --- Runtime system for heterogeneous multicore architectures.
#
# Copyright (C) 2011, 2012 INRIA
#
# StarPU is free software; you can redistribute it and/or modify
# it under the terms of the GNU Lesser General Public License as published by
# the Free Software Foundation; either version 2.1 of the License, or (at
# your option) any later version.
#
# StarPU is distributed in the hope that it will be useful, but
# WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
#
# See the GNU Lesser General Public License in COPYING.LGPL for more details.


gcc_tests =					\
  base.c					\
  pointers.c					\
  output-pointer.c				\
  output-pointer-errors.c			\
  register.c					\
  register-errors.c				\
  registered.c					\
  registered-errors.c				\
  acquire.c					\
  acquire-errors.c				\
  release.c					\
  release-errors.c				\
  unregister.c					\
  unregister-errors.c				\
  task-errors.c					\
  scalar-tasks.c				\
  pointer-tasks.c				\
  external-task-impl.c				\
  no-initialize.c				\
  lib-user.c					\
  wait-errors.c					\
  heap-allocated.c				\
  heap-allocated-errors.c			\
  verbose.c					\
  debug-tree.c					\
  opencl.c					\
  opencl-errors.c				\
  shutdown-errors.c

EXTRA_DIST =

if HAVE_PTR_DEREFS_MAY_ALIAS_P

gcc_tests += warn-unregistered.c

else !HAVE_PTR_DEREFS_MAY_ALIAS_P

EXTRA_DIST += warn-unregistered.c

endif !HAVE_PTR_DEREFS_MAY_ALIAS_P

if !STARPU_USE_OPENCL

# XXX: This test simulates a buggy OpenCL implementation, and thus
# cannot be run then a real <cl_platform.h> is included.
gcc_tests += opencl-types.c

# This test simulates errors when lacking an OpenCL implementation.
gcc_tests += opencl-lacking.c

else STARPU_USE_OPENCL

EXTRA_DIST +=					\
  opencl-types.c				\
  opencl-lacking.c

endif STARPU_USE_OPENCL


dist_noinst_HEADERS = mocks.h

CLEANFILES = *.gimple *.o			\
  base						\
  pointers					\
  register					\
  registered					\
  release					\
  scalar-tasks					\
  pointer-tasks					\
  lib-user					\
  output-pointer				\
  unregister					\
  heap-allocated				\
  acquire					\
  opencl					\
  starpu_idle_microsec.log


EXTRA_DIST += ./run-test.in			\
  my-lib.h my-lib.c				\
  test.cl					\
  $(gcc_tests)

# The test suite assumes that the CPU back-end is available.
if RUN_GCC_PLUGIN_TESTS

TESTS = $(gcc_tests)
if STARPU_HAVE_AM111
LOG_COMPILER = ./run-test
else
TESTS_ENVIRONMENT = ./run-test
endif

else !RUN_GCC_PLUGIN_TESTS

check-hook:
	-@echo "GNU Guile or CPU back-end not available, test suite not run."

endif !RUN_GCC_PLUGIN_TESTS

showcheck:
	-cat $(TEST_LOGS) /dev/null
	! grep -q "ERROR: AddressSanitizer: " $(TEST_LOGS) /dev/null
	! grep -q "WARNING: AddressSanitizer: " $(TEST_LOGS) /dev/null
	! grep -q "ERROR: ThreadSanitizer: " $(TEST_LOGS) /dev/null
	! grep -q "WARNING: ThreadSanitizer: " $(TEST_LOGS) /dev/null
