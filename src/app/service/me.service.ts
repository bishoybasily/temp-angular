import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeService {

  constructor(private client: HttpClient) {
  }

  public me(): Observable<User> {
    return this.client.get<User>(environment.baseUrl + 'api/me');
  }

}
