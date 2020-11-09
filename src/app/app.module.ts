import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    ButtonModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    CoursesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
