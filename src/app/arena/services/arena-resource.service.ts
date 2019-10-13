import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/shared/services/http-client.service';

@Injectable({
  providedIn: 'root',
})
export class ArenaResourceService {
  private _uri = '';
  constructor(private _http: HttpClientService) {}
}
