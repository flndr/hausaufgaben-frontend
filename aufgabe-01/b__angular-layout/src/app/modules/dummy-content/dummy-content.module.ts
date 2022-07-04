import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { DummyBlockComponent } from './dummy-block/dummy-block.component';

@NgModule( {
    exports      : [
        DummyBlockComponent
    ],
    declarations : [
        DummyBlockComponent
    ],
    imports      : [
        CommonModule
    ]
} )
export class DummyContentModule {}
