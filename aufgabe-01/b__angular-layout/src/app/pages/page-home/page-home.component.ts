import { Component } from '@angular/core';

@Component( {
    selector    : 'app-page-home',
    templateUrl : './page-home.component.html',
    styleUrls   : [ './page-home.component.css' ]
} )
export class PageHomeComponent {
    
    btnAlert() {
        alert( 1111111 );
    }
    
    btnLog() {
        console.log( 22222 );
    }
    
}
