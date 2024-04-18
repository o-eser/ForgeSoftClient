import { Injectable } from '@angular/core';
import { User } from 'src/app/entities/user';
import { CreateUser } from 'src/app/contracts/users/create_user';
import { Observable, firstValueFrom } from 'rxjs';
import { HttpClientService } from './http-client.service';
import { TokenResponse } from '../contracts/token/tokenResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private HhtpClientService: HttpClientService) { }

  async create(user: User): Promise<CreateUser> {
    const observable: Observable<CreateUser | User> = this.HhtpClientService.post<CreateUser | User>({
      controller: 'account',
      action: 'register'
    }, user);

    return await firstValueFrom(observable) as CreateUser;
  }

  async login(userName: string, password: string, callBackFunction?: () => void): Promise<void> {
    const observable: Observable<any> = this.HhtpClientService.post({
      controller: 'account',
      action: 'login'
    }, {
      userName,
      password
    });

    const tokenResponse: TokenResponse = await firstValueFrom(observable) as TokenResponse;

    if (tokenResponse) {
      console.log(tokenResponse);
      localStorage.setItem('token', tokenResponse.token);

    }

    callBackFunction();
  }
}
