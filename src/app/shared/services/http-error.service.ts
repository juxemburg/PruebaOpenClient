import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorService {
  constructor(private _router: Router) {}

  public HandleError() {
    return (error: HttpErrorResponse, _: any) => {
      switch (error.status) {
        case 401: // Unauthorized
          console.log(this._router);
          this._router.navigate(['/account/login']);
          break;
        case 403: // Forbidden
          this._router.navigate(['account/login']);
          break;
        default:
          alert(error.error);
          break;
      }
      return throwError(error.error);
    };
  }
}
