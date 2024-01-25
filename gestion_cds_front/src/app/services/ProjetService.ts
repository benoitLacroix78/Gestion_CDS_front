import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projet } from '../models/projet.model';

const baseUrl = 'http://localhost:8080/api/projets';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Projet[]> {
    return this.http.get<Projet[]>(baseUrl);
  }

  get(id: any): Observable<Projet> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByNom(title: any): Observable<Projet[]> {
    return this.http.get<Projet[]>(`${baseUrl}?nom=${Projet}`);
  }
}
