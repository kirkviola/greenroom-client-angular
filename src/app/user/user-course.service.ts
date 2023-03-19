import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../shared/app-constants';

@Injectable({
  providedIn: 'root'
})
export class UserCourseService {

  baseUrl = baseUrl + '/UserCourses'

  constructor(private http: HttpClient) { }

  getAllUserCourses(): Observable<UserCourse[]> {
    return this.http.get(`${this.baseUrl}`) as Observable<UserCourse[]>
  }

  getOneUserCourseById(userCourseId: number): Observable<UserCourse> {
    return this.http.get(`${this.baseUrl}/${userCourseId}`) as Observable<UserCourse>;
  }

  updateOneUserCourse(userCourse: UserCourse): Observable<UserCourse> {
    return this.http.put(`${this.baseUrl}/${userCourse.userCourseId}`, userCourse) as Observable<UserCourse>;
  }

  postOneUserCourse(userCourse: UserCourse): Observable<UserCourse> {
    return this.http.post(`${this.baseUrl}`, userCourse) as Observable<UserCourse>;
  }

  deleteOneUserCourse(userCourseId: number): Observable<UserCourse> {
    return this.http.delete(`${this.baseUrl}/${userCourseId}`) as Observable<UserCourse>;
  }
}

export interface UserCourse {
  userCourseId: number;
  isOwner: boolean;
  userId: number;
  courseId: number;
}
