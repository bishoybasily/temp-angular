import {Component, OnInit} from '@angular/core';
import {MeService} from '../service/me.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  value = 'Click left';

  constructor(private meService: MeService) {
  }

  ngOnInit() {
  }

}
