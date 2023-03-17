import { Injectable } from '@angular/core';
import { UserCourse } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
}

export interface Course {
  courseId: number;
  courseName: string;
  courseDescription: string;
  userCourseId: number;

  userCourses: UserCourse[];
}
