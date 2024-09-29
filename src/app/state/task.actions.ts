import { createAction, props } from "@ngrx/store";
import { Task } from "../models/task.model";


//Accion para cargar tareas
export const loadTasks = createAction('[Task] Load Tasks');

//Accion para indicar el exito en la carga de tareas
export const loadTasksSuccess = createAction(
    '[Task] Load Tasks Success',
    props<{tasks: Task[]}>()
);

//Accion para indicar el fallo en la carga de tareas
export const loadTasksFailure = createAction(
    '[Task] Load Tasks Failure',
    props<{error: string}>()
);

//Accion para agregar taerea
export const addTask = createAction(
    '[Task] Add Task',
    props<{ task: Task}>()
);

//Accion para agregar exito en la carga de tareas
export const addTaskSuccess = createAction(
    '[Task] Add Task Success',
    props<{ task: Task}>()
);

//Accion para agregar fallo en la carga de tareas
export const addTaskFailure = createAction(
    '[Task] Add Task Failure',
    props<{ error: string}>()
);