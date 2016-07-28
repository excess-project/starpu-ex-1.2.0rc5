@ECHO OFF

REM StarPU --- Runtime system for heterogeneous multicore architectures.
REM
REM Copyright (C) 2013, 2014  CNRS
REM
REM StarPU is free software; you can redistribute it and/or modify
REM it under the terms of the GNU Lesser General Public License as published by
REM the Free Software Foundation; either version 2.1 of the License, or (at
REM your option) any later version.
REM
REM StarPU is distributed in the hope that it will be useful, but
REM WITHOUT ANY WARRANTY; without even the implied warranty of
REM MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
REM
REM See the GNU Lesser General Public License in COPYING.LGPL for more details.

TITLE MSVC StarPU Environment
ECHO.
ECHO MSVC StarPU Environment

IF NOT EXIST %STARPU_PATH%\AUTHORS GOTO starpunotfound

ECHO.
ECHO Setting environment from %STARPU_PATH%

set STARPU_LIBDIR=%STARPU_PATH%/lib
set STARPU_INCLUDEDIR=%STARPU_PATH%/include
set STARPU_CFLAGS=/I%STARPU_INCLUDEDIR%\starpu\1.2 -I/opt/compiler/cuda/7.0/include
set STARPU_LDFLAGS=/link %STARPU_PATH%\lib\libstarpu-1.2.lib

GOTO end

:starpunotfound
  ECHO.
  ECHO You need to set the variable STARPU_PATH to a valid StarPU installation directory
  exit /B 1
  GOTO end

:end
