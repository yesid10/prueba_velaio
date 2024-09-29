import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { Store } from '@ngrx/store';
import { TaskState } from '../state/task.state';
import * as TaskActions from '../state/task.actions';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})


export class TaskListComponent implements OnInit {


  tasks$: Observable<Task[]>;

  constructor(private store: Store<{tasks: {tasks: Task[]}}>){
    this.tasks$= this.store.select(state => state.tasks.tasks);
  };

  ngOnInit(): void {
    //Se cargan las tareas al iniciar el componente
    this.store.dispatch(TaskActions.loadTasks())

    this.tasks$.subscribe(tasks => {
      console.log('Tareas cargadas:', tasks)
    })
  }
}
