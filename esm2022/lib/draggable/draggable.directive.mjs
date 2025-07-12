import { Directive, HostListener } from '@angular/core';
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
export class polpModalDraggableDirective {
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
    static { this.ɵfac = function polpModalDraggableDirective_Factory(t) { return new (t || polpModalDraggableDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: polpModalDraggableDirective, selectors: [["", "polpModalDraggable", ""]], hostBindings: function polpModalDraggableDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mousedown", function polpModalDraggableDirective_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); })("mouseup", function polpModalDraggableDirective_mouseup_HostBindingHandler($event) { return ctx.onMouseUp($event); }, false, i0.ɵɵresolveDocument)("mousemove", function polpModalDraggableDirective_mousemove_HostBindingHandler($event) { return ctx.onMouseMove($event); }, false, i0.ɵɵresolveDocument)("mouseleave", function polpModalDraggableDirective_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave($event); }, false, i0.ɵɵresolveDocument);
        } } }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(polpModalDraggableDirective, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL21vZGFsLWRpcmVjdGl2ZXMvc3JjL2xpYi9kcmFnZ2FibGUvZHJhZ2dhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBRW5GOzs7Ozs7OztHQVFHO0FBS0gsTUFBTSxPQUFPLDJCQUEyQjtJQU9wQyxZQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO0lBQ3RDLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFFekMsc0NBQXNDO1FBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFFaEQsNkJBQTZCO1FBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFFNUMsdUZBQXVGO1FBQ3ZGLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDcEMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7U0FDaEM7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQ2xELENBQUM7SUFHRCxXQUFXLENBQUMsS0FBaUI7UUFDekIsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDbkYsT0FBTyxDQUFDLDRCQUE0QjtTQUN2QztRQUVELGlCQUFpQjtRQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUV4Qix5QkFBeUI7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4RixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUdELFNBQVMsQ0FBQyxLQUFpQjtRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBR0QsV0FBVyxDQUFDLEtBQWlCO1FBQ3pCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQiwyQ0FBMkM7WUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3JFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUMxRTtJQUNMLENBQUM7SUFHRCxZQUFZLENBQUMsS0FBaUI7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs0RkE1RFEsMkJBQTJCO29FQUEzQiwyQkFBMkI7MEhBQTNCLHVCQUFtQixpR0FBbkIscUJBQWlCLGtJQUFqQix1QkFBbUIsb0lBQW5CLHdCQUFvQjs7O3VGQUFwQiwyQkFBMkI7Y0FIdkMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxzQkFBc0I7YUFDbkM7NkRBOEJHLFdBQVc7a0JBRFYsWUFBWTttQkFBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFnQnJDLFNBQVM7a0JBRFIsWUFBWTttQkFBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQU01QyxXQUFXO2tCQURWLFlBQVk7bUJBQUMsb0JBQW9CLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFVOUMsWUFBWTtrQkFEWCxZQUFZO21CQUFDLHFCQUFxQixFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLypcbiAqIERpcmVjdGl2ZSB0byBhZGQgJ2RyYWcnIHN1cHBvcnQgdG8gTmd4IEJvb3RzdHJhcCBtb2RhbHMgKGh0dHBzOi8vZ2l0aHViLmNvbS92YWxvci1zb2Z0d2FyZS9uZ3gtYm9vdHN0cmFwKS5cbiAqIEJhc2VkIG9uIHRoaXMgbGlicmFyeSB0byBlbmFibGUgZHJhZyBzdXBwb3J0IGZvciBhbiBuZy1ib290c3RyYXAgbW9kYWw6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0eHUtenovbmdiLW1vZGFsLWRyYWdnYWJsZVxuICogaHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9tYXJrbGV1c2luay83YWYxNzFkNWYxN2U3ZGM5NzE0ZTY5OTY1ZmRhYmFiOS9yYXcvZmYzYmRhYjM2NDMzZjJkNzhjMjE4NzRlNmViMDliMTBkMThhMWUwMC9kcmFnZ2FibGUuZGlyZWN0aXZlLnRzXG4gKlxuICogRW5hYmxlIGJ5IGFkZGluZyB0aGUgZGlyZWN0aXZlIHRvIHRoZSBtb2RhbC1oZWFkZXIgZWxlbWVudCwgZS5nLjpcbiAqXG4gKiA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCIgbmd4TW9kYWxEcmFnZ2FibGU+ICA8L2Rpdj5cbiAqL1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1twb2xwTW9kYWxEcmFnZ2FibGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBwb2xwTW9kYWxEcmFnZ2FibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgICBwcml2YXRlIG1vZGFsRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSB0b3BTdGFydDogbnVtYmVyO1xuICAgIHByaXZhdGUgbGVmdFN0YXJ0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBpc0RyYWdnYWJsZTogYm9vbGVhbjtcbiAgICBwcml2YXRlIGhhbmRsZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgLy9vbmx5IG1ha2UgdGhlIG1vZGFsIGhlYWRlciBkcmFnZ2FibGVcbiAgICAgICAgdGhpcy5oYW5kbGVFbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgLy9jaGFuZ2UgY3Vyc29yIG9uIHRoZSBoZWFkZXJcbiAgICAgICAgdGhpcy5oYW5kbGVFbGVtZW50LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcblxuICAgICAgICAvL2dldCB0aGUgbW9kYWwgcGFyZW50IGNvbnRhaW5lciBlbGVtZW50OiB0aGF0J3MgdGhlIGVsZW1lbnQgd2UncmUgZ29pbmcgdG8gbW92ZSBhcm91bmRcbiAgICAgICAgZm9yIChsZXQgbGV2ZWwgPSAzOyBsZXZlbCA+IDA7IGxldmVsLS0pIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1vZGFsRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubW9kYWxFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKVxuICAgIG9uTW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5idXR0b24gPT09IDIgfHwgKHRoaXMuaGFuZGxlRWxlbWVudCAmJiBldmVudC50YXJnZXQgIT09IHRoaXMuaGFuZGxlRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjsgLy8gcHJldmVudHMgcmlnaHQgY2xpY2sgZHJhZ1xuICAgICAgICB9XG5cbiAgICAgICAgLy9lbmFibGUgZHJhZ2dpbmdcbiAgICAgICAgdGhpcy5pc0RyYWdnYWJsZSA9IHRydWU7XG5cbiAgICAgICAgLy9zdG9yZSBvcmlnaW5hbCBwb3NpdGlvblxuICAgICAgICB0aGlzLnRvcFN0YXJ0ID0gZXZlbnQuY2xpZW50WSAtIE51bWJlcih0aGlzLm1vZGFsRWxlbWVudC5zdHlsZS50b3AucmVwbGFjZSgncHgnLCAnJykpO1xuICAgICAgICB0aGlzLmxlZnRTdGFydCA9IGV2ZW50LmNsaWVudFggLSBOdW1iZXIodGhpcy5tb2RhbEVsZW1lbnQuc3R5bGUubGVmdC5yZXBsYWNlKCdweCcsICcnKSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bW91c2V1cCcsIFsnJGV2ZW50J10pXG4gICAgb25Nb3VzZVVwKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2FibGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZW1vdmUnLCBbJyRldmVudCddKVxuICAgIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmlzRHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAvL29uIG1vdmluZyB0aGUgbW91c2UsIHJlcG9zaXRpb24gdGhlIG1vZGFsXG4gICAgICAgICAgICB0aGlzLm1vZGFsRWxlbWVudC5zdHlsZS50b3AgPSAoZXZlbnQuY2xpZW50WSAtIHRoaXMudG9wU3RhcnQpICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMubW9kYWxFbGVtZW50LnN0eWxlLmxlZnQgPSAoZXZlbnQuY2xpZW50WCAtIHRoaXMubGVmdFN0YXJ0KSArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZWxlYXZlJywgWyckZXZlbnQnXSlcbiAgICBvbk1vdXNlTGVhdmUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgdGhpcy5pc0RyYWdnYWJsZSA9IGZhbHNlO1xuICAgIH1cblxufVxuIl19