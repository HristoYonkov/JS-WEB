import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes-Interceptors-Subjects';

  obj = {
    scores: [1, 2, 3, 4, 5, 6, 9],
  }

  private scores: number[] = [];
  private result = 0;

  calcScores(obj: { scores: number[] }) {
    if (this.scores !== obj.scores) {
      this.result = obj.scores.reduce((acc, curr) => acc + curr)
      this.scores = obj.scores;
    }
    return obj.scores.reduce((acc, curr) => acc + curr);
  }

  addProp() {
    (this.obj as any)['test'] = 500;
  }

}