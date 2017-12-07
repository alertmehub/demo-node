import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';

const api = '/api';

@Component({
  selector: 'app-alerts',
  template: `
    <h1>Alerts</h1>
    <p>Sign up to be notified of important news and events.</p>
    <div style='background-color: white; padding: 10px'>
      <np-preferences [token]="token" [clientId]="clientId" [externalParameters]="externalParameters"></np-preferences>
    </div>
    `,
  styles: []
})
export class AlertsComponent implements OnInit {
  token: string;
  clientId = 'toyita.com';
  externalParameters: object = {};

  constructor(private userService: UserService, private http: HttpClient) { }

  ngOnInit() {
     this.http.get<any>(`${api}/authorize/` + this.userService.token)
    .subscribe(token => {
      this.token = token;
  });


  }
//    <np-preferences [token]="token" [clientId]="clientId" [externalParameters]="externalParameters"></np-preferences>

}
