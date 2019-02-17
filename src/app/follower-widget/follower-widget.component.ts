import {Component, Input, OnInit} from '@angular/core';
import {Social} from '../common/mock/data';

@Component({
  selector: 'app-follower-widget',
  templateUrl: './follower-widget.component.html',
  styleUrls: ['./follower-widget.component.css']
})
export class FollowerWidgetComponent implements OnInit {

  @Input() currentSocials: Social;

  constructor() { }

  ngOnInit() {
  }

}
