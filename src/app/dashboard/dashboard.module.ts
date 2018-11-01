import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ChartsModule } from 'ng2-charts';
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { ChartistModule } from 'ng-chartist';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from "../shared/directives/match-height.directive";
import { Dashboard2Component } from "./dashboard2/dashboard2.component";
import { ChatComponent } from "./chat/chat.component";
import { VerticalTimelinePageComponent } from "./vertical/vertical-timeline-page.component";
import { StatusComponent } from './status/status.component';
import { SettingsComponent } from './settings/settings.component';
import { from } from 'rxjs/observable/from';
import { GroupComponent } from './group/group.component';
import { CreateGroupComponent } from './create-group/create-group.component';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ChartistModule,
        NgbModule,
        MatchHeightModule,
        ChartsModule
    ],
    exports: [],
    declarations: [

        Dashboard2Component,
        ChatComponent,
        VerticalTimelinePageComponent,
        StatusComponent,
        SettingsComponent,
        GroupComponent,
        CreateGroupComponent
    ],
    providers: [],
})
export class DashboardModule { }
