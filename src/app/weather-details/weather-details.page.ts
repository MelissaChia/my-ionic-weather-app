import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpService } from "../http.service";

@Component({
  selector: "app-weather-details",
  templateUrl: "./weather-details.page.html",
  styleUrls: ["./weather-details.page.scss"]
})
export class WeatherDetailsPage implements OnInit {
  city;
  weather;
  constructor(
    public activatedRoute: ActivatedRoute,
    public httpService: HttpService
  ) {}

  ngOnInit() {
    let timestamp = this.activatedRoute.snapshot.paramMap.get("timestamp");
    this.city = this.activatedRoute.snapshot.paramMap.get("city");
    this.weather = this.httpService.getWeatherByTimestamp(timestamp);
  }
}
