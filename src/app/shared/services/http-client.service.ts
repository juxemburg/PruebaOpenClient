import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorService } from './http-error.service';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  private _baseUri: string = environment.baseUrl;
  private _authToken: string;
  public set token(value: string) {
    this._authToken = value;
    // configVariables.authToken = value;
    // this._cookieService.set('authCookie', this._authToken);
  }

  constructor(
    private _http: HttpClient,
    private _httpError: HttpErrorService
  ) {}

  public init() {
    // this._authToken = configVariables.authToken;
  }

  public get<T>(
    subUri: string,
    params: Map<string, string> = null
  ): Observable<T> {
    return this._http
      .get<T>(this.getFullUrl(subUri, params), { headers: this.getHeaders() })
      .pipe(catchError(this._httpError.HandleError()));
  }

  public post<T, U>(
    subUri: string,
    data: T = null,
    params: Map<string, string> = null
  ): Observable<U> {
    return this._http
      .post<U>(this.getFullUrl(subUri, params), data, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(3),
        catchError(this._httpError.HandleError())
      );
  }

  private getFullUrl(
    subUri: string,
    params: Map<string, string> = null
  ): string {
    let paramText = '';
    if (params) {
      params.forEach((value, key) => {
        if (value) {
          paramText += `${key}=${value}`;
        }
      });
      return `${this._baseUri}/${subUri}?${paramText}`;
    }
    return `${this._baseUri}/${subUri}`;
  }

  private getHeaders(): HttpHeaders {
    const headerJson = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${this._authToken}`,
    };
    return new HttpHeaders(headerJson);
  }
}
