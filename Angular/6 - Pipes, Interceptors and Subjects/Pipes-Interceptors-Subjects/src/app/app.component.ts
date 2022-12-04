import { Component, ChangeDetectionStrategy } from '@angular/core';
import { interval, map } from 'rxjs';

function add(a: number | string, b: number | string) {
    return (a) as any + (b) as any;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    // Default Change detection, (only if refferences are changed!) "'Default' is checking always"
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    title = 'Pipes-Interceptors-Subjects';

    obj = {
        scores: [1, 2, 3, 4, 5, 6, 9],
    }

    add = add;

    private scores: number[] = [];
    private result = 0;

    $time = interval(1000).pipe(
        map(() => new Date())
    );

    myPromise = new Promise((res) => {
        setTimeout(() => {
            res('Hello World!')
        }, 3000)
    })

    calcScores(obj: { scores: number[] }) {
        if (this.scores !== obj.scores) {
            this.result = obj.scores.reduce((acc, curr) => acc + curr)
            this.scores = obj.scores;
            return this.result;
        }
        return this.result;
    }

    addProp() {
        (this.obj as any)['test'] = 500;
        this.obj.scores = this.obj.scores.concat(100);
    }

}