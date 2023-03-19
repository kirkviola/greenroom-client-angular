import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from '../material/material.service';
import { baseUrl } from '../shared/app-constants';
import { UserCourse } from './user-course.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = baseUrl + '/users';
  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get(this.baseUrl) as Observable<User[]>
  }

  getOneByUserId(userId: number): Observable<User> {
    return this.http.get(`${this.baseUrl}/${userId}`) as Observable<User>;
  }

  updateOneUser(user: User): Observable<User> {
    return this.http.put(`${this.baseUrl}/${user.userId}`, user) as Observable<User>;
  }

  deleteOneUserByUserId(userId: number): Observable<User> {
    return this.http.delete(`${this.baseUrl}/${userId}`) as Observable<User>;
  }
}

export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;

  userCourses: UserCourse[];
  materials: Material[];
}

