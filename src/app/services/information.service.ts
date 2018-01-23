import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 

@Injectable()
export class InformationService {

  info: any = {};
  load: boolean = false;

  constructor(public http: Http) {
    this.http.get('assets/data/info.page.json')
      .subscribe(data => {
        this.load = true;
        this.info = data.json();
      })
  }

}
