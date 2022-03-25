import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cheeckeerz';

  pole = {
    color: "a",
    figure: "",
    selected: false,
  }


  // Default Array of "a"
  playground: any[][] = [
    ["a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a"],];

  // Creates chess board
  ngOnInit() {
    for (var i = 0; i < this.playground.length; i++) {
      for (var j = 0; j < this.playground.length; j++) {
        this.playground[i][j] = this.pole;
        if ((i + j) % 2 == 0) {
          this.playground[i][j] = {
            color: "b",
            figure: "",
          }
        }
      }
    }
    console.log(this.playground)
    this.placeFigures()
  }

  // If you click on some field you can see a count of your true clicks in console
  select(x:number, y:number) : void {
    this.playground[x][y].selected = true;
    console.log(this.playground[x][y].selected)
  }

  // Figures on black fields
  placeFigures(): void {
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        if (((i % 2 != 0 && j % 2 != 0) || (i % 2 == 0 && j % 2 == 0)) && i < 3) {
          this.playground[i][j].figure = "⛂"
        }
        if (((i % 2 != 0 && j % 2 != 0) || (i % 2 == 0 && j % 2 == 0)) && i > 4) {
          this.playground[i][j].figure = "⛀"
        }
      }
    }
  }

  move(x:number, y:number) : void {

  }

}
