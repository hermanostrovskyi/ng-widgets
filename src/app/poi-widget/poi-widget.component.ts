import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {data, Social, Weather, WidgetData} from '../common/mock/data';

@Component({
  selector: 'app-poi-widget',
  templateUrl: './poi-widget.component.html',
  styleUrls: ['./poi-widget.component.css']
})
export class PoiWidgetComponent implements OnInit {

  @Output() poiSelect = new EventEmitter<{ weather: Weather, social: Social }>();
  widgetData: WidgetData[];
  filteredData: WidgetData[];
  selectedType = 'hotel';
  widgetImage: string;


  constructor() {
  }

  ngOnInit() {
    this.widgetData = data;
    this.filterData();
    this.poiSelect.emit(this.setSelectedData(0));
  }

  filterData() {
    this.filteredData = this.widgetData.filter((dataItem: WidgetData) => {
      if (dataItem.type === this.selectedType) {
        return dataItem;
      }
    });

    this.widgetImage = this.filteredData[0].poi.img;
  }

  setSelectedData(index: number) {
    const weather = this.filteredData[index].weather;
    const social = this.filteredData[index].social;

    return {
      weather, social
    };
  }

  onPoiClick(selectedPoiId: number) {
    this.poiSelect.emit(this.setSelectedData(selectedPoiId));
    this.widgetImage = this.filteredData[selectedPoiId].poi.img;
  }

  onTypeSelect(type: string) {
    this.selectedType = type.toLowerCase();
    this.filterData();
    this.poiSelect.emit(this.setSelectedData(0));
  }

}
