import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../shared/app-constants';
import { UserCourse } from '../user/user-course.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseUrl: string = baseUrl + '/courses'

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get(`${this.baseUrl}`) as Observable<Course[]>
  }

  getOneCourseByCourseId(courseId: number): Observable<Course> {
    return this.http.get(`${this.baseUrl}/${courseId}`) as Observable<Course>;
  }

  getCoursesByUserId(userId: number): Observable<Course[]> {
    return this.http.get(`${this.baseUrl}/getCoursesByUserId/${userId}`) as Observable<Course[]>;
  }

  updateOneCourse(course: Course): Observable<Course> {
    return this.http.put(`${this.baseUrl}/${course.courseId}`, course) as Observable<Course>;
  }

  postOneCourse(course: Course): Observable<Course> {
    return this.http.post(`${this.baseUrl}`, course) as Observable<Course>;
  }

  deleteOneCourseById(courseId: number): Observable<Course> {
    return this.http.delete(`${this.baseUrl}/${courseId}`) as Observable<Course>
  }
}

export interface Course {
  courseId: number;
  courseName: string;
  courseDescription: string;
  userCourseId: number;

  userCourses: UserCourse[];
}
