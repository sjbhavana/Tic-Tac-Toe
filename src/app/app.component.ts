import { Component } from '@angular/core';
import { GameLogicService } from './game-logic.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public gamelogic: GameLogicService) {}
}
