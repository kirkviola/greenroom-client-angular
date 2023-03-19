import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../shared/app-constants';

@Injectable({
  providedIn: 'root'
})
export class UserMaterialService {

  baseUrl: string = baseUrl + '/UserMaterials';

  constructor(private http: HttpClient) { }

  getAllUserMaterials(): Observable<UserMaterial[]> {
    return this.http.get(`${this.baseUrl}`) as Observable<UserMaterial[]>;
  }

  getOneUserMaterialByUserMaterialId(userMaterialId: number): Observable<UserMaterial> {
    return this.http.get(`${this.baseUrl}/${userMaterialId}`) as Observable<UserMaterial>;
  }

  updateOneUserMaterial(userMaterial: UserMaterial): Observable<UserMaterial> {
    return this.http.put(`${this.baseUrl}/${userMaterial.userMaterialId}`, userMaterial) as Observable<UserMaterial>;
  }

  postOneUserMaterial(userMaterial: UserMaterial): Observable<UserMaterial> {
    return this.http.post(`${this.baseUrl}`, userMaterial) as Observable<UserMaterial>;
  }

  deleteOneUserMaterial(userMaterialId: number): Observable<UserMaterial> {
    return this.http.delete(`${this.baseUrl}/${userMaterialId}`) as Observable<UserMaterial>;
  }

}

export interface UserMaterial {
  userMaterialId: number;
  userMaterialName: string;
  userMaterialDescription: string;
  userMaterialAttachment: Blob;
  userId: number;
}
