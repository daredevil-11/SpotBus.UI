import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ROUTE_NUMBERS_FILTER_OPTIONS } from '../constants/routeInfo'
import { IMapCordinate, IRouteInfo } from '../models/routeInfo';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public routeList: Array<string> = [];
  public routeCordList: Array<IMapCordinate> = [];
  selectedRoute: string = '';
  public focusLatitude: number = 0;
  public focusLongitude: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.routeList = ROUTE_NUMBERS_FILTER_OPTIONS.map(routeInfo => routeInfo.route_id);
    this.focusLatitude = 23.259933;
    this.focusLongitude = 77.412613;
  }

  public onRouteSelect($event: MatSelectChange) {
    /** New route selected, update map */
    if($event.value !== '' && $event.value !== this.selectedRoute) {
      this.selectedRoute = $event.value;
      this.updateRouteMap();
    }
  }

  updateRouteMap() {
    const route: IRouteInfo = ROUTE_NUMBERS_FILTER_OPTIONS.filter(routeInfo => routeInfo.route_id === this.selectedRoute)[0];
    this.routeCordList = route.route_graph.map(function(route_graph) { return {
        latitude: parseFloat(route_graph.geo_location.latitude), 
        longitude: parseFloat(route_graph.geo_location.longitude)
    } as IMapCordinate });

    this.focusLatitude = this.routeCordList[0].latitude;
    this.focusLongitude = this.routeCordList[0].longitude;
  }
}
