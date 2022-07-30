import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL = 'https://sheet.best/api/sheets/11dab358-5335-44d8-af5e-305ef4954ad5';

  constructor(private httpClient: HttpClient) { }

  // Retorna a lista de usuarios
  getListUsers(): Observable<User[]> {
      return this.httpClient.get<User[]>(this.apiURL);
  }

  // Salva o usuario na API
  postUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiURL, user);
  }

  // Exclui usuario da API
  deleteUser(idUser: number): Observable<User> {
    return this.httpClient.delete<User>(this.apiURL+`/id/${idUser}`);
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(this.apiURL+`/id/${user.id}`, user);
  }

  getUser(idUser: number): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiURL+`/id/${idUser}`);
  }
}
