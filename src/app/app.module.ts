import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { LibraryComponent } from './library/library.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { BUILDAssessmentComponent } from './build-assessment/build-assessment.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginPageComponent } from './login-page/login-page.component';

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
    CoursesComponent,
    LibraryComponent,
    AchievementsComponent,
    DiscussionComponent,
    BUILDAssessmentComponent,
    ProfileComponent,
    LoginPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
