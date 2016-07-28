# Version (16.06.2016)

## Code Refactoring

- To avoid code replication, starpu extension API are inserted into driver_common.c

- To ease the use of power measurements and power model training, one environment is provided. StarPU user could simply use the following command to activate this measurements:
	```bash
	export STARPU_POWER_PROFILING=1
	```

- For better code structure, ex_starpu_ini is moved to starpu_profiling_init.

- To avoid interfering with the application's command line parameters, variables for power monitoring are implemented as environment variables, and can be set with the following commands:
	```bash
	export MF_USER=${USER}
	export MF_TASKID=${TASKID}
	export MF_EXPID=${EXPID}
	```

- Removed code overhead by counting the number of sockets and number of gpus only once inside ex_starpu_init

- Removed uncessary sleep calls in starpu_ex.c. However in case of very short task execution time (less than 0.5 second), a sleep is still needed

- To enable power monitoring and power model training, users should do the following:
	```bash
	export STARPU_SCHED=dmda
	export STARPU_CALIBRATE=1
	export STARPU_PROFILING=1
	export STARPU_POWER_PROFILING=1
	export MF_USER=${USER}
	export MF_TASKID=${TASKID}
	export MF_EXPID=${EXPID}
	```
  , and write for the StarPU codelet a power model and enable its benchmarking, like the following:
  	```
	static struct starpu_perfmodel example_power_model =
	{
		.type = STARPU_HISTORY_BASED,
		.symbol = "example_power",
		.benchmarking = 1
	};
	```
  , at last, synchronous execution of the task need to be set. 

## Performance

- To increase the client-server communication, new features are added in the monitoring framework. Following picture shows the delay of data sending when different interval of measurements are set.
![](http://gitlab.excess-project.eu/hpcfapix/starpu-ex-1-2-0rc5/blob/master/publish_delay.png)

- Since the power monitoring per core is not available by current libraries, it is reasonable to measure the power of each task sequentially, which is named as the training mode of power model. During the training mode, performance is then not so critical, and once the power model of a codelet is trained, users can switch off the training and start the real runtime mode. StarPU user could set "task->synchronous " equals to one to enable only synchronous execution during the training mode.