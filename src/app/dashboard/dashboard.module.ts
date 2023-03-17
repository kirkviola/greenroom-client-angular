import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';

const routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'student',
    component: StudentDashboardComponent
  },
  {
    path: 'teacher',
    component: TeacherDashboardComponent
  }
]

@NgModule({
  declarations: [
    DashboardComponent,
    StudentDashboardComponent,
    TeacherDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
