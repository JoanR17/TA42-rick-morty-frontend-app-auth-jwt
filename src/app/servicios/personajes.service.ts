import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personaje } from '../models/personaje.model';

const baseURL = 'http://localhost:3000/personajes'

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Personaje[]>
  {
    return this.http.get<Personaje[]>(baseURL);
  }

  get(id: any): Observable<Personaje>
  {
    return this.http.get<Personaje>(`${baseURL}/${id}`);
  }

  create(data: any): Observable<any>
  {
    return this.http.post(baseURL, data);
  }

  update(id: any, data: any): Observable<any>
  {
    return this.http.put(`${baseURL}/${id}`, data);
  }

  delete(id: any): Observable<any>
  {
    return this.http.delete(`${baseURL}/${id}`);
  }

  deleteAll(): Observable<any>
  {
    return this.http.delete(baseURL);
  }

  findByName(name: any): Observable<Personaje[]>
  {
    return this.http.get<Personaje[]>(`${baseURL}?name=${name}`);
  }
}
