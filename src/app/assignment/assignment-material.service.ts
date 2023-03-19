import { Injectable } from '@angular/core';
import { baseUrl } from '../shared/app-constants';

@Injectable({
  providedIn: 'root'
})
export class AssignmentMaterialService {

  baseUrl: string = baseUrl + '/AssignmentMaterials'

  constructor() { }
}

export interface AssignmentMaterial {
  assignmentMaterialId: number;
  assignmentMaterialName: string;
  assignmentMaterialDescription: string;
  assignmentMaterialAttachment: Blob;
  assignmentId: number;
}
