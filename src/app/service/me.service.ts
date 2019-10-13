import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeService {

  text = 'Me Service';

  constructor(private client: HttpClient) {
  }

  public me(): Observable<User> {
    return this.client.get<User>(environment.baseUrl + 'api/me');
  }

}
