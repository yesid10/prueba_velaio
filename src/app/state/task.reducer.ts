import { createReducer, on } from "@ngrx/store";
import { initialTaskState } from "./task.state";
import * as TaskActions from './task.actions'
import { state } from "@angular/animations";

export const taskReducer = createReducer(
    initialTaskState,

    on(TaskActions.loadTasks, (state) => ({
        ...state,
        loading: true
    })),

    on(TaskActions.loadTasksSuccess, (state, {tasks}) => ({
        ...state,
        tasks,
        loading: false,
        error: null,
    })),

    on(TaskActions.loadTasksFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),

    on(TaskActions.addTaskSuccess, (state, {task}) => ({
        ...state,
        tasks: [...state.tasks, task],
        loading: false
    })),

    on(TaskActions.addTaskFailure, (state, {error}) => ({
        ...state,
        error,
        loading: false
    }))
);