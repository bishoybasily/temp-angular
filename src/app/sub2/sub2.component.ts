import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {MeService} from '../service/me.service';

@Component({
  selector: 'app-sub2',
  templateUrl: './sub2.component.html',
  styleUrls: ['./sub2.component.css']
})
export class Sub2Component implements OnInit {

  user: User;

  constructor(private serviceMe: MeService) {
  }

  ngOnInit() {
  }

  request() {
    this.serviceMe.me().subscribe(usr => this.user = usr);
  }

}
