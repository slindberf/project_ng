import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css'],
})

export class StarComponent implements OnChanges {
    @Input() rating: number; //passing data to a nested component @Input
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = 
        new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
        //75px is the width of the parent div 
    }
    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }
}

//use the nested component as a Directive
