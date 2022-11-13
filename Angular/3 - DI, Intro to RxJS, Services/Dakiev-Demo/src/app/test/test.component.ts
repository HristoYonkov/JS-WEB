import { Component, Input, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, SimpleChange } from '@angular/core';
import { map } from 'rxjs';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss'],
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit, OnChanges {

    @Input() users!: { name: string }[];

    constructor(private cdRef: ChangeDetectorRef) {
        this.cdRef.detach();
    }

    ngOnChanges(): void {
        if (this.users.length > 4) {
            this.cdRef.detectChanges()
        }
    }

    ngOnInit(): void {
        this.cdRef.detectChanges()
    }

}