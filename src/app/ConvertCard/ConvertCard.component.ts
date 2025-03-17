import { Component, OnInit } from '@angular/core';
import { BtnShareComponent } from "./BtnShare/BtnShare.component";
import { DollarTabComponent } from "./DollarTab/DollarTab.component";
import { DiviseInfoComponent } from "./DiviseInfo/DiviseInfo.component";
import { CalculadoraComponent } from "./Calculadora/Calculadora.component";
import { CommonModule } from '@angular/common';
import { ConvertCardService } from "./ConvertCard.service";
import { DollarInterface } from "../src/DollarInterface";
import { DiviseInterface } from "../src/DiviseInterface";

@Component({
  selector: 'app-ConvertCard',
  imports: [BtnShareComponent, DollarTabComponent, DiviseInfoComponent, CalculadoraComponent, CommonModule],
  templateUrl: './ConvertCard.component.html',
  styleUrls: ['./ConvertCard.component.css']
})
export class ConvertCardComponent implements OnInit {

  constructor(private valueService: ConvertCardService) {}

  divisesUrl: string = "https://api.bluelytics.com.ar/data/json/currency.json";
  dollarUrl: string = "https://api.bluelytics.com.ar/v2/latest";
  estado: string = "load";

  async ngOnInit(): Promise<void> {
    await this.getDivises();
    await this.getDollar();
  }

  async getDivises() {
    try {
      let response = await fetch(this.divisesUrl);
      let data = await response.json();
      let rpt = JSON.stringify(data);
      let obj = JSON.parse(rpt);
      let divises: Array<DiviseInterface> = obj;
      this.estado = 'success';
      this.valueService.setDivisesInfo(divises);
    } catch (error) {
      console.log("error", error);
    }
  }

  async getDollar() {
    try {
      let response = await fetch(this.dollarUrl);
      let data = await response.json();
      let rpt = JSON.stringify(data);
      let obj = JSON.parse(rpt);
      let oficialDollar: DollarInterface = obj.oficial;
      let blueDollar: DollarInterface = obj.blue;
      this.estado = 'success';
      this.valueService.setOficialInfo(oficialDollar);
      this.valueService.setBlueInfo(blueDollar);
    } catch (error) {
      console.log("error", error);
    }
  }
}