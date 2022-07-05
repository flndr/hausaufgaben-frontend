import { EventEmitter } from '@angular/core';
import { Output }       from '@angular/core';
import { Component }    from '@angular/core';

@Component( {
    selector    : 'app-dummy-button',
    templateUrl : './dummy-button.component.html',
    styleUrls   : [ './dummy-button.component.css' ]
} )
export class DummyButtonComponent {
    
    @Output()
    onClick = new EventEmitter();
    
    handleClick( e : Event ) {
        e.stopPropagation();
        e.preventDefault();
        this.onClick.emit();
    }
    
}
