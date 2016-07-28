#!/bin/bash

module load amd/app-sdk/3.0.124.132-GA
module load mpi/mpich/3.1-gnu-4.9.2
module load compiler/cuda/7.0
module load numlib/intel/mkl/11.1
module load compiler/gnu/4.9.2
module load os/automake/automake-1.14-gnu-4.8.2
LIB_MF=/opt/mf/stable/16.6/lib
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:${LIB_MF}

ROOT=`pwd`
DIST=${ROOT}/bin
rm -rf ${DIST}
./configure --prefix=${DIST} --with-cuda-dir=/opt/compiler/cuda/7.0 --with-cuda-lib-dir=/opt/compiler/cuda/7.0/lib64
make -j 5
make install