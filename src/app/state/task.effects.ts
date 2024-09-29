import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TaskSerivice } from "../services/task.service";
import * as TaskActions from './task.actions';
import { catchError, map, mergeMap, of } from "rxjs";
import { Task } from "../models/task.model";

@Injectable()

export class TaskEffects {

    constructor(
        private actions$: Actions,
        private tasksService: TaskSerivice
    ) { }

    //Efecto para hacer un llamado a las tareas
    loadTasks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.loadTasks),
            mergeMap(() =>
                this.tasksService.getTasks().pipe(
                    map((tasks: Task[]) => TaskActions.loadTasksSuccess({ tasks })),
                    catchError((error) => of(TaskActions.loadTasksFailure({ error })))
                )
            )
        )
    )

    // Efecto para agregar una nueva tarea a través de la API
    addTask$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.addTask),  
            mergeMap((action) =>
                this.tasksService.addTask(action.task).pipe(  
                    map((task: Task) => TaskActions.addTaskSuccess({ task })), 
                    catchError((error) => of(TaskActions.addTaskFailure({ error }))) 
                )
            )
        )
    );

}