import {Component, OnInit} from '@angular/core';
import {MeService} from '../service/me.service';
import {User} from '../model/user';

@Component({
  selector: 'app-sub1',
  templateUrl: './sub1.component.html',
  styleUrls: ['./sub1.component.css']
})
export class Sub1Component implements OnInit {

  user: User;

  constructor(private serviceMe: MeService) {
  }

  ngOnInit() {

  }

  request() {
    this.serviceMe.me().subscribe(usr => this.user = usr);
  }
}
