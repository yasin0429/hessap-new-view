import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
declare var require: any;


@Component({
    selector: 'app-vertical-timeline-page',
    templateUrl: './vertical-timeline-page.component.html',
    styleUrls: ['./vertical-timeline-page.component.scss']
})



export class VerticalTimelinePageComponent implements OnInit {

    closeResult: string;
    ngOnInit() {
        // Vertical Timeline JS
        $.getScript('./vertical-timeline.js');
    }

    constructor(private modalService: NgbModal) { }
    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    // Open modal with dark section
    openModal(customContent) {
        this.modalService.open(customContent, { windowClass: 'dark-modal' });
    }

    // Open content with dark section
    openContent() {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    }
}
export class NgbdModalContent {
    @Input() name;
    constructor(public activeModal: NgbActiveModal) { }
}
  
