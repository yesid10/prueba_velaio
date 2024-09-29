import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './state/task.reducer';
import { TaskListComponentComponent } from './task-list-component/task-list-component.component';



@NgModule({
  declarations: [
    AppComponent,
    TaskListComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({
      tasks: taskReducer
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
