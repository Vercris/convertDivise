import { Component, OnInit } from '@angular/core';
import { ConvertCardService } from "../ConvertCard.service";

@Component({
  selector: 'app-DiviseInfo',
  templateUrl: './DiviseInfo.component.html',
  styleUrls: ['./DiviseInfo.component.css']
})
export class DiviseInfoComponent implements OnInit {

  sellValue: number = 0;
  buyValue: number = 0;
  avgValue: number = 0;

  constructor(private valueService: ConvertCardService) {
    this.sellValue = this.valueService.getOficialInfo().value_sell;
    this.buyValue = this.valueService.getOficialInfo().value_buy;
    this.avgValue = this.valueService.getOficialInfo().value_avg;
  }

  ngOnInit() {
  }

  getBuyValue() {
    const otroNumero: number =
      this.valueService.getTabSelected()
        ? this.valueService.getBlueInfo().value_buy 
        : this.valueService.getOficialInfo().value_buy
      ;
    const otroFormato: string = otroNumero
      .toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return otroFormato;
  }  
  getSellValue() {
    const otroNumero: number = 
      this.valueService.getTabSelected() 
        ? this.valueService.getBlueInfo().value_sell
        : this.valueService.getOficialInfo().value_sell
      ;
    const otroFormato: string = otroNumero
      .toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return otroFormato;
  }
  getAVGValue() {
    const otroNumero: number =
      this.valueService.getTabSelected()
        ? this.valueService.getBlueInfo().value_avg
        : this.valueService.getOficialInfo().value_avg
      ;
    const otroFormato: string = otroNumero
      .toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return otroFormato;
  }
}
