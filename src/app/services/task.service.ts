import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Task } from "../models/task.model";

@Injectable({
    providedIn: 'root'
})

export class TaskSerivice{

    private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

    constructor(private http: HttpClient){}

    //Obtener tareas de la api
    getTasks(): Observable<Task[]>{
        return this.http.get<Task[]>(this.apiUrl);
    }

    //Agrear una tarea a la api
    addTask(task: Task): Observable<Task>{
        return this.http.post<Task>(this.apiUrl, task);
    }


}