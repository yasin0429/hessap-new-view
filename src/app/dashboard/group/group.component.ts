import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getCustomStyle(type: string){
    const urlList = this.router.url.split("/");
    const count = urlList.length;
    const activeUrl = urlList[count-1];

    if (activeUrl === type){
      let myStyles = {
        'background-image': 'linear-gradient(45deg, #843cf7, #38b8f2)',
        'color': 'white'
        }
      return myStyles;
    } else {
      return null;
    }
  }

}
