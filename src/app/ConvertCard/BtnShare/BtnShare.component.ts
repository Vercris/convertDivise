import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-BtnShare',
  templateUrl: './BtnShare.component.html',
  styleUrls: ['./BtnShare.component.css']
})
export class BtnShareComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  share() {
    alert('Share');
  }
}
