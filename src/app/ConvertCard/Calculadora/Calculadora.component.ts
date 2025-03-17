import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertCardService } from "../ConvertCard.service";
import {DiviseInterface} from '../../src/DiviseInterface';
import { FormsModule } from '@angular/forms';
import { BtnShareComponent } from "../BtnShare/BtnShare.component";

@Component({
  selector: 'app-Calculadora',
  templateUrl: './Calculadora.component.html',
  imports: [CommonModule, FormsModule, BtnShareComponent],
  styleUrls: ['./Calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor(private valueService: ConvertCardService) {
    this.divises = this.valueService.getDivisesInfo();
    this.divise = this.divises[152].name;
    this.diviseCode = this.divises[152].code;
    this.diviseValue = this.divises[152].value;
  }

  ngOnInit() {
    this.valueService.setDivise(this.divise);
    this.valueService.setDiviseCode(this.diviseCode);
    this.valueService.setDiviseValue(this.diviseValue);
  }

  showPanel: boolean = false;
  diviseValue: number = 0;
  divise: string = '';
  diviseCode: string = '';
  divises: Array<DiviseInterface> = [];

  resultAVG: number = 0;
  resultOtherDivise: number = 0;

  togglePanel() {
    this.showPanel = true;
  }

  changeDivise(value: DiviseInterface) {
    this.showPanel = false;
    this.divise = value.name;
    this.diviseCode = value.code;
    this.diviseValue = value.value;
    this.valueService.setDivise(value.name);
    this.valueService.setDiviseCode(value.code);
    this.valueService.setDiviseValue(value.value);
  }

  changeAVGValue(value: number) {
    let dolarValue: number = 0;
    if (this.valueService.getTabSelected()) {
      dolarValue = this.valueService.getBlueInfo().value_avg;
    } else {
      dolarValue = this.valueService.getOficialInfo().value_avg;
    }
    this.resultOtherDivise = parseFloat(((value * this.diviseValue) / dolarValue).toPrecision(5));
    this.valueService.setResultOtherDivise(this.resultOtherDivise);
    this.valueService.setResultAVG(value);
  }
  changeOtherDiviseValue(value: number) {
    let dolarValue: number = 0;
    if (this.valueService.getTabSelected()) {
      dolarValue = this.valueService.getBlueInfo().value_avg;
    } else {
      dolarValue = this.valueService.getOficialInfo().value_avg;
    }
    this.resultAVG = parseFloat((dolarValue / (value * this.diviseValue)).toPrecision(5));
    this.valueService.setResultAVG(this.resultAVG);
    this.valueService.setResultOtherDivise(value);
  }
}
