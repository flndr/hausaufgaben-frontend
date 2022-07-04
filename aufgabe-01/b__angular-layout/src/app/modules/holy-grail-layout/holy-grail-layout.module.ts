import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolyGrailLayoutComponent } from './holy-grail-layout/holy-grail-layout.component';

@NgModule( {
    exports      : [
        HolyGrailLayoutComponent
    ],
    declarations : [
        HolyGrailLayoutComponent
    ],
    imports      : [
        CommonModule
    ]
} )
export class HolyGrailLayoutModule {}
