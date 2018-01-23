import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 

@Injectable()
export class InformationService {

  info: any = {};
  load: boolean = false;

  team: any;
  isLoadAbout: boolean = false;

  constructor(public http: Http) {
    this.loadInfo();
    this.loadAbout();
  }

  loadInfo() {
    this.http.get('assets/data/info.page.json')
      .subscribe(data => {
        this.load = true;
        this.info = data.json();
      })
  }

  loadAbout() {
    this.http.get('https://paginaweb-221ec.firebaseio.com/team.json')
      .subscribe(data => {
        console.log(data.json());
        this.isLoadAbout = true;
        this.team = data.json();
      })
  }

}
