import { NgModule }              from '@angular/core';
import { DummyContentModule }    from 'src/app/modules/dummy-content/dummy-content.module';
import { HolyGrailLayoutModule } from 'src/app/modules/holy-grail-layout/holy-grail-layout.module';
import { PageAboutComponent }    from 'src/app/pages/page-about/page-about.component';
import { PageHomeComponent }     from 'src/app/pages/page-home/page-home.component';

@NgModule( {
    exports      : [
        PageHomeComponent,
        PageAboutComponent
    ],
    declarations : [
        PageHomeComponent,
        PageAboutComponent
    ],
    imports      : [
        HolyGrailLayoutModule,
        DummyContentModule
    ]
} )
export class PagesModule {}
