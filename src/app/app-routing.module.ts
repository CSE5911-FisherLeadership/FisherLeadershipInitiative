import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchievementsComponent } from './achievements/achievements.component';
import { BUILDAssessmentComponent } from './build-assessment/build-assessment.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { LibraryComponent } from './library/library.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'discussion', component: DiscussionComponent },
  { path: 'build-assessment', component: BUILDAssessmentComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }