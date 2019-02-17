import {Component} from '@angular/core';
import {Social, Weather} from './common/mock/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'widgets';

  selectedWeather: Weather;
  selectedSocials: Social;


  shareSelectedItem(selectedPoi: { weather: Weather, social: Social }) {
    this.selectedWeather = selectedPoi.weather;
    this.selectedSocials = selectedPoi.social;
  }


}
