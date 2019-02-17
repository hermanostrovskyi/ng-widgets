import {Component, Input, OnInit} from '@angular/core';
import {Weather} from '../common/mock/data';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {

  @Input() currentWeather: Weather;

  constructor() { }

  ngOnInit() {
  }

}
