import { Component } from '@angular/core';

@Component( {
    selector    : 'app-dummy-button-alert',
    templateUrl : './dummy-button-alert.component.html',
    styleUrls   : [ './dummy-button-alert.component.css' ]
} )
export class DummyButtonAlertComponent {
    
    alert() : void {
        alert( 'ALERT' );
    }
    
}
