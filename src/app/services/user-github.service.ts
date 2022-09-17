import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGithubService {

  constructor(
    private _http: HttpClient
  ) { }

  getUser(loginUser: any): Observable<any> {
    return this._http.get(`${environment.apiGitHub}${loginUser}`).pipe(
      map((res) => {
        return res;
      }), catchError(err => {
        return throwError(err)
      })
    )

  }
}
