import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Icon } from "ionicons/dist/types/icon/icon";
// import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  proxy = "https://cors-anywhere.herokuapp.com/";
  url = "https://api.openweathermap.org/data/2.5/forecast/daily?q=";
  apiKey = "9fd7a449d055dba26a982a3220f32aa2";
  geoApi = "https://api.openweathermap.org/data/2.5/forecast/daily?";

  constructor(private http: HttpClient) {}

  searchData(city) {
    return this.http.get(
      `${this.proxy}${this.url}${city}&cnt=10&appid=${this.apiKey}`
    );
  }

  // .pipe(map(results => results["Search"]));
}
// geoSearch(lat, lon) {
//   return this.http.get(
//     `${this.proxy}${this.geoApi}lat=${lat}&lon=${lon}&cnt=10&appid=${
//       this.apiKey
//     }`
//   );
// }
