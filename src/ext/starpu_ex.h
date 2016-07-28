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

/** @file starpu_ex.h
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

#ifndef __STARPU_EX_H_
#define __STARPU_EX_H_

#include <sys/time.h>

static const char SERVER[]= "http://192.168.0.160:3030";

/*after ex_starpu_init, switch mf_is_avail to 1*/
extern int mf_is_avail;

/** @brief Initialize Monitoring Framework API
 *
 *  This function initialize MF API with runtime environments:
 *  MF_USER; MF_TASKID; MF_EXPID
 *
 *  @return 0 on success; -1 otherwise
 */
int ex_starpu_init(void);


/** @brief Get the current timestamps in seconds
 *
 *  @return current timestamp
 */
double ex_starpu_time(void);


/** @brief Get the power value during the time interval according to multiple
 *  available metrics.
 *
 *  @return sum of the average power
 */
double ex_starpu_get_power(double start_t, double end_t);
#endif