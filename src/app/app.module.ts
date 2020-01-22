import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentMarksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
