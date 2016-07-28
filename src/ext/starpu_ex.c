/*
 * Copyright (C) 2016 University of Stuttgart
 *
 * mf_starpu_utils is free software; you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation; either version 2.1 of the License, or (at
 * your option) any later version.
 *
 * See the GNU Lesser General Public License in LICENSE for more details.
 */

/** @file starpu_ex.c
 *  @brief Interface to train StarPU tasks with respect to energy consumption.
 *
 *  This interface declares a means to retrieve energy measurements from
 *  monitoring framework and then feed the values to StarPU power model.
 *  Please see the {@link } for a
 *  usage example. Per default, a developer should first initialize 
 *  Monitoring Framework API via calling #ex_starpu_init.
 *
 *  @author Fangli Pi
 */

#include <string.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <time.h>
#include <sys/time.h>
#include <math.h>
#include <mf_api.h>
#include <hwloc.h>
#include <drivers/cuda/driver_cuda.h>
#include "jsmn.h"
#include "starpu_ex.h"

#define MAX_METRICS_NUM 6

int mf_is_avail = 0;
static int num_cpus = 0;
static int num_gpus = 0;
int hardware_sockets_count(void);
void set_all_metrics(char **metrics, int *metrics_num);
void set_the_nth_metric(char **metrics, int n, char *name);
float get_mf_power_data(double start_time, double end_time, char **metrics, int metrics_num);

int ex_starpu_init(void)
{
	char *user = getenv("MF_USER");
	char *task  = getenv("MF_TASKID");
	char *exp_id = getenv("MF_EXPID");

	if(user == NULL || task == NULL || exp_id == NULL) {
		printf("ERROR: power monitoring could not be initialized because: \n");
		printf("\t\truntime environments are not set.\n");
		return -1;
	}
	mf_api_initialize(SERVER, user, exp_id, task);
	num_cpus = hardware_sockets_count();
	num_gpus = _starpu_get_cuda_device_count();
	mf_is_avail = 1;
	return 0;
}

double ex_starpu_time()
{
	struct timespec mf_date;
	clock_gettime(CLOCK_REALTIME, &mf_date);
	double mf_time = mf_date.tv_sec + (double) (mf_date.tv_nsec / 10e8);
	return mf_time;
}

double ex_starpu_get_power(double start_t, double end_t)
{
	int i;
	double power = 0.0;
	char **Metrics = (char**) 0;
	Metrics = (char **) malloc (MAX_METRICS_NUM * sizeof(char *));
	for(i=0; i<MAX_METRICS_NUM; i++) {
		Metrics[i] = (char *)0;
	}
	int Metrics_num = 0;
	set_all_metrics(Metrics, &Metrics_num);
	if((end_t -start_t) <= 0.5) {
		sleep(1);
	}
	power = get_mf_power_data(start_t, end_t, Metrics, Metrics_num);
	for(i=0; i<MAX_METRICS_NUM; i++) {
		free(Metrics[i]);
	}
	free(Metrics);
	return power;
}

int hardware_sockets_count(void)
{
	int depth;
	int skts_num = 0;
	hwloc_topology_t topology;
	hwloc_topology_init(&topology);
	hwloc_topology_load(topology);
	depth = hwloc_get_type_depth(topology, HWLOC_OBJ_SOCKET);
	if (depth == HWLOC_TYPE_DEPTH_UNKNOWN) {
		printf("*** The number of sockets is unknown\n");
		return -1;
	}
	skts_num=hwloc_get_nbobjs_by_depth(topology, depth);
	//printf("*** %d socket(s)\n", skts_num);
	return skts_num;
}

void set_all_metrics(char **metrics, int *metrics_num)
{
	int i, j;
	for (i=0, j=0; i < num_cpus; i++){
		char metric_package[32]={'\0'};
		char metric_dram[32]={'\0'};
		sprintf(metric_package, "PACKAGE_POWER:PACKAGE%d", i);
		sprintf(metric_dram, "DRAM_POWER:PACKAGE%d", i);
		set_the_nth_metric(metrics, j, metric_package);
		set_the_nth_metric(metrics, j+1, metric_dram);
		j = j+2;
	}
	for (i=0; i < num_gpus; i++){
		char metric_gpu[32]={'\0'};
		sprintf(metric_gpu, "GPU%d:power", i);
		set_the_nth_metric(metrics, j, metric_gpu);
		j++;
	}
	*metrics_num = j;
}
void set_the_nth_metric(char **metrics, int n, char *name)
{
	metrics[n] = malloc(32 * sizeof(char));
	strcpy(metrics[n], name);
}
float get_mf_power_data(double start_time, double end_time, char **metrics, int metrics_num) 
{
	int i, r;
	float avg = 0.0;
	float avg_sum = 0.0;
	char tmp_string[2048]={'\0'};
	char tmp_avg[50]={'\0'};
	jsmn_parser p;
	jsmntok_t t[640];	// We expect no more than 640 tokens

	//printf("\nGet power data from MF:\n");
	char *response = (char *)0;
   	response = malloc(10000 * sizeof(char));
   	if(response == NULL){
   		printf("\nERROR: get_mf_power_data(), response malloc failed.\n");
   		return -1;
   	}
   	//memset(response, 0, 10000);
   	mf_api_stats_metrics_by_interval(metrics, metrics_num, start_time, end_time, response);
   	if(strlen(response) == 0 || strstr(response, "null") != NULL || strstr(response, "error") != NULL){
   		printf("\nERROR: Get energy data from MF failed.\n");
   		return -1;
   	}
   	//get the float avg value
	jsmn_init(&p);
	r = jsmn_parse(&p, response, strlen(response), t, sizeof(t)/sizeof(t[0]));
	for (i = 1; i < r; i++) {
		memset(tmp_string, 0, 2048);
		memset(tmp_avg, 0, 50);
		strncpy(tmp_string, response+t[i].start, t[i].end-t[i].start);
		if(strcmp(tmp_string, "avg") == 0) {
			avg = 0.0;
			strncpy(tmp_avg, response+t[i+1].start, t[i+1].end-t[i+1].start);
			sscanf(tmp_avg, "%f", &avg);
			i++;
			if(avg <= 0) {
				free(response);
				return -1;
			}
			avg_sum += avg;
			//printf("\n[DEBUG] tmp_avg is : %s\n", tmp_avg);
		}
	}
	//printf("\n[DEBUG] avg_sum is: %f\n", avg_sum);
	/*if(response != NULL && strlen(response) != 0) {
		//printf("\nresponse length is %d\n", strlen(response));
		free(response);
	}*/
	free(response);
	return avg_sum;
}
