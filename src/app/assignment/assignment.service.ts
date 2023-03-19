import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../shared/app-constants';
import { AssignmentMaterial } from './assignment-material.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  baseUrl: string = baseUrl + '/assignments'

  constructor(private http: HttpClient) { }

  getAllAssignments(): Observable<Assignment[]> {
    return this.http.get(`${this.baseUrl}`) as Observable<Assignment[]>;
  }

  getOneAssignmentById(assignmentId: number): Observable<Assignment> {
    return this.http.get(`${this.baseUrl}/${assignmentId}`) as Observable<Assignment>;
  }

  getAssignmentsByCourseId(courseId: number): Observable<Assignment[]> {
    return this.http.get(`${this.baseUrl}/getAssignmentsByCourseId/${courseId}`) as Observable<Assignment[]>;
  }

  updateOneAssignment(assignment: Assignment): Observable<Assignment> {
    return this.http.put(`${this.baseUrl}/${assignment.assignmentId}`, assignment) as Observable<Assignment>;
  }

  postOneAssignment(assignment: Assignment): Observable<Assignment> {
    return this.http.post(`${this.baseUrl}`, assignment) as Observable<Assignment>;
  }

  deleteOneAssignmentById(assignmentId: number): Observable<Assignment> {
    return this.http.delete(`${this.baseUrl}/${assignmentId}`) as Observable<Assignment>;
  }
}

export interface Assignment {
  assignmentId: number;
  assignmentName: string;
  assignmentDescription: string;
  assignmentMaxValue: number;
  assignmentEarnedValue: number;
  changeTime: string; // TO DO: get a proper time parser
  courseId: number;

  assignmentMaterials: AssignmentMaterial[]
}
