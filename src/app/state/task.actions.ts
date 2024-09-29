import { createAction, props } from "@ngrx/store";
import { Task } from "../models/task.model";

export const loadTasks = createAction('[Task] Load Tasks');
export const loadTasksSuccess = createAction(
    '[Task] Load Tasks Success',
    props<{tasks: Task[]}>()
);
export const loadTasksFailure = createAction(
    '[Task] Load Tasks Failure',
    props<{error: string}>()
);


export const addTask = createAction(
    '[Task] Add Task',
    props<{ task: Task}>()
);
export const addTaskSuccess = createAction(
    '[Task] Add Task Success',
    props<{ task: Task}>()
);
export const addTaskFailure = createAction(
    '[Task] Add Task Failure',
    props<{ error: string}>()
);