import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  proxy = "https://cors-anywhere.herokuapp.com/";
  url = "https://samples.openweathermap.org/data/2.5/weather?q=";
  apiKey = "9fd7a449d055dba26a982a3220f32aa2";

  constructor(private http: HttpClient) {}

  searchData(city) {
    return this.http.get(`${this.proxy}${this.url}+city+&appid=${this.apiKey}`);
    // .pipe(map(results => results["Search"]));
  }
}
