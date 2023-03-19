import { Injectable } from '@angular/core';
import { Assignment } from '../assignment/assignment.service';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor() { }
}

export interface Material {
  id: number;
  title: string;
  description: string;
  attachment: Blob;
  url: string;
  assignmentId: number;
  userId: number;
}
