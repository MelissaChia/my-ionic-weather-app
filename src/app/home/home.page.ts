import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  weathers;
  city;
  cityname;

  constructor(private httpService: HttpService) {}

  ngOnInit() {}

  searchChanged() {
    // Call our service function which returns an Observable
    this.httpService.searchData(this.city).subscribe(resp => {
      this.weathers = resp["list"];
      // this.cityname = resp["city"];
      console.log(this.weathers);
      // this.httpService.geoSearch(
      //   this.results.coord.lat,
      //   this.results.coord.lon
      // );

      // console.log(this.results.coord.lat, this.results.coord.lon);
    });
  }
}

// constructor(private httpService: HttpService) {}

// ngOnInit() {}
// btnPressed() {
//   this.httpService.getWeathers(this.city).subscribe(
//     resp => {
//       console.log(resp);
//       this.weathers = resp["list"];
//     },
//     err => {
//       console.log(err);
//     }
//   );
// }
// weatherPressed(weather) {
//   this.selectedWeather = weather;
// }
// }
