import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getItems(): Observable<any> {
  return this.http.get('assets/data/data.json').pipe(
    map((response: any) => {
      return response.items;
    })
  );
}

}
