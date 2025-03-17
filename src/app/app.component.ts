import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConvertCardComponent } from './ConvertCard/ConvertCard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConvertCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'currencyConvert';
}
