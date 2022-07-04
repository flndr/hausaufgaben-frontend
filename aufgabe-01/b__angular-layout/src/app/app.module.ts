import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

import { HolyGrailLayoutModule } from './modules/holy-grail-layout/holy-grail-layout.module';
import { DummyContentModule }    from './modules/dummy-content/dummy-content.module';
import { AppComponent }          from './app.component';

@NgModule( {
    declarations : [
        AppComponent,
    ],
    imports      : [
        BrowserModule,
        HolyGrailLayoutModule,
        DummyContentModule
    ],
    providers    : [],
    bootstrap    : [ AppComponent ],
    schemas      : [ NO_ERRORS_SCHEMA ]
} )
export class AppModule {}
