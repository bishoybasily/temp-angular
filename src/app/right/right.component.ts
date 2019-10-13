import {Component, OnInit} from '@angular/core';
import {MeService} from '../service/me.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  value = 'Click right';

  constructor(private meService: MeService) {
  }

  ngOnInit() {
  }

}
