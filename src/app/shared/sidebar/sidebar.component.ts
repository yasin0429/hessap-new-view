import { Component, OnInit } from '@angular/core';
import { RouteInfo } from "./sidebar.metadata";
import { Router, ActivatedRoute } from "@angular/router";

declare var $: any;

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    constructor(private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        $.getScript('./assets/js/app-sidebar.js');
    }

    //NGX Wizard - skip url change
    ngxWizardFunction(path: string) {
        if (path.indexOf('forms/ngx') !== -1)
            this.router.navigate(['forms/ngx/wizard'], { skipLocationChange: false });
    }

    getMessage(groupId: number) {
        this.router.navigate(['/dashboard/chat', groupId]);
    }
}
