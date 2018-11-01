import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Dashboard2Component } from "./dashboard2/dashboard2.component";
import { ChatComponent } from './chat/chat.component';
import { VerticalTimelinePageComponent } from './vertical/vertical-timeline-page.component';
import { StatusComponent } from './status/status.component';
import { SettingsComponent } from './settings/settings.component';
import { GroupComponent } from './group/group.component';
import { CreateGroupComponent } from './create-group/create-group.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'general-status',
        component: Dashboard2Component,
        data: {
          title: 'General Status'
        }
      },
      {
        path: 'create-group',
        component: CreateGroupComponent,
        data: {
          title: 'Create Group'
        }
      },
      {
        path: 'group',
        component: GroupComponent,
        children:[
          {
            path: 'chat',
            component: ChatComponent,
            data: {
              title: 'Chat'
            }
          },
          {
            path: 'timeline',
            component: VerticalTimelinePageComponent,
            data: {
              title: 'Timeline'
            }
          },
          {
            path: 'status',
            component: StatusComponent,
            data: {
              title: 'Status'
            }
          },
          {
            path: 'settings',
            component: SettingsComponent,
            data: {
              title: 'Settings'
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
