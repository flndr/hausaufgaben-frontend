import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { DummyBlockComponent } from './dummy-block/dummy-block.component';
import { DummyButtonComponent } from './dummy-button/dummy-button.component';
import { DummyButtonAlertComponent } from './dummy-button-alert/dummy-button-alert.component';

@NgModule( {
    exports      : [
        DummyBlockComponent,
        DummyButtonComponent,
        DummyButtonAlertComponent
    ],
    declarations : [
        DummyBlockComponent,
        DummyButtonComponent,
        DummyButtonAlertComponent
    ],
    imports      : [
        CommonModule
    ]
} )
export class DummyContentModule {}
