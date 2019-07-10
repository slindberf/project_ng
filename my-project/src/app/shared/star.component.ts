import { Component, OnChanges, Input } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css'],
})

export class StarComponent implements OnChanges {
    @Input() rating: number; //passing data to a nested component @Input
    starWidth: number;

    ngOnChanges():void {
        this.starWidth = this.rating * 75 / 5;
        //75px is the width of the parent div 
    }
}

//use the nested component as a Directive
