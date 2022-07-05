import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { AppRoutingModule }         from 'src/app/app-routing.module';
import { DummyContentModule }       from 'src/app/modules/dummy-content/dummy-content.module';
import { BaseLayoutComponent }      from 'src/app/modules/holy-grail-layout/base-layout/base-layout.component';
import { HolyGrailLayoutComponent } from './holy-grail-layout/holy-grail-layout.component';

@NgModule( {
    exports      : [
        HolyGrailLayoutComponent,
        BaseLayoutComponent
    ],
    declarations : [
        HolyGrailLayoutComponent,
        BaseLayoutComponent
    ],
    imports : [
        CommonModule,
        DummyContentModule,
        AppRoutingModule
    ]
} )
export class HolyGrailLayoutModule {}
