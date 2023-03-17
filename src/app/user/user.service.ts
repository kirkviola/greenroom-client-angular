import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../shared/app-constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = baseUrl + '/users';
  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get(this.baseUrl) as Observable<User[]>
  }
}

export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;

  userCourses: UserCourse[];
}

export interface UserCourse {
  userCourseId: number;
  isOwner: boolean;
  userId: number;
  courseId: number;
}

export interface UserMaterial {
  userMaterialId: number;
  userMaterialName: string;
  userMaterialDescription: string;
  userMaterialAttachment: Blob;
  userId: number;
}
