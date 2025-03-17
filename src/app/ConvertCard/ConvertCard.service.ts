import { Injectable } from '@angular/core';
import {DollarInterface} from '../src/DollarInterface';
import {DiviseInterface} from '../src/DiviseInterface';

@Injectable({
  providedIn: 'root'
})

export class ConvertCardService {

  constructor() { }
  
  private tabSelected: boolean = true;
  private oficialInfo: DollarInterface = { value_avg: 0, value_sell: 0, value_buy: 0 };
  private blueInfo: DollarInterface = { value_avg: 0, value_sell: 0, value_buy: 0 };
  private divisesData: Array<DiviseInterface> = [];

  private diviseValue: number = 0;
  private divise: string = '';
  private diviseCode: string = '';
  private resultAVG: number = 0;
  private resultOtherDivise: number = 0;

  getDiviseValue(): number { return this.diviseValue; }
  setDiviseValue(value: number) { this.diviseValue = value; }
  getDivise(): string { return this.divise; }
  setDivise(value: string) { this.divise = value; }
  getDiviseCode(): string { return this.diviseCode; }
  setDiviseCode(value: string) { this.diviseCode = value; }
  getResultAVG(): number { return this.resultAVG; }
  setResultAVG(value: number) { this.resultAVG = value; }
  getResultOtherDivise(): number { return this.resultOtherDivise; }
  setResultOtherDivise(value: number) { this.resultOtherDivise = value; }

  setTabSelected(value: boolean) {
    this.tabSelected = value;
  }

  getTabSelected(): boolean {
    return this.tabSelected;
  }

  setOficialInfo(value: DollarInterface) {
    this.oficialInfo = value;
  }

  getOficialInfo(): DollarInterface {
    return this.oficialInfo;
  }

  setBlueInfo(value: DollarInterface) {
    this.blueInfo = value;
  }

  getBlueInfo(): DollarInterface {
    return this.blueInfo;
  }

  setDivisesInfo(value: Array<DiviseInterface>) {
    this.divisesData = value;
  }

  getDivisesInfo(): Array<DiviseInterface> {
    return this.divisesData;
  }
}
