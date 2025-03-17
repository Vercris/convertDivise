import { Component, OnInit, Input } from '@angular/core';
import { ConvertCardService } from '../ConvertCard.service';

@Component({
  selector: 'app-BtnShare',
  templateUrl: './BtnShare.component.html',
  styleUrls: ['./BtnShare.component.css']
})
export class BtnShareComponent implements OnInit {

  constructor(private valueService: ConvertCardService) { }

  ngOnInit() {
  }

  share() {
    if (navigator.share) {
      let getTypeDolar = this.valueService.getTabSelected() ? 'Blue' : 'Oficial';
      let getTypeDolarData = this.valueService.getTabSelected() 
        ? this.valueService.getBlueInfo() : this.valueService.getOficialInfo();
      navigator.share({
        title: 'Cambio de divisas',
        text: `Dólar ${getTypeDolar}
Compra: ${getTypeDolarData.value_buy} | Venta: ${getTypeDolarData.value_sell} | Promedio: ${getTypeDolarData.value_avg}
--------------------------------------------------
${this.valueService.getResultAVG()} ARG igual a ${this.valueService.getResultOtherDivise()} ${this.valueService.getDiviseCode()}`,
      })
      .then(() => console.log('Compartido con éxito'))
      .catch((error) => console.log('Error al compartir', error));
    } else {
      alert('Tu navegador no soporta la función de compartir');
    }
  }
}
