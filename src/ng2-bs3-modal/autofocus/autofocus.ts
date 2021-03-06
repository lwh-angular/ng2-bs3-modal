import { Directive, ElementRef, Inject, Optional } from '@angular/core';
import { BsModalComponent } from '../modal/modal';

@Directive({
    selector: '[autofocus]'
})
export class BsAutofocusDirective {
    constructor(private el: ElementRef, @Optional() private modal: BsModalComponent) {
        if (modal) {
            this.modal.onOpen.subscribe(() => {
                this.el.nativeElement.focus();
            });
        }
    }
}
