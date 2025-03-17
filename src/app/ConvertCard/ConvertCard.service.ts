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

  setTabSelected(value: boolean) {
    this.tabSelected = value;
  }

  obtenerValor(): boolean {
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
