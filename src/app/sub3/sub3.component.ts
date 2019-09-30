import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {MeService} from '../service/me.service';

@Component({
  selector: 'app-sub3',
  templateUrl: './sub3.component.html',
  styleUrls: ['./sub3.component.css']
})
export class Sub3Component implements OnInit {

  user: User;

  constructor(private serviceMe: MeService) {
  }

  ngOnInit() {
  }

  request() {
    this.serviceMe.me().subscribe(usr => this.user = usr);
  }

}
