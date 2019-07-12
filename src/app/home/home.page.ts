import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  results;
  constructor(private httpService: HttpService) {}

  ngOnInit() {}

  searchChanged(city) {
    // Call our service function which returns an Observable
    this.httpService.searchData(city).subscribe(resp => {
      console.log(resp);
      this.results = resp;
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
