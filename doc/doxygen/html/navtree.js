var NAVTREE =
[
  [ "StarPU Handbook", "index.html", [
    [ "Introduction", "index.html", null ],
    [ "Building and Installing StarPU", "BuildingAndInstallingStarPU.html", [
      [ "Installing a Binary Package", "BuildingAndInstallingStarPU.html#InstallingABinaryPackage", null ],
      [ "Installing from Source", "BuildingAndInstallingStarPU.html#InstallingFromSource", [
        [ "Optional Dependencies", "BuildingAndInstallingStarPU.html#OptionalDependencies", null ],
        [ "Getting Sources", "BuildingAndInstallingStarPU.html#GettingSources", null ],
        [ "Configuring StarPU", "BuildingAndInstallingStarPU.html#ConfiguringStarPU", null ],
        [ "Building StarPU", "BuildingAndInstallingStarPU.html#BuildingStarPU", null ],
        [ "Installing StarPU", "BuildingAndInstallingStarPU.html#InstallingStarPU", null ]
      ] ],
      [ "Setting up Your Own Code", "BuildingAndInstallingStarPU.html#SettingUpYourOwnCode", [
        [ "Setting Flags for Compiling, Linking and Running Applications", "BuildingAndInstallingStarPU.html#SettingFlagsForCompilingLinkingAndRunningApplications", null ],
        [ "Running a Basic StarPU Application", "BuildingAndInstallingStarPU.html#RunningABasicStarPUApplication", null ],
        [ "Running a Basic StarPU Application on Microsoft Visual C", "BuildingAndInstallingStarPU.html#RunningABasicStarPUApplicationOnMicrosoft", null ],
        [ "Kernel Threads Started by StarPU", "BuildingAndInstallingStarPU.html#KernelThreadsStartedByStarPU", null ],
        [ "Enabling OpenCL", "BuildingAndInstallingStarPU.html#EnablingOpenCL", null ]
      ] ],
      [ "Benchmarking StarPU", "BuildingAndInstallingStarPU.html#BenchmarkingStarPU", [
        [ "Task Size Overhead", "BuildingAndInstallingStarPU.html#TaskSizeOverhead", null ],
        [ "Data Transfer Latency", "BuildingAndInstallingStarPU.html#DataTransferLatency", null ],
        [ "Matrix-Matrix Multiplication", "BuildingAndInstallingStarPU.html#MatrixMatrixMultiplication", null ],
        [ "Cholesky Factorization", "BuildingAndInstallingStarPU.html#CholeskyFactorization", null ],
        [ "LU Factorization", "BuildingAndInstallingStarPU.html#LUFactorization", null ],
        [ "Simulated benchmarks", "BuildingAndInstallingStarPU.html#SimulatedBenchmarks", null ]
      ] ]
    ] ],
    [ "Basic Examples", "BasicExamples.html", [
      [ "Hello World Using The C Extension", "BasicExamples.html#HelloWorldUsingTheCExtension", null ],
      [ "Hello World Using StarPU's API", "BasicExamples.html#HelloWorldUsingStarPUAPI", [
        [ "Required Headers", "BasicExamples.html#RequiredHeaders", null ],
        [ "Defining A Codelet", "BasicExamples.html#DefiningACodelet", null ],
        [ "Submitting A Task", "BasicExamples.html#SubmittingATask", null ],
        [ "Execution Of Hello World", "BasicExamples.html#ExecutionOfHelloWorld", null ],
        [ "Passing Arguments To The Codelet", "BasicExamples.html#PassingArgumentsToTheCodelet", null ],
        [ "Defining A Callback", "BasicExamples.html#DefiningACallback", null ],
        [ "Where To Execute A Codelet", "BasicExamples.html#WhereToExecuteACodelet", null ]
      ] ],
      [ "Vector Scaling Using the C Extension", "BasicExamples.html#VectorScalingUsingTheCExtension", [
        [ "Adding an OpenCL Task Implementation", "BasicExamples.html#AddingAnOpenCLTaskImplementation", null ],
        [ "Adding a CUDA Task Implementation", "BasicExamples.html#AddingACUDATaskImplementation", null ]
      ] ],
      [ "Vector Scaling Using StarPU's API", "BasicExamples.html#VectorScalingUsingStarPUAPI", [
        [ "Source Code of Vector Scaling", "BasicExamples.html#SourceCodeOfVectorScaling", null ],
        [ "Execution of Vector Scaling", "BasicExamples.html#ExecutionOfVectorScaling", null ]
      ] ],
      [ "Vector Scaling on an Hybrid CPU/GPU Machine", "BasicExamples.html#VectorScalingOnAnHybridCPUGPUMachine", [
        [ "Definition of the CUDA Kernel", "BasicExamples.html#DefinitionOfTheCUDAKernel", null ],
        [ "Definition of the OpenCL Kernel", "BasicExamples.html#DefinitionOfTheOpenCLKernel", null ],
        [ "Definition of the Main Code", "BasicExamples.html#DefinitionOfTheMainCode", null ],
        [ "Execution of Hybrid Vector Scaling", "BasicExamples.html#ExecutionOfHybridVectorScaling", null ]
      ] ]
    ] ],
    [ "Advanced Examples", "AdvancedExamples.html", null ],
    [ "Check List When Performance Are Not There", "CheckListWhenPerformanceAreNotThere.html", [
      [ "Data Related Features That May Improve Performance", "CheckListWhenPerformanceAreNotThere.html#DataRelatedFeaturesToImprovePerformance", null ],
      [ "Task Related Features That May Improve Performance", "CheckListWhenPerformanceAreNotThere.html#TaskRelatedFeaturesToImprovePerformance", null ],
      [ "Scheduling Related Features That May Improve Performance", "CheckListWhenPerformanceAreNotThere.html#SchedulingRelatedFeaturesToImprovePerformance", null ],
      [ "CUDA-specific Optimizations", "CheckListWhenPerformanceAreNotThere.html#CUDA-specificOptimizations", null ],
      [ "OpenCL-specific Optimizations", "CheckListWhenPerformanceAreNotThere.html#OpenCL-specificOptimizations", null ],
      [ "Detection Stuck Conditions", "CheckListWhenPerformanceAreNotThere.html#DetectionStuckConditions", null ],
      [ "How to limit memory used by StarPU and cache buffer allocations", "CheckListWhenPerformanceAreNotThere.html#HowToLimitMemoryPerNode", null ],
      [ "How To Reduce The Memory Footprint Of Internal Data Structures", "CheckListWhenPerformanceAreNotThere.html#HowToReduceTheMemoryFootprintOfInternalDataStructures", null ],
      [ "How to reuse memory", "CheckListWhenPerformanceAreNotThere.html#HowtoReuseMemory", null ],
      [ "Performance Model Calibration", "CheckListWhenPerformanceAreNotThere.html#PerformanceModelCalibration", null ],
      [ "Profiling", "CheckListWhenPerformanceAreNotThere.html#Profiling", null ]
    ] ],
    [ "Tasks In StarPU", "TasksInStarPU.html", [
      [ "Task Granularity", "TasksInStarPU.html#TaskGranularity", null ],
      [ "Task Submission", "TasksInStarPU.html#TaskSubmission", null ],
      [ "Task Priorities", "TasksInStarPU.html#TaskPriorities", null ],
      [ "Setting The Data Handles For A Task", "TasksInStarPU.html#SettingTheDataHandlesForATask", null ],
      [ "Using Multiple Implementations Of A Codelet", "TasksInStarPU.html#UsingMultipleImplementationsOfACodelet", null ],
      [ "Enabling Implementation According To Capabilities", "TasksInStarPU.html#EnablingImplementationAccordingToCapabilities", null ],
      [ "Insert Task Utility", "TasksInStarPU.html#InsertTaskUtility", null ],
      [ "Getting Task Children", "TasksInStarPU.html#GettingTaskChildren", null ],
      [ "Parallel Tasks", "TasksInStarPU.html#ParallelTasks", [
        [ "Fork-mode Parallel Tasks", "TasksInStarPU.html#Fork-modeParallelTasks", null ],
        [ "SPMD-mode Parallel Tasks", "TasksInStarPU.html#SPMD-modeParallelTasks", null ],
        [ "Parallel Tasks Performance", "TasksInStarPU.html#ParallelTasksPerformance", null ],
        [ "Combined Workers", "TasksInStarPU.html#CombinedWorkers", null ],
        [ "Concurrent Parallel Tasks", "TasksInStarPU.html#ConcurrentParallelTasks", null ],
        [ "Synchronization tasks", "TasksInStarPU.html#SynchronizationTasks", null ]
      ] ]
    ] ],
    [ "Data Management", "DataManagement.html", [
      [ "Data Prefetch", "DataManagement.html#DataPrefetch", null ],
      [ "Partitioning Data", "DataManagement.html#PartitioningData", null ],
      [ "Asynchronous Partitioning", "DataManagement.html#AsynchronousPartitioning", null ],
      [ "Manual Partitioning", "DataManagement.html#ManualPartitioning", null ],
      [ "Data Reduction", "DataManagement.html#DataReduction", null ],
      [ "Commute Data Access", "DataManagement.html#DataCommute", null ],
      [ "Concurrent Data accesses", "DataManagement.html#ConcurrentDataAccess", null ],
      [ "Temporary Buffers", "DataManagement.html#TemporaryBuffers", [
        [ "Temporary Data", "DataManagement.html#TemporaryData", null ],
        [ "Scratch Data", "DataManagement.html#ScratchData", null ]
      ] ],
      [ "The Multiformat Interface", "DataManagement.html#TheMultiformatInterface", null ],
      [ "Defining A New Data Interface", "DataManagement.html#DefiningANewDataInterface", null ],
      [ "Specifying a target node for task data", "DataManagement.html#SpecifyingATargetNode", null ]
    ] ],
    [ "Scheduling", "Scheduling.html", [
      [ "Task Scheduling Policy", "Scheduling.html#TaskSchedulingPolicy", null ],
      [ "Task Distribution Vs Data Transfer", "Scheduling.html#TaskDistributionVsDataTransfer", null ],
      [ "Power-based Scheduling", "Scheduling.html#Power-basedScheduling", null ],
      [ "Static Scheduling", "Scheduling.html#StaticScheduling", null ],
      [ "Defining A New Scheduling Policy", "Scheduling.html#DefiningANewSchedulingPolicy", null ]
    ] ],
    [ "Scheduling Contexts", "SchedulingContexts.html", [
      [ "General Ideas", "SchedulingContexts.html#GeneralIdeas", null ],
      [ "Creating A Context", "SchedulingContexts.html#CreatingAContext", null ],
      [ "Modifying A Context", "SchedulingContexts.html#ModifyingAContext", null ],
      [ "Submitting Tasks To A Context", "SchedulingContexts.html#SubmittingTasksToAContext", null ],
      [ "Deleting A Context", "SchedulingContexts.html#DeletingAContext", null ],
      [ "Emptying A Context", "SchedulingContexts.html#EmptyingAContext", null ],
      [ "Contexts Sharing Workers", "SchedulingContexts.html#ContextsSharingWorkers", null ]
    ] ],
    [ "Scheduling Context Hypervisor", "SchedulingContextHypervisor.html", [
      [ "What Is The Hypervisor", "SchedulingContextHypervisor.html#WhatIsTheHypervisor", null ],
      [ "Start the Hypervisor", "SchedulingContextHypervisor.html#StartTheHypervisor", null ],
      [ "Interrogate The Runtime", "SchedulingContextHypervisor.html#InterrogateTheRuntime", null ],
      [ "Trigger the Hypervisor", "SchedulingContextHypervisor.html#TriggerTheHypervisor", null ],
      [ "Resizing Strategies", "SchedulingContextHypervisor.html#ResizingStrategies", null ],
      [ "Defining A New Hypervisor Policy", "SchedulingContextHypervisor.html#DefiningANewHypervisorPolicy", null ]
    ] ],
    [ "Debugging Tools", "DebuggingTools.html", [
      [ "Using The Temanejo Task Debugger", "DebuggingTools.html#UsingTheTemanejoTaskDebugger", null ]
    ] ],
    [ "Online Performance Tools", "OnlinePerformanceTools.html", [
      [ "On-line Performance Feedback", "OnlinePerformanceTools.html#On-linePerformanceFeedback", [
        [ "Enabling On-line Performance Monitoring", "OnlinePerformanceTools.html#EnablingOn-linePerformanceMonitoring", null ],
        [ "Per-task Feedback", "OnlinePerformanceTools.html#Per-taskFeedback", null ],
        [ "Per-codelet Feedback", "OnlinePerformanceTools.html#Per-codeletFeedback", null ],
        [ "Per-worker Feedback", "OnlinePerformanceTools.html#Per-workerFeedback", null ],
        [ "Bus-related Feedback", "OnlinePerformanceTools.html#Bus-relatedFeedback", null ],
        [ "StarPU-Top Interface", "OnlinePerformanceTools.html#StarPU-TopInterface", null ]
      ] ],
      [ "Task And Worker Profiling", "OnlinePerformanceTools.html#TaskAndWorkerProfiling", null ],
      [ "Performance Model Example", "OnlinePerformanceTools.html#PerformanceModelExample", null ],
      [ "Data trace and tasks length", "OnlinePerformanceTools.html#DataTrace", null ]
    ] ],
    [ "Offline Performance Tools", "OfflinePerformanceTools.html", [
      [ "Off-line Performance Feedback", "OfflinePerformanceTools.html#Off-linePerformanceFeedback", [
        [ "Generating Traces With FxT", "OfflinePerformanceTools.html#GeneratingTracesWithFxT", null ],
        [ "Creating a Gantt Diagram", "OfflinePerformanceTools.html#CreatingAGanttDiagram", null ],
        [ "Creating a DAG With Graphviz", "OfflinePerformanceTools.html#CreatingADAGWithGraphviz", null ],
        [ "Getting task details", "OfflinePerformanceTools.html#TraceTaskDetails", null ],
        [ "Monitoring Activity", "OfflinePerformanceTools.html#MonitoringActivity", null ],
        [ "Getting modular schedular animation", "OfflinePerformanceTools.html#Animation", null ]
      ] ],
      [ "Performance Of Codelets", "OfflinePerformanceTools.html#PerformanceOfCodelets", null ],
      [ "Trace statistics", "OfflinePerformanceTools.html#TraceStatistics", null ],
      [ "Theoretical Lower Bound On Execution Time", "OfflinePerformanceTools.html#TheoreticalLowerBoundOnExecutionTime", null ],
      [ "Theoretical Lower Bound On Execution Time Example", "OfflinePerformanceTools.html#TheoreticalLowerBoundOnExecutionTimeExample", null ],
      [ "Memory Feedback", "OfflinePerformanceTools.html#MemoryFeedback", null ],
      [ "Data Statistics", "OfflinePerformanceTools.html#DataStatistics", null ]
    ] ],
    [ "Frequently Asked Questions", "FrequentlyAskedQuestions.html", [
      [ "How To Initialize A Computation Library Once For Each Worker?", "FrequentlyAskedQuestions.html#HowToInitializeAComputationLibraryOnceForEachWorker", null ],
      [ "Using The Driver API", "FrequentlyAskedQuestions.html#UsingTheDriverAPI", null ],
      [ "On-GPU Rendering", "FrequentlyAskedQuestions.html#On-GPURendering", null ],
      [ "Using StarPU With MKL 11 (Intel Composer XE 2013)", "FrequentlyAskedQuestions.html#UsingStarPUWithMKL", null ],
      [ "Thread Binding on NetBSD", "FrequentlyAskedQuestions.html#ThreadBindingOnNetBSD", null ],
      [ "Interleaving StarPU and non-StarPU code", "FrequentlyAskedQuestions.html#PauseResume", null ]
    ] ],
    [ "Out Of Core", "OutOfCore.html", [
      [ "Introduction", "OutOfCore.html#Introduction", null ],
      [ "Use a new disk memory", "OutOfCore.html#UseANewDiskMemory", null ],
      [ "Disk functions", "OutOfCore.html#DiskFunctions", null ],
      [ "Examples: disk_copy", "OutOfCore.html#ExampleDiskCopy", null ],
      [ "Examples: disk_compute", "OutOfCore.html#ExampleDiskCompute", null ]
    ] ],
    [ "MPI Support", "MPISupport.html", [
      [ "Simple Example", "MPISupport.html#SimpleExample", null ],
      [ "Point To Point Communication", "MPISupport.html#PointToPointCommunication", null ],
      [ "Exchanging User Defined Data Interface", "MPISupport.html#ExchangingUserDefinedDataInterface", null ],
      [ "MPI Insert Task Utility", "MPISupport.html#MPIInsertTaskUtility", null ],
      [ "MPI cache support", "MPISupport.html#MPICache", null ],
      [ "MPI Data migration", "MPISupport.html#MPIMigration", null ],
      [ "MPI Collective Operations", "MPISupport.html#MPICollective", null ]
    ] ],
    [ "FFT Support", "FFTSupport.html", [
      [ "Compilation", "FFTSupport.html#Compilation", null ]
    ] ],
    [ "MIC Xeon Phi / SCC Support", "MICSCCSupport.html", [
      [ "Compilation", "MICSCCSupport.html#Compilation", null ],
      [ "Porting Applications To MIC Xeon Phi / SCC", "MICSCCSupport.html#PortingApplicationsToMICSCC", null ],
      [ "Launching Programs", "MICSCCSupport.html#LaunchingPrograms", null ]
    ] ],
    [ "C Extensions", "cExtensions.html", [
      [ "Defining Tasks", "cExtensions.html#DefiningTasks", null ],
      [ "Initialization, Termination, and Synchronization", "cExtensions.html#InitializationTerminationAndSynchronization", null ],
      [ "Registered Data Buffers", "cExtensions.html#RegisteredDataBuffers", null ],
      [ "Using C Extensions Conditionally", "cExtensions.html#UsingCExtensionsConditionally", null ]
    ] ],
    [ "SOCL OpenCL Extensions", "SOCLOpenclExtensions.html", null ],
    [ "SimGrid Support", "SimGridSupport.html", [
      [ "Preparing your application for simulation.", "SimGridSupport.html#Preparing", null ],
      [ "Calibration", "SimGridSupport.html#Calibration", null ],
      [ "Simulation", "SimGridSupport.html#Simulation", null ],
      [ "Simulation On Another Machine", "SimGridSupport.html#SimulationOnAnotherMachine", null ],
      [ "Simulation examples", "SimGridSupport.html#SimulationExamples", null ],
      [ "simulation", "SimGridSupport.html#Tweaking", null ],
      [ "applications", "SimGridSupport.html#MPI", null ],
      [ "applications", "SimGridSupport.html#Debugging", null ]
    ] ],
    [ "The StarPU OpenMP Runtime Support (SORS)", "OpenMPRuntimeSupport.html", [
      [ "Implementation Details and Specificities", "OpenMPRuntimeSupport.html#Implementation", [
        [ "Main Thread", "OpenMPRuntimeSupport.html#MainThread", null ],
        [ "Extended Task Semantics", "OpenMPRuntimeSupport.html#TaskSemantics", null ]
      ] ],
      [ "Configuration", "OpenMPRuntimeSupport.html#Configuration", null ],
      [ "Initialization and Shutdown", "OpenMPRuntimeSupport.html#InitExit", null ],
      [ "Parallel Regions and Worksharing", "OpenMPRuntimeSupport.html#Parallel", [
        [ "Parallel Regions", "OpenMPRuntimeSupport.html#OMPParallel", null ],
        [ "Parallel For", "OpenMPRuntimeSupport.html#OMPFor", null ],
        [ "Sections", "OpenMPRuntimeSupport.html#OMPSections", null ],
        [ "Single", "OpenMPRuntimeSupport.html#OMPSingle", null ]
      ] ],
      [ "Tasks", "OpenMPRuntimeSupport.html#Task", [
        [ "Explicit Tasks", "OpenMPRuntimeSupport.html#OMPTask", null ],
        [ "Data Dependencies", "OpenMPRuntimeSupport.html#DataDependencies", null ],
        [ "TaskWait and TaskGroup", "OpenMPRuntimeSupport.html#TaskSyncs", null ]
      ] ],
      [ "Synchronization Support", "OpenMPRuntimeSupport.html#Synchronization", [
        [ "Simple Locks", "OpenMPRuntimeSupport.html#SimpleLock", null ],
        [ "Nestable Locks", "OpenMPRuntimeSupport.html#NestableLock", null ],
        [ "Critical Sections", "OpenMPRuntimeSupport.html#Critical", null ],
        [ "Barriers", "OpenMPRuntimeSupport.html#Barrier", null ]
      ] ]
    ] ],
    [ "Execution Configuration Through Environment Variables", "ExecutionConfigurationThroughEnvironmentVariables.html", [
      [ "Configuring Workers", "ExecutionConfigurationThroughEnvironmentVariables.html#ConfiguringWorkers", null ],
      [ "Configuring The Scheduling Engine", "ExecutionConfigurationThroughEnvironmentVariables.html#ConfiguringTheSchedulingEngine", null ],
      [ "Extensions", "ExecutionConfigurationThroughEnvironmentVariables.html#Extensions", null ],
      [ "Miscellaneous And Debug", "ExecutionConfigurationThroughEnvironmentVariables.html#MiscellaneousAndDebug", null ],
      [ "Configuring The Hypervisor", "ExecutionConfigurationThroughEnvironmentVariables.html#ConfiguringTheHypervisor", null ]
    ] ],
    [ "Compilation Configuration", "CompilationConfiguration.html", [
      [ "Common Configuration", "CompilationConfiguration.html#CommonConfiguration", null ],
      [ "Configuring Workers", "CompilationConfiguration.html#ConfiguringWorkers", null ],
      [ "Extension Configuration", "CompilationConfiguration.html#ExtensionConfiguration", null ],
      [ "Advanced Configuration", "CompilationConfiguration.html#AdvancedConfiguration", null ]
    ] ],
    [ "", "Files.html", null ],
    [ "Full source code for the ’Scaling a Vector’ example", "FullSourceCodeVectorScal.html", [
      [ "Main Application", "FullSourceCodeVectorScal.html#MainApplication", null ],
      [ "CPU Kernel", "FullSourceCodeVectorScal.html#CPUKernel", null ],
      [ "CUDA Kernel", "FullSourceCodeVectorScal.html#CUDAKernel", null ],
      [ "OpenCL Kernel", "FullSourceCodeVectorScal.html#OpenCLKernel", [
        [ "Invoking the Kernel", "FullSourceCodeVectorScal.html#InvokingtheKernel", null ],
        [ "Source of the Kernel", "FullSourceCodeVectorScal.html#SourceoftheKernel", null ]
      ] ]
    ] ],
    [ "The GNU Free Documentation License", "GNUFreeDocumentationLicense.html", [
      [ "ADDENDUM: How to use this License for your documents", "GNUFreeDocumentationLicense.html#ADDENDUM", null ]
    ] ],
    [ "Modularized Schedulers", "ModularizedScheduler.html", [
      [ "Introduction", "ModularizedScheduler.html#Introduction", null ],
      [ "Using Modularized Schedulers", "ModularizedScheduler.html#UsingModularizedSchedulers", [
        [ "Existing Modularized Schedulers", "ModularizedScheduler.html#ExistingModularizedSchedulers", null ],
        [ "An Example : The Tree-Eager-Prefetching Strategy", "ModularizedScheduler.html#ExampleTreeEagerPrefetchingStrategy", null ],
        [ "Interface", "ModularizedScheduler.html#Interface", null ]
      ] ],
      [ "Build a Modularized Scheduler", "ModularizedScheduler.html#BuildAModularizedScheduler", [
        [ "Pre-implemented Components", "ModularizedScheduler.html#PreImplementedComponents", null ],
        [ "Progression And Validation Rules", "ModularizedScheduler.html#ProgressionAndValidationRules", null ],
        [ "Implement a Modularized Scheduler", "ModularizedScheduler.html#ImplementAModularizedScheduler", null ]
      ] ],
      [ "Write a Scheduling Component", "ModularizedScheduler.html#WriteASchedulingComponent", [
        [ "Generic Scheduling Component", "ModularizedScheduler.html#GenericSchedulingComponent", null ],
        [ "Instantiation : Redefine the Interface", "ModularizedScheduler.html#InstantiationRedefineInterface", null ],
        [ "Detailed Progression and Validation Rules", "ModularizedScheduler.html#DetailedProgressionAndValidationRules", null ]
      ] ]
    ] ],
    [ "Deprecated List", "deprecated.html", null ],
    [ "Modules", "modules.html", "modules" ],
    [ "Data Structures", null, [
      [ "Data Structures", "annotated.html", null ],
      [ "Data Structure Index", "classes.html", null ],
      [ "Data Fields", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Variables", "functions_vars.html", "functions_vars" ]
      ] ]
    ] ],
    [ "Files", null, [
      [ "File List", "files.html", "files" ],
      [ "Globals", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", "globals_defs" ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"AdvancedExamples.html",
"functions_0x72.html",
"group__API__Data__Interfaces.html#a755b7d337f0ac2bdf8752bba1039e1b4",
"group__API__Data__Partition.html#aeadc5f4c1657e545f2139332321c6450",
"group__API__Modularized__Scheduler.html#a3c23297722c21dfafd05770292e56951",
"group__API__OpenMP__Runtime__Support.html#gga33af06875785da29f3988d3a985e99f8a08bd52bc5cc5af8ec937618f1402bb4a",
"group__API__SC__Hypervisor.html#ab56be8402f4a8e45938a7f688dc0e304",
"group__API__Task__Lists.html",
"sc__hypervisor__config_8h.html#gabf2475a79863da74418a12b2c5c37871",
"starpu__data_8h.html#gga6f3fbb6e918d0135ccb68473a8ee5ca1a7169c196e1585c24e9f2ab73d7d42e3d",
"starpu__mpi_8h.html#ga008d0df24380455d6b9301ae750ccd4c",
"starpu__scc_8h.html",
"starpu__task__util_8h.html#ga750b87a6ea137c903f02c53029d1131d",
"starpufft_8h.html#ab50c7c7d8bdec03bc2ba556c654198f7"
];

var navTreeSubIndices = new Array();

function getData(varName)
{
  var i = varName.lastIndexOf('/');
  var n = i>=0 ? varName.substring(i+1) : varName;
  return eval(n.replace(/\-/g,'_'));
}

function stripPath(uri)
{
  return uri.substring(uri.lastIndexOf('/')+1);
}

function stripPath2(uri)
{
  var i = uri.lastIndexOf('/');
  var s = uri.substring(i+1);
  var m = uri.substring(0,i+1).match(/\/d\w\/d\w\w\/$/);
  return m ? uri.substring(i-6) : s;
}

function localStorageSupported()
{
  return 'localStorage' in window && window['localStorage'] !== null;
}

function storeLink(link)
{
  if (!$("#nav-sync").hasClass('sync') && localStorageSupported()) {
      window.localStorage.setItem('navpath',link);
  }
}

function deleteLink()
{
  if (localStorageSupported()) {
    window.localStorage.setItem('navpath','');
  } 
}

function cachedLink()
{
  if (localStorageSupported()) {
    return window.localStorage.getItem('navpath');
  } else {
    return '';
  }
}

function getScript(scriptName,func,show)
{
  var head = document.getElementsByTagName("head")[0]; 
  var script = document.createElement('script');
  script.id = scriptName;
  script.type = 'text/javascript';
  script.onload = func; 
  script.src = scriptName+'.js'; 
  if ($.browser.msie && $.browser.version<=8) { 
    // script.onload does work with older versions of IE
    script.onreadystatechange = function() {
      if (script.readyState=='complete' || script.readyState=='loaded') { 
        func(); if (show) showRoot(); 
      }
    }
  }
  head.appendChild(script); 
}

function createIndent(o,domNode,node,level)
{
  if (node.parentNode && node.parentNode.parentNode) {
    createIndent(o,domNode,node.parentNode,level+1);
  }
  var imgNode = document.createElement("img");
  imgNode.width = 16;
  imgNode.height = 22;
  if (level==0 && node.childrenData) {
    node.plus_img = imgNode;
    node.expandToggle = document.createElement("a");
    node.expandToggle.href = "javascript:void(0)";
    node.expandToggle.onclick = function() {
      if (node.expanded) {
        $(node.getChildrenUL()).slideUp("fast");
        if (node.isLast) {
          node.plus_img.src = node.relpath+"ftv2plastnode.png";
        } else {
          node.plus_img.src = node.relpath+"ftv2pnode.png";
        }
        node.expanded = false;
      } else {
        expandNode(o, node, false, false);
      }
    }
    node.expandToggle.appendChild(imgNode);
    domNode.appendChild(node.expandToggle);
  } else {
    domNode.appendChild(imgNode);
  }
  if (level==0) {
    if (node.isLast) {
      if (node.childrenData) {
        imgNode.src = node.relpath+"ftv2plastnode.png";
      } else {
        imgNode.src = node.relpath+"ftv2lastnode.png";
        domNode.appendChild(imgNode);
      }
    } else {
      if (node.childrenData) {
        imgNode.src = node.relpath+"ftv2pnode.png";
      } else {
        imgNode.src = node.relpath+"ftv2node.png";
        domNode.appendChild(imgNode);
      }
    }
  } else {
    if (node.isLast) {
      imgNode.src = node.relpath+"ftv2blank.png";
    } else {
      imgNode.src = node.relpath+"ftv2vertline.png";
    }
  }
  imgNode.border = "0";
}

function newNode(o, po, text, link, childrenData, lastNode)
{
  var node = new Object();
  node.children = Array();
  node.childrenData = childrenData;
  node.depth = po.depth + 1;
  node.relpath = po.relpath;
  node.isLast = lastNode;

  node.li = document.createElement("li");
  po.getChildrenUL().appendChild(node.li);
  node.parentNode = po;

  node.itemDiv = document.createElement("div");
  node.itemDiv.className = "item";

  node.labelSpan = document.createElement("span");
  node.labelSpan.className = "label";

  createIndent(o,node.itemDiv,node,0);
  node.itemDiv.appendChild(node.labelSpan);
  node.li.appendChild(node.itemDiv);

  var a = document.createElement("a");
  node.labelSpan.appendChild(a);
  node.label = document.createTextNode(text);
  node.expanded = false;
  a.appendChild(node.label);
  if (link) {
    var url;
    if (link.substring(0,1)=='^') {
      url = link.substring(1);
      link = url;
    } else {
      url = node.relpath+link;
    }
    a.className = stripPath(link.replace('#',':'));
    if (link.indexOf('#')!=-1) {
      var aname = '#'+link.split('#')[1];
      var srcPage = stripPath($(location).attr('pathname'));
      var targetPage = stripPath(link.split('#')[0]);
      a.href = srcPage!=targetPage ? url : '#';
      a.onclick = function(){
        storeLink(link);
        if (!$(a).parent().parent().hasClass('selected'))
        {
          $('.item').removeClass('selected');
          $('.item').removeAttr('id');
          $(a).parent().parent().addClass('selected');
          $(a).parent().parent().attr('id','selected');
        }
        var pos, anchor = $(aname), docContent = $('#doc-content');
        if (anchor.parent().attr('class')=='memItemLeft') {
          pos = anchor.parent().position().top;
        } else if (anchor.position()) {
          pos = anchor.position().top;
        }
        if (pos) {
          var dist = Math.abs(Math.min(
                     pos-docContent.offset().top,
                     docContent[0].scrollHeight-
                     docContent.height()-docContent.scrollTop()));
          docContent.animate({
            scrollTop: pos + docContent.scrollTop() - docContent.offset().top
          },Math.max(50,Math.min(500,dist)),function(){
            window.location.replace(aname);
          });
        }
      };
    } else {
      a.href = url;
      a.onclick = function() { storeLink(link); }
    }
  } else {
    if (childrenData != null) 
    {
      a.className = "nolink";
      a.href = "javascript:void(0)";
      a.onclick = node.expandToggle.onclick;
    }
  }

  node.childrenUL = null;
  node.getChildrenUL = function() {
    if (!node.childrenUL) {
      node.childrenUL = document.createElement("ul");
      node.childrenUL.className = "children_ul";
      node.childrenUL.style.display = "none";
      node.li.appendChild(node.childrenUL);
    }
    return node.childrenUL;
  };

  return node;
}

function showRoot()
{
  var headerHeight = $("#top").height();
  var footerHeight = $("#nav-path").height();
  var windowHeight = $(window).height() - headerHeight - footerHeight;
  (function (){ // retry until we can scroll to the selected item
    try {
      var navtree=$('#nav-tree');
      navtree.scrollTo('#selected',0,{offset:-windowHeight/2});
    } catch (err) {
      setTimeout(arguments.callee, 0);
    }
  })();
}

function expandNode(o, node, imm, showRoot)
{
  if (node.childrenData && !node.expanded) {
    if (typeof(node.childrenData)==='string') {
      var varName    = node.childrenData;
      getScript(node.relpath+varName,function(){
        node.childrenData = getData(varName);
        expandNode(o, node, imm, showRoot);
      }, showRoot);
    } else {
      if (!node.childrenVisited) {
        getNode(o, node);
      } if (imm || ($.browser.msie && $.browser.version>8)) { 
        // somehow slideDown jumps to the start of tree for IE9 :-(
        $(node.getChildrenUL()).show();
      } else {
        $(node.getChildrenUL()).slideDown("fast");
      }
      if (node.isLast) {
        node.plus_img.src = node.relpath+"ftv2mlastnode.png";
      } else {
        node.plus_img.src = node.relpath+"ftv2mnode.png";
      }
      node.expanded = true;
    }
  }
}

function glowEffect(n,duration)
{
  n.addClass('glow').delay(duration).queue(function(next){
    $(this).removeClass('glow');next();
  });
}

function highlightAnchor()
{
  var anchor = $($(location).attr('hash'));
  if (anchor.parent().attr('class')=='memItemLeft'){
    var rows = $('.memberdecls tr[class$="'+
               window.location.hash.substring(1)+'"]');
    glowEffect(rows.children(),300); // member without details
  } else if (anchor.parents().slice(2).prop('tagName')=='TR') {
    glowEffect(anchor.parents('div.memitem'),1000); // enum value
  } else if (anchor.parent().attr('class')=='fieldtype'){
    glowEffect(anchor.parent().parent(),1000); // struct field
  } else if (anchor.parent().is(":header")) {
    glowEffect(anchor.parent(),1000); // section header
  } else {
    glowEffect(anchor.next(),1000); // normal member
  }
}

function selectAndHighlight(hash,n)
{
  var a;
  if (hash) {
    var link=stripPath($(location).attr('pathname'))+':'+hash.substring(1);
    a=$('.item a[class$="'+link+'"]');
  }
  if (a && a.length) {
    a.parent().parent().addClass('selected');
    a.parent().parent().attr('id','selected');
    highlightAnchor();
  } else if (n) {
    $(n.itemDiv).addClass('selected');
    $(n.itemDiv).attr('id','selected');
  }
  showRoot();
}

function showNode(o, node, index, hash)
{
  if (node && node.childrenData) {
    if (typeof(node.childrenData)==='string') {
      var varName    = node.childrenData;
      getScript(node.relpath+varName,function(){
        node.childrenData = getData(varName);
        showNode(o,node,index,hash);
      },true);
    } else {
      if (!node.childrenVisited) {
        getNode(o, node);
      }
      $(node.getChildrenUL()).show();
      if (node.isLast) {
        node.plus_img.src = node.relpath+"ftv2mlastnode.png";
      } else {
        node.plus_img.src = node.relpath+"ftv2mnode.png";
      }
      node.expanded = true;
      var n = node.children[o.breadcrumbs[index]];
      if (index+1<o.breadcrumbs.length) {
        showNode(o,n,index+1,hash);
      } else {
        if (typeof(n.childrenData)==='string') {
          var varName = n.childrenData;
          getScript(n.relpath+varName,function(){
            n.childrenData = getData(varName);
            node.expanded=false;
            showNode(o,node,index,hash); // retry with child node expanded
          },true);
        } else {
          var rootBase = stripPath(o.toroot.replace(/\..+$/, ''));
          if (rootBase=="index" || rootBase=="pages") {
            expandNode(o, n, true, true);
          }
          selectAndHighlight(hash,n);
        }
      }
    }
  } else {
    selectAndHighlight(hash);
  }
}

function getNode(o, po)
{
  po.childrenVisited = true;
  var l = po.childrenData.length-1;
  for (var i in po.childrenData) {
    var nodeData = po.childrenData[i];
    po.children[i] = newNode(o, po, nodeData[0], nodeData[1], nodeData[2],
      i==l);
  }
}

function gotoNode(o,subIndex,root,hash,relpath)
{
  var nti = navTreeSubIndices[subIndex][root+hash];
  o.breadcrumbs = $.extend(true, [], nti ? nti : navTreeSubIndices[subIndex][root]);
  if (!o.breadcrumbs && root!=NAVTREE[0][1]) { // fallback: show index
    navTo(o,NAVTREE[0][1],"",relpath);
    $('.item').removeClass('selected');
    $('.item').removeAttr('id');
  }
  if (o.breadcrumbs) {
    o.breadcrumbs.unshift(0); // add 0 for root node
    showNode(o, o.node, 0, hash);
  }
}

function navTo(o,root,hash,relpath)
{
  var link = cachedLink();
  if (link) {
    var parts = link.split('#');
    root = parts[0];
    if (parts.length>1) hash = '#'+parts[1];
    else hash='';
  }
  if (root==NAVTREE[0][1]) {
    $('#nav-sync').css('top','30px');
  } else {
    $('#nav-sync').css('top','5px');
  }
  if (hash.match(/^#l\d+$/)) {
    var anchor=$('a[name='+hash.substring(1)+']');
    glowEffect(anchor.parent(),1000); // line number
    hash=''; // strip line number anchors
    //root=root.replace(/_source\./,'.'); // source link to doc link
  }
  var url=root+hash;
  var i=-1;
  while (NAVTREEINDEX[i+1]<=url) i++;
  if (navTreeSubIndices[i]) {
    gotoNode(o,i,root,hash,relpath)
  } else {
    getScript(relpath+'navtreeindex'+i,function(){
      navTreeSubIndices[i] = eval('NAVTREEINDEX'+i);
      if (navTreeSubIndices[i]) {
        gotoNode(o,i,root,hash,relpath);
      }
    },true);
  }
}

function toggleSyncButton(relpath)
{
  var navSync = $('#nav-sync');
  if (navSync.hasClass('sync')) {
    navSync.removeClass('sync');
    navSync.html('<img src="'+relpath+'sync_off.png"/>');
    storeLink(stripPath2($(location).attr('pathname'))+$(location).attr('hash'));
  } else {
    navSync.addClass('sync');
    navSync.html('<img src="'+relpath+'sync_on.png"/>');
    deleteLink();
  }
}

function initNavTree(toroot,relpath)
{
  var o = new Object();
  o.toroot = toroot;
  o.node = new Object();
  o.node.li = document.getElementById("nav-tree-contents");
  o.node.childrenData = NAVTREE;
  o.node.children = new Array();
  o.node.childrenUL = document.createElement("ul");
  o.node.getChildrenUL = function() { return o.node.childrenUL; };
  o.node.li.appendChild(o.node.childrenUL);
  o.node.depth = 0;
  o.node.relpath = relpath;
  o.node.expanded = false;
  o.node.isLast = true;
  o.node.plus_img = document.createElement("img");
  o.node.plus_img.src = relpath+"ftv2pnode.png";
  o.node.plus_img.width = 16;
  o.node.plus_img.height = 22;

  if (localStorageSupported()) {
    var navSync = $('#nav-sync');
    if (cachedLink()) {
      navSync.html('<img src="'+relpath+'sync_off.png"/>');
      navSync.removeClass('sync');
    } else {
      navSync.html('<img src="'+relpath+'sync_on.png"/>');
    }
    navSync.click(function(){ toggleSyncButton(relpath); });
  }

  navTo(o,toroot,window.location.hash,relpath);

  $(window).bind('hashchange', function(){
     if (window.location.hash && window.location.hash.length>1){
       var a;
       if ($(location).attr('hash')){
         var clslink=stripPath($(location).attr('pathname'))+':'+
                               $(location).attr('hash').substring(1);
         a=$('.item a[class$="'+clslink+'"]');
       }
       if (a==null || !$(a).parent().parent().hasClass('selected')){
         $('.item').removeClass('selected');
         $('.item').removeAttr('id');
       }
       var link=stripPath2($(location).attr('pathname'));
       navTo(o,link,$(location).attr('hash'),relpath);
     }
  })

  $(window).load(showRoot);
}

