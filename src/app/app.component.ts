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
  }

  playground: any[][] = [
    ["a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a"],];

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
}
