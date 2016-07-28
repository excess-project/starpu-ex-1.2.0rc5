# StarPU Extension Introduction

> Copyright (C) 2016 University of Stuttgart

> The design aims to integrate a light monitoring framework into StarPU to enable power consumption profiling and power model calibrating when a StarPU task is submitted and executed.

> See the GNU Lesser General Public License in COPYING.LGPL for more details.

## I. Motivation

StarPU benefits the application in runtime with data management and scheduling policies based on the application's execution time. Now with input from a monitoring framework, StarPU is capable to calibrate the power model of a codelet, profile the power consumption during runtime and schedule the same codelet based on the calibrated power model.

## II. Prerequisites

Except the requirements from StarPU, the extension needs further:
  * Monitoring framework server
  * Monitoring framework agent
  * hwloc library (also a prerequisite for StarPU)
  * jsmn (https://github.com/zserge/jsmn)

Remarks: 
To install the required Monitoring Framework (both server and agent), please get the source from the following repo:

```bash
$ git clone https://github.com/excess-project/monitoring-agent.git
$ git clone https://github.com/excess-project/monitoring-server.git
```

After following the setup instructions, the monitoring framework are built and installed with serveral shared libraries and header files available in the installation directory. 
(More details could be found in the repo's README file.)

It should be noticed that the monitoring-agent is composed of multiple independent plugins, which are configured and controlled by a configuration file: mf_config.ini. To enable power measurements of CPUs and GPUs, it is vital to turn on the following plugins with associated metrics.

| Plugins         | Metrics                                               | 
|------------------|-------------------------------------------------| 
| RAPL            |   PACKAGE_ENERGY:PACKAGE0      |
| RAPL            |   DRAM_ENERGY:PACKAGE0            |
| NVIDIA        |   power_usage                                   |

In case of 2 or more CPU sockets, more RAPL metrics should be added in the configuration file.

## III. Building and Installing

### a. Source changes

There is one module ("ext") added in StarPU src/ directory, which provides APIs for power measurements. Following source code from starpu are changed accordingly

  * src/profiling/profiling.c
  * src/drivers/driver_common/driver_common.c

to record the start and end execution time of one job, retrieving average power measurements during the interval and feedback the energy value to the profiling info of the job.

### b. Makefile changes

After the installation of monitoring-agent, the path to header file:

  * mf_api.h

, and libraries:

  * libmf.so
  * libparser.so
  * libpublisher.so

should be added in the src/Makefile.am to make the starpu libraries.

### c. How to make?

Before configure based on the system, add the mf-agent libraries in the LD_LIBRARY_PATH by:

  $ export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:${LIB_MF}

Then build and install as usual with following commands:

```bash
$ ./configure
$ make
$ make install
```

Please note that the installation and setup steps mentioned above assume that you are running a current Linux as operating system.

## IV. On EXCESS Cluster

The extension is built and tested by a simple vector_scaling example on the EXCESS cluster with monitoring framework and pbs system integrated.

### a. Setup

```bash
$ git clone http://gitlab.excess-project.eu/hpcfapix/starpu-ex-1-2-0rc5.git
$ source setup_on_cluster.sh
```

### b. Demos

```bash
$ cd demos
$ source setenv.sh
$ cd vector_scal 
$ make clean all
$ qsub pbs.sh
```

## V. Contact

**Fangli Pi, HLRS**
+ [github/hpcfapix](https://github.com/hpcfapix)


## VI. Acknowledgement

This project is realized through [EXCESS][excess]. EXCESS is funded by the EU 7th Framework Programme (FP7/2013-2016) under grant agreement number 611183.