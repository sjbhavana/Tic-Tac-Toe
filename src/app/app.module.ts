import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GameLogicService } from './game-logic.service';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  imports: [BrowserModule, FormsModule,MatButtonModule],
  declarations: [AppComponent, HelloComponent, BoardComponent, SquareComponent],
  bootstrap: [AppComponent],
  providers: [GameLogicService],
})
export class AppModule {}
