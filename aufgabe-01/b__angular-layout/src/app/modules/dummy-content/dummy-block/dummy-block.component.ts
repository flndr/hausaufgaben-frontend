import { Input }     from '@angular/core';
import { Component } from '@angular/core';

@Component( {
    selector    : 'app-dummy-block',
    templateUrl : './dummy-block.component.html',
    styleUrls   : [ './dummy-block.component.css' ]
} )
export class DummyBlockComponent {
    
    @Input()
    bg : string = 'red';
    
    @Input()
    maxHeight : boolean = false;
}
