import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  weathers;
  city;
  cityname;

  constructor(
    public httpService: HttpService,
    public geolocation: Geolocation,
    public router: Router
  ) {}

  ngOnInit() {
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        console.log(resp.coords.latitude);
        console.log(resp.coords.longitude);
        this.httpService
          .geoSearch(resp.coords.latitude, resp.coords.longitude)
          .subscribe(resp => {
            console.log(resp);
            this.weathers = resp["list"];
            this.cityname = resp["city"];
          });
      })
      .catch(error => {
        console.log("Error getting location", error);
      });
  }

  searchChanged() {
    // Call our service function which returns an Observable
    this.httpService.searchData(this.city).subscribe(resp => {
      this.weathers = resp["list"];
      this.cityname = resp["city"];
      console.log(resp);
    });
  }

  openDetail(weather, city) {
    this.router.navigate([
      `weather-details/${weather["dt"]}/${this.cityname.name}`
    ]);
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
