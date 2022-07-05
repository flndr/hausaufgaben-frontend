import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAboutComponent }   from 'src/app/pages/page-about/page-about.component';
import { PageHomeComponent }    from 'src/app/pages/page-home/page-home.component';

const routes : Routes = [
    {
        path      : '',
        component : PageHomeComponent,
    },
    {
        path      : 'about',
        component : PageAboutComponent,
    },
];

@NgModule( {
    imports      : [
        RouterModule.forRoot( routes )
    ],
    exports      : [
        RouterModule
    ],
    declarations : []
} )
export class AppRoutingModule {}
