import { ɵɵdirectiveInject, ElementRef, ɵɵdefineDirective, ɵɵlistener, ɵɵresolveDocument, ɵsetClassMetadata, Directive, HostListener, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

/*
 * Directive to add 'drag' support to Ngx Bootstrap modals (https://github.com/valor-software/ngx-bootstrap).
 * Based on this library to enable drag support for an ng-bootstrap modal: https://github.com/mattxu-zz/ngb-modal-draggable
 * https://gist.githubusercontent.com/markleusink/7af171d5f17e7dc9714e69965fdabab9/raw/ff3bdab36433f2d78c21874e6eb09b10d18a1e00/draggable.directive.ts
 *
 * Enable by adding the directive to the modal-header element, e.g.:
 *
 * <div class="modal-header" ngxModalDraggable>  </div>
 */
var polpModalDraggableDirective = /** @class */ (function () {
    function polpModalDraggableDirective(element) {
        this.element = element;
    }
    polpModalDraggableDirective.prototype.ngAfterViewInit = function () {
        var element = this.element.nativeElement;
        //only make the modal header draggable
        this.handleElement = this.element.nativeElement;
        //change cursor on the header
        this.handleElement.style.cursor = 'pointer';
        //get the modal parent container element: that's the element we're going to move around
        for (var level = 3; level > 0; level--) {
            element = element.parentNode;
        }
        this.modalElement = element;
        this.modalElement.style.position = 'relative';
    };
    polpModalDraggableDirective.prototype.onMouseDown = function (event) {
        if (event.button === 2 || (this.handleElement && event.target !== this.handleElement)) {
            return; // prevents right click drag
        }
        //enable dragging
        this.isDraggable = true;
        //store original position
        this.topStart = event.clientY - Number(this.modalElement.style.top.replace('px', ''));
        this.leftStart = event.clientX - Number(this.modalElement.style.left.replace('px', ''));
        event.preventDefault();
    };
    polpModalDraggableDirective.prototype.onMouseUp = function (event) {
        this.isDraggable = false;
    };
    polpModalDraggableDirective.prototype.onMouseMove = function (event) {
        if (this.isDraggable) {
            //on moving the mouse, reposition the modal
            this.modalElement.style.top = (event.clientY - this.topStart) + 'px';
            this.modalElement.style.left = (event.clientX - this.leftStart) + 'px';
        }
    };
    polpModalDraggableDirective.prototype.onMouseLeave = function (event) {
        this.isDraggable = false;
    };
    polpModalDraggableDirective.ɵfac = function polpModalDraggableDirective_Factory(t) { return new (t || polpModalDraggableDirective)(ɵɵdirectiveInject(ElementRef)); };
    polpModalDraggableDirective.ɵdir = ɵɵdefineDirective({ type: polpModalDraggableDirective, selectors: [["", "polpModalDraggable", ""]], hostBindings: function polpModalDraggableDirective_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("mousedown", function polpModalDraggableDirective_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); })("mouseup", function polpModalDraggableDirective_mouseup_HostBindingHandler($event) { return ctx.onMouseUp($event); }, false, ɵɵresolveDocument)("mousemove", function polpModalDraggableDirective_mousemove_HostBindingHandler($event) { return ctx.onMouseMove($event); }, false, ɵɵresolveDocument)("mouseleave", function polpModalDraggableDirective_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave($event); }, false, ɵɵresolveDocument);
        } } });
    return polpModalDraggableDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(polpModalDraggableDirective, [{
        type: Directive,
        args: [{
                selector: '[polpModalDraggable]'
            }]
    }], function () { return [{ type: ElementRef }]; }, { onMouseDown: [{
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
        }] }); })();

var PolpDraggableModule = /** @class */ (function () {
    function PolpDraggableModule() {
    }
    PolpDraggableModule.ɵmod = ɵɵdefineNgModule({ type: PolpDraggableModule });
    PolpDraggableModule.ɵinj = ɵɵdefineInjector({ factory: function PolpDraggableModule_Factory(t) { return new (t || PolpDraggableModule)(); } });
    return PolpDraggableModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PolpDraggableModule, { declarations: [polpModalDraggableDirective], exports: [polpModalDraggableDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PolpDraggableModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    polpModalDraggableDirective
                ],
                exports: [
                    polpModalDraggableDirective
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of modal-directives
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PolpDraggableModule, polpModalDraggableDirective };
//# sourceMappingURL=polpware-modal-directives.js.map
