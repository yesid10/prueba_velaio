import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './state/task.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TaskEffects } from './state/task.effects';
import { TaskListComponent } from './task-list/task-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    StoreModule.forRoot({
      tasks: taskReducer
    }),
    EffectsModule.forRoot([TaskEffects])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
