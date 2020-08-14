import { Directive, ElementRef, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
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
    polpModalDraggableDirective.ɵfac = function polpModalDraggableDirective_Factory(t) { return new (t || polpModalDraggableDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    polpModalDraggableDirective.ɵdir = i0.ɵɵdefineDirective({ type: polpModalDraggableDirective, selectors: [["", "polpModalDraggable", ""]], hostBindings: function polpModalDraggableDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mousedown", function polpModalDraggableDirective_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); })("mouseup", function polpModalDraggableDirective_mouseup_HostBindingHandler($event) { return ctx.onMouseUp($event); }, false, i0.ɵɵresolveDocument)("mousemove", function polpModalDraggableDirective_mousemove_HostBindingHandler($event) { return ctx.onMouseMove($event); }, false, i0.ɵɵresolveDocument)("mouseleave", function polpModalDraggableDirective_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave($event); }, false, i0.ɵɵresolveDocument);
        } } });
    return polpModalDraggableDirective;
}());
export { polpModalDraggableDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(polpModalDraggableDirective, [{
        type: Directive,
        args: [{
                selector: '[polpModalDraggable]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { onMouseDown: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9tb2RhbC1kaXJlY3RpdmVzLyIsInNvdXJjZXMiOlsibGliL2RyYWdnYWJsZS9kcmFnZ2FibGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBRW5GOzs7Ozs7OztHQVFHO0FBRUg7SUFVSSxxQ0FBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtJQUN0QyxDQUFDO0lBRUQscURBQWUsR0FBZjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBRXpDLHNDQUFzQztRQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBRWhELDZCQUE2QjtRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBRTVDLHVGQUF1RjtRQUN2RixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3BDLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUNsRCxDQUFDO0lBR0QsaURBQVcsR0FEWCxVQUNZLEtBQWlCO1FBQ3pCLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ25GLE9BQU8sQ0FBQyw0QkFBNEI7U0FDdkM7UUFFRCxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFeEIseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEYsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFHRCwrQ0FBUyxHQURULFVBQ1UsS0FBaUI7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUdELGlEQUFXLEdBRFgsVUFDWSxLQUFpQjtRQUN6QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsMkNBQTJDO1lBQzNDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNyRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDMUU7SUFDTCxDQUFDO0lBR0Qsa0RBQVksR0FEWixVQUNhLEtBQWlCO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7MEdBNURRLDJCQUEyQjtvRUFBM0IsMkJBQTJCOzBIQUEzQix1QkFBbUIsaUdBQW5CLHFCQUFpQixrSUFBakIsdUJBQW1CLG9JQUFuQix3QkFBb0I7O3NDQWZqQztDQTZFQyxBQWpFRCxJQWlFQztTQTlEWSwyQkFBMkI7a0RBQTNCLDJCQUEyQjtjQUh2QyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLHNCQUFzQjthQUNuQzs7a0JBNkJJLFlBQVk7bUJBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDOztrQkFlcEMsWUFBWTttQkFBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7a0JBSzNDLFlBQVk7bUJBQUMsb0JBQW9CLEVBQUUsQ0FBQyxRQUFRLENBQUM7O2tCQVM3QyxZQUFZO21CQUFDLHFCQUFxQixFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLypcbiAqIERpcmVjdGl2ZSB0byBhZGQgJ2RyYWcnIHN1cHBvcnQgdG8gTmd4IEJvb3RzdHJhcCBtb2RhbHMgKGh0dHBzOi8vZ2l0aHViLmNvbS92YWxvci1zb2Z0d2FyZS9uZ3gtYm9vdHN0cmFwKS5cbiAqIEJhc2VkIG9uIHRoaXMgbGlicmFyeSB0byBlbmFibGUgZHJhZyBzdXBwb3J0IGZvciBhbiBuZy1ib290c3RyYXAgbW9kYWw6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0eHUtenovbmdiLW1vZGFsLWRyYWdnYWJsZVxuICogaHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9tYXJrbGV1c2luay83YWYxNzFkNWYxN2U3ZGM5NzE0ZTY5OTY1ZmRhYmFiOS9yYXcvZmYzYmRhYjM2NDMzZjJkNzhjMjE4NzRlNmViMDliMTBkMThhMWUwMC9kcmFnZ2FibGUuZGlyZWN0aXZlLnRzXG4gKlxuICogRW5hYmxlIGJ5IGFkZGluZyB0aGUgZGlyZWN0aXZlIHRvIHRoZSBtb2RhbC1oZWFkZXIgZWxlbWVudCwgZS5nLjpcbiAqXG4gKiA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCIgbmd4TW9kYWxEcmFnZ2FibGU+ICA8L2Rpdj5cbiAqL1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1twb2xwTW9kYWxEcmFnZ2FibGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBwb2xwTW9kYWxEcmFnZ2FibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgICBwcml2YXRlIG1vZGFsRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSB0b3BTdGFydDogbnVtYmVyO1xuICAgIHByaXZhdGUgbGVmdFN0YXJ0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBpc0RyYWdnYWJsZTogYm9vbGVhbjtcbiAgICBwcml2YXRlIGhhbmRsZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgLy9vbmx5IG1ha2UgdGhlIG1vZGFsIGhlYWRlciBkcmFnZ2FibGVcbiAgICAgICAgdGhpcy5oYW5kbGVFbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgLy9jaGFuZ2UgY3Vyc29yIG9uIHRoZSBoZWFkZXJcbiAgICAgICAgdGhpcy5oYW5kbGVFbGVtZW50LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcblxuICAgICAgICAvL2dldCB0aGUgbW9kYWwgcGFyZW50IGNvbnRhaW5lciBlbGVtZW50OiB0aGF0J3MgdGhlIGVsZW1lbnQgd2UncmUgZ29pbmcgdG8gbW92ZSBhcm91bmRcbiAgICAgICAgZm9yIChsZXQgbGV2ZWwgPSAzOyBsZXZlbCA+IDA7IGxldmVsLS0pIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1vZGFsRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubW9kYWxFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKVxuICAgIG9uTW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5idXR0b24gPT09IDIgfHwgKHRoaXMuaGFuZGxlRWxlbWVudCAmJiBldmVudC50YXJnZXQgIT09IHRoaXMuaGFuZGxlRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjsgLy8gcHJldmVudHMgcmlnaHQgY2xpY2sgZHJhZ1xuICAgICAgICB9XG5cbiAgICAgICAgLy9lbmFibGUgZHJhZ2dpbmdcbiAgICAgICAgdGhpcy5pc0RyYWdnYWJsZSA9IHRydWU7XG5cbiAgICAgICAgLy9zdG9yZSBvcmlnaW5hbCBwb3NpdGlvblxuICAgICAgICB0aGlzLnRvcFN0YXJ0ID0gZXZlbnQuY2xpZW50WSAtIE51bWJlcih0aGlzLm1vZGFsRWxlbWVudC5zdHlsZS50b3AucmVwbGFjZSgncHgnLCAnJykpO1xuICAgICAgICB0aGlzLmxlZnRTdGFydCA9IGV2ZW50LmNsaWVudFggLSBOdW1iZXIodGhpcy5tb2RhbEVsZW1lbnQuc3R5bGUubGVmdC5yZXBsYWNlKCdweCcsICcnKSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bW91c2V1cCcsIFsnJGV2ZW50J10pXG4gICAgb25Nb3VzZVVwKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2FibGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZW1vdmUnLCBbJyRldmVudCddKVxuICAgIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmlzRHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAvL29uIG1vdmluZyB0aGUgbW91c2UsIHJlcG9zaXRpb24gdGhlIG1vZGFsXG4gICAgICAgICAgICB0aGlzLm1vZGFsRWxlbWVudC5zdHlsZS50b3AgPSAoZXZlbnQuY2xpZW50WSAtIHRoaXMudG9wU3RhcnQpICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMubW9kYWxFbGVtZW50LnN0eWxlLmxlZnQgPSAoZXZlbnQuY2xpZW50WCAtIHRoaXMubGVmdFN0YXJ0KSArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZWxlYXZlJywgWyckZXZlbnQnXSlcbiAgICBvbk1vdXNlTGVhdmUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgdGhpcy5pc0RyYWdnYWJsZSA9IGZhbHNlO1xuICAgIH1cblxufVxuIl19