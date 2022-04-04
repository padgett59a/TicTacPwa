import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[] = Array(9).fill(null);
  xIsNext?: boolean;
  winner: string | null = null;
  constructor() { }

  ngOnInit(): void { 
     //for initial component set up
     this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);  //set inital values to null
    this.winner = null;
    this.xIsNext = true;
  }

  makeMove(idx: number) {
    if (!this.squares[idx]) {  //if not empty (falsy) do nothing
      this.squares.splice(idx, 1, this.player);  //remove 1 value from the array at idx and add in the this.player
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();    
  }

  get player() {  //getter for computed property
    return this.xIsNext ? 'Isaac' : 'Colton';
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }

}
