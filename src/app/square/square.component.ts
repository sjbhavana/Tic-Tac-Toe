import { Component, Input, OnInit } from '@angular/core';
import { GameLogicService } from '../game-logic.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent implements OnInit {
  @Input() square: any;
  constructor(public gameService: GameLogicService) {}

  ngOnInit() {
    console.log(this.square);
  }
  changePlayer() {
    this.gameService.isGameRunning = true;

    if (this.gameService.isGameRunning && this.square.state === null) {
      this.square.state = this.gameService.activePlayer;
      this.gameService.changePlayerTurn(this.square);
    }
  }
}
