#!/bin/bash
module load amd/app-sdk/3.0.124.132-GA
module load mpi/mpich/3.1-gnu-4.9.2
module load compiler/cuda/7.0
module load numlib/intel/mkl/11.1
module load compiler/gnu/4.9.2

DIR_NOW=`pwd`
LIB_MF=/opt/mf/stable/16.6/lib

PKG_CONFIG_PATH=$PKG_CONFIG_PATH:${DIR_NOW}/../bin/lib/pkgconfig
LD_LIBRARY_PATH=$LD_LIBRARY_PATH:${DIR_NOW}/../bin/lib:${LIB_MF}
export PKG_CONFIG_PATH
export LD_LIBRARY_PATH