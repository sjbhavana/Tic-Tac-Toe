import { Component, OnInit } from '@angular/core';
import { GameLogicService } from '../game-logic.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  constructor(public gamelogic: GameLogicService) {}

  ngOnInit() {}
}
