import * as i0 from '@angular/core';
import { Directive, HostListener, NgModule } from '@angular/core';

/*
 * Directive to add 'drag' support to Ngx Bootstrap modals (https://github.com/valor-software/ngx-bootstrap).
 * Based on this library to enable drag support for an ng-bootstrap modal: https://github.com/mattxu-zz/ngb-modal-draggable
 * https://gist.githubusercontent.com/markleusink/7af171d5f17e7dc9714e69965fdabab9/raw/ff3bdab36433f2d78c21874e6eb09b10d18a1e00/draggable.directive.ts
 *
 * Enable by adding the directive to the modal-header element, e.g.:
 *
 * <div class="modal-header" ngxModalDraggable>  </div>
 */
class polpModalDraggableDirective {
    constructor(element) {
        this.element = element;
    }
    ngAfterViewInit() {
        let element = this.element.nativeElement;
        //only make the modal header draggable
        this.handleElement = this.element.nativeElement;
        //change cursor on the header
        this.handleElement.style.cursor = 'pointer';
        //get the modal parent container element: that's the element we're going to move around
        for (let level = 3; level > 0; level--) {
            element = element.parentNode;
        }
        this.modalElement = element;
        this.modalElement.style.position = 'relative';
    }
    onMouseDown(event) {
        if (event.button === 2 || (this.handleElement && event.target !== this.handleElement)) {
            return; // prevents right click drag
        }
        //enable dragging
        this.isDraggable = true;
        //store original position
        this.topStart = event.clientY - Number(this.modalElement.style.top.replace('px', ''));
        this.leftStart = event.clientX - Number(this.modalElement.style.left.replace('px', ''));
        event.preventDefault();
    }
    onMouseUp(event) {
        this.isDraggable = false;
    }
    onMouseMove(event) {
        if (this.isDraggable) {
            //on moving the mouse, reposition the modal
            this.modalElement.style.top = (event.clientY - this.topStart) + 'px';
            this.modalElement.style.left = (event.clientX - this.leftStart) + 'px';
        }
    }
    onMouseLeave(event) {
        this.isDraggable = false;
    }
}
polpModalDraggableDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: polpModalDraggableDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
polpModalDraggableDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: polpModalDraggableDirective, selector: "[polpModalDraggable]", host: { listeners: { "mousedown": "onMouseDown($event)", "document:mouseup": "onMouseUp($event)", "document:mousemove": "onMouseMove($event)", "document:mouseleave": "onMouseLeave($event)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: polpModalDraggableDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[polpModalDraggable]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { onMouseDown: [{
                type: HostListener,
                args: ['mousedown', ['$event']]
            }], onMouseUp: [{
                type: HostListener,
                args: ['document:mouseup', ['$event']]
            }], onMouseMove: [{
                type: HostListener,
                args: ['document:mousemove', ['$event']]
            }], onMouseLeave: [{
                type: HostListener,
                args: ['document:mouseleave', ['$event']]
            }] } });

class PolpDraggableModule {
}
PolpDraggableModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PolpDraggableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PolpDraggableModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PolpDraggableModule, declarations: [polpModalDraggableDirective], exports: [polpModalDraggableDirective] });
PolpDraggableModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PolpDraggableModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PolpDraggableModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        polpModalDraggableDirective
                    ],
                    exports: [
                        polpModalDraggableDirective
                    ]
                }]
        }] });

/*
 * Public API Surface of modal-directives
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PolpDraggableModule, polpModalDraggableDirective };
//# sourceMappingURL=polpware-modal-directives.mjs.map
