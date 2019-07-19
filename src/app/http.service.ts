import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  // proxy = "https://cors-anywhere.herokuapp.com/";
  url = "https://api.openweathermap.org/data/2.5/forecast/daily?q=";
  apiKey = "9fd7a449d055dba26a982a3220f32aa2";
  geoApi = "https://api.openweathermap.org/data/2.5/forecast/daily?";
  weathers;
  constructor(private http: HttpClient) {}

  searchData(city) {
    return this.http.get(`${this.url}${city}&cnt=10&appid=${this.apiKey}`).pipe(
      tap(resp => {
        this.weathers = resp["list"];
      })
    );
  }

  getWeatherByTimestamp(timestamp) {
    for (let i = 0; i < this.weathers.length; i++) {
      if (this.weathers[i]["dt"] == timestamp) {
        return this.weathers[i];
      }
    }
  }

  geoSearch(lat, lon) {
    return this.http
      .get(`${this.geoApi}lat=${lat}&lon=${lon}&appId=${this.apiKey}`)
      .pipe(
        tap(resp => {
          this.weathers = resp["list"];
        })
      );
  }
}
