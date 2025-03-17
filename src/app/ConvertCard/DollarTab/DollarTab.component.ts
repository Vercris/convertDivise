import { Component, OnInit } from '@angular/core';
import { ConvertCardService } from "../ConvertCard.service";

@Component({
  selector: 'app-DollarTab',
  templateUrl: './DollarTab.component.html',
  styleUrls: ['./DollarTab.component.css']
})
export class DollarTabComponent implements OnInit {

  constructor(private valueService: ConvertCardService) {
    this.tabSelected = valueService.getTabSelected();
  }

  ngOnInit() {}

  tabSelected = true;

  changeTabValue(value: boolean) {
    this.tabSelected = value;
    this.valueService.setTabSelected(value);
  }
}
