
import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";

import { CustomOption } from "./shared/toastr/custom-option";

import * as $ from 'jquery';
import { from } from 'rxjs/observable/from';


@NgModule({
    declarations: [
        AppComponent,
        FullLayoutComponent,
        ContentLayoutComponent
        
    ],
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        CommonModule,
        AngularFontAwesomeModule,
        SharedModule,
        ToastModule.forRoot(),
        NgbModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBr5_picK8YJK7fFR2CPzTVMj6GG1TtRGo'
        })
    ],
    providers: [
        //Toastr providers
        { provide: ToastOptions, useClass: CustomOption }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }