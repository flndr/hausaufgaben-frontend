import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PagesModule }      from 'src/app/pages/pages.module';
import { AppComponent }     from './app.component';

@NgModule( {
    declarations : [
        AppComponent
    ],
    imports      : [
        BrowserModule,
        AppRoutingModule,
        PagesModule
    ],
    providers    : [],
    bootstrap    : [ AppComponent ],
    schemas      : [ NO_ERRORS_SCHEMA ]
} )
export class AppModule {}
