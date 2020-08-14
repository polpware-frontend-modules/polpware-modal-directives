(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@polpware/modal-directives', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global.polpware = global.polpware || {}, global.polpware['modal-directives'] = {}), global.ng.core));
}(this, (function (exports, core) { 'use strict';

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
        polpModalDraggableDirective.ɵfac = function polpModalDraggableDirective_Factory(t) { return new (t || polpModalDraggableDirective)(core.ɵɵdirectiveInject(core.ElementRef)); };
        polpModalDraggableDirective.ɵdir = core.ɵɵdefineDirective({ type: polpModalDraggableDirective, selectors: [["", "polpModalDraggable", ""]], hostBindings: function polpModalDraggableDirective_HostBindings(rf, ctx) { if (rf & 1) {
                core.ɵɵlistener("mousedown", function polpModalDraggableDirective_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); })("mouseup", function polpModalDraggableDirective_mouseup_HostBindingHandler($event) { return ctx.onMouseUp($event); }, false, core.ɵɵresolveDocument)("mousemove", function polpModalDraggableDirective_mousemove_HostBindingHandler($event) { return ctx.onMouseMove($event); }, false, core.ɵɵresolveDocument)("mouseleave", function polpModalDraggableDirective_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave($event); }, false, core.ɵɵresolveDocument);
            } } });
        return polpModalDraggableDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(polpModalDraggableDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[polpModalDraggable]'
                }]
        }], function () { return [{ type: core.ElementRef }]; }, { onMouseDown: [{
                type: core.HostListener,
                args: ['mousedown', ['$event']]
            }], onMouseUp: [{
                type: core.HostListener,
                args: ['document:mouseup', ['$event']]
            }], onMouseMove: [{
                type: core.HostListener,
                args: ['document:mousemove', ['$event']]
            }], onMouseLeave: [{
                type: core.HostListener,
                args: ['document:mouseleave', ['$event']]
            }] }); })();

    var PolpDraggableModule = /** @class */ (function () {
        function PolpDraggableModule() {
        }
        PolpDraggableModule.ɵmod = core.ɵɵdefineNgModule({ type: PolpDraggableModule });
        PolpDraggableModule.ɵinj = core.ɵɵdefineInjector({ factory: function PolpDraggableModule_Factory(t) { return new (t || PolpDraggableModule)(); } });
        return PolpDraggableModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(PolpDraggableModule, { declarations: [polpModalDraggableDirective], exports: [polpModalDraggableDirective] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(PolpDraggableModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [
                        polpModalDraggableDirective
                    ],
                    exports: [
                        polpModalDraggableDirective
                    ]
                }]
        }], null, null); })();

    exports.PolpDraggableModule = PolpDraggableModule;
    exports.polpModalDraggableDirective = polpModalDraggableDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polpware-modal-directives.umd.js.map
