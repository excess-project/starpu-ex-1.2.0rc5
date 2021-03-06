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

# `LIBRARIES' would be more appropriate than `LTLIBRARIES' but it
# requires a name prefixed by `lib'.
gccplugin_LTLIBRARIES = starpu.la

starpu_la_SOURCES =				\
  c-expr.y					\
  opencl.c					\
  starpu.c					\
  tasks.c					\
  utils.c

if HAVE_PTR_DEREFS_MAY_ALIAS_P

# Only for GCC >= 4.6.
starpu_la_SOURCES += warn-unregistered.c

endif

# Use the Yacc-compatibility mode so that Bison doesn't error out upon
# reduce/reduce conflicts.
AM_YFLAGS = -y

AM_CPPFLAGS =						\
  -I$(top_builddir)/gcc-plugin/include			\
  -I$(top_srcdir)/gcc-plugin/include			\
  -I$(top_srcdir)/include				\
  -I$(GCC_PLUGIN_INCLUDE_DIR) -Wall -DYYERROR_VERBOSE=1	\
  $(STARPU_CUDA_CPPFLAGS) $(STARPU_OPENCL_CPPFLAGS) $(HWLOC_CFLAGS)

AM_LDFLAGS = -module

# Use either `gcc' or `g++', whichever is appropriate to build
# plug-ins for this version of GCC.
AM_LIBTOOLFLAGS = --tag="$(GCC_FOR_PLUGIN_LIBTOOL_TAG)"
CC = $(GCC_FOR_PLUGIN)

showcheck:
	-cat $(TEST_LOGS) /dev/null
	! grep -q "ERROR: AddressSanitizer: " $(TEST_LOGS) /dev/null
	! grep -q "WARNING: AddressSanitizer: " $(TEST_LOGS) /dev/null
	! grep -q "ERROR: ThreadSanitizer: " $(TEST_LOGS) /dev/null
	! grep -q "WARNING: ThreadSanitizer: " $(TEST_LOGS) /dev/null
