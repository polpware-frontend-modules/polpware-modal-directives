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
}
polpModalDraggableDirective.ɵfac = function polpModalDraggableDirective_Factory(t) { return new (t || polpModalDraggableDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
polpModalDraggableDirective.ɵdir = i0.ɵɵdefineDirective({ type: polpModalDraggableDirective, selectors: [["", "polpModalDraggable", ""]], hostBindings: function polpModalDraggableDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mousedown", function polpModalDraggableDirective_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); })("mouseup", function polpModalDraggableDirective_mouseup_HostBindingHandler($event) { return ctx.onMouseUp($event); }, false, i0.ɵɵresolveDocument)("mousemove", function polpModalDraggableDirective_mousemove_HostBindingHandler($event) { return ctx.onMouseMove($event); }, false, i0.ɵɵresolveDocument)("mouseleave", function polpModalDraggableDirective_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave($event); }, false, i0.ɵɵresolveDocument);
    } } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9tb2RhbC1kaXJlY3RpdmVzLyIsInNvdXJjZXMiOlsibGliL2RyYWdnYWJsZS9kcmFnZ2FibGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBRW5GOzs7Ozs7OztHQVFHO0FBS0gsTUFBTSxPQUFPLDJCQUEyQjtJQU9wQyxZQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO0lBQ3RDLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFFekMsc0NBQXNDO1FBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFFaEQsNkJBQTZCO1FBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFFNUMsdUZBQXVGO1FBQ3ZGLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDcEMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7U0FDaEM7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQ2xELENBQUM7SUFHRCxXQUFXLENBQUMsS0FBaUI7UUFDekIsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDbkYsT0FBTyxDQUFDLDRCQUE0QjtTQUN2QztRQUVELGlCQUFpQjtRQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUV4Qix5QkFBeUI7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4RixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUdELFNBQVMsQ0FBQyxLQUFpQjtRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBR0QsV0FBVyxDQUFDLEtBQWlCO1FBQ3pCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQiwyQ0FBMkM7WUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3JFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUMxRTtJQUNMLENBQUM7SUFHRCxZQUFZLENBQUMsS0FBaUI7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7c0dBNURRLDJCQUEyQjtnRUFBM0IsMkJBQTJCO3NIQUEzQix1QkFBbUIsaUdBQW5CLHFCQUFpQixrSUFBakIsdUJBQW1CLG9JQUFuQix3QkFBb0I7O2tEQUFwQiwyQkFBMkI7Y0FIdkMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxzQkFBc0I7YUFDbkM7O2tCQTZCSSxZQUFZO21CQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7a0JBZXBDLFlBQVk7bUJBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUM7O2tCQUszQyxZQUFZO21CQUFDLG9CQUFvQixFQUFFLENBQUMsUUFBUSxDQUFDOztrQkFTN0MsWUFBWTttQkFBQyxxQkFBcUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qXG4gKiBEaXJlY3RpdmUgdG8gYWRkICdkcmFnJyBzdXBwb3J0IHRvIE5neCBCb290c3RyYXAgbW9kYWxzIChodHRwczovL2dpdGh1Yi5jb20vdmFsb3Itc29mdHdhcmUvbmd4LWJvb3RzdHJhcCkuXG4gKiBCYXNlZCBvbiB0aGlzIGxpYnJhcnkgdG8gZW5hYmxlIGRyYWcgc3VwcG9ydCBmb3IgYW4gbmctYm9vdHN0cmFwIG1vZGFsOiBodHRwczovL2dpdGh1Yi5jb20vbWF0dHh1LXp6L25nYi1tb2RhbC1kcmFnZ2FibGVcbiAqIGh0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20vbWFya2xldXNpbmsvN2FmMTcxZDVmMTdlN2RjOTcxNGU2OTk2NWZkYWJhYjkvcmF3L2ZmM2JkYWIzNjQzM2YyZDc4YzIxODc0ZTZlYjA5YjEwZDE4YTFlMDAvZHJhZ2dhYmxlLmRpcmVjdGl2ZS50c1xuICpcbiAqIEVuYWJsZSBieSBhZGRpbmcgdGhlIGRpcmVjdGl2ZSB0byB0aGUgbW9kYWwtaGVhZGVyIGVsZW1lbnQsIGUuZy46XG4gKlxuICogPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiIG5neE1vZGFsRHJhZ2dhYmxlPiAgPC9kaXY+XG4gKi9cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbcG9scE1vZGFsRHJhZ2dhYmxlXSdcbn0pXG5leHBvcnQgY2xhc3MgcG9scE1vZGFsRHJhZ2dhYmxlRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgcHJpdmF0ZSBtb2RhbEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgdG9wU3RhcnQ6IG51bWJlcjtcbiAgICBwcml2YXRlIGxlZnRTdGFydDogbnVtYmVyO1xuICAgIHByaXZhdGUgaXNEcmFnZ2FibGU6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBoYW5kbGVFbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgIC8vb25seSBtYWtlIHRoZSBtb2RhbCBoZWFkZXIgZHJhZ2dhYmxlXG4gICAgICAgIHRoaXMuaGFuZGxlRWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgIC8vY2hhbmdlIGN1cnNvciBvbiB0aGUgaGVhZGVyXG4gICAgICAgIHRoaXMuaGFuZGxlRWxlbWVudC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG5cbiAgICAgICAgLy9nZXQgdGhlIG1vZGFsIHBhcmVudCBjb250YWluZXIgZWxlbWVudDogdGhhdCdzIHRoZSBlbGVtZW50IHdlJ3JlIGdvaW5nIHRvIG1vdmUgYXJvdW5kXG4gICAgICAgIGZvciAobGV0IGxldmVsID0gMzsgbGV2ZWwgPiAwOyBsZXZlbC0tKSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tb2RhbEVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLm1vZGFsRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcbiAgICBvbk1vdXNlRG93bihldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAyIHx8ICh0aGlzLmhhbmRsZUVsZW1lbnQgJiYgZXZlbnQudGFyZ2V0ICE9PSB0aGlzLmhhbmRsZUVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47IC8vIHByZXZlbnRzIHJpZ2h0IGNsaWNrIGRyYWdcbiAgICAgICAgfVxuXG4gICAgICAgIC8vZW5hYmxlIGRyYWdnaW5nXG4gICAgICAgIHRoaXMuaXNEcmFnZ2FibGUgPSB0cnVlO1xuXG4gICAgICAgIC8vc3RvcmUgb3JpZ2luYWwgcG9zaXRpb25cbiAgICAgICAgdGhpcy50b3BTdGFydCA9IGV2ZW50LmNsaWVudFkgLSBOdW1iZXIodGhpcy5tb2RhbEVsZW1lbnQuc3R5bGUudG9wLnJlcGxhY2UoJ3B4JywgJycpKTtcbiAgICAgICAgdGhpcy5sZWZ0U3RhcnQgPSBldmVudC5jbGllbnRYIC0gTnVtYmVyKHRoaXMubW9kYWxFbGVtZW50LnN0eWxlLmxlZnQucmVwbGFjZSgncHgnLCAnJykpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1vdXNldXAnLCBbJyRldmVudCddKVxuICAgIG9uTW91c2VVcChldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICB0aGlzLmlzRHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bW91c2Vtb3ZlJywgWyckZXZlbnQnXSlcbiAgICBvbk1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5pc0RyYWdnYWJsZSkge1xuICAgICAgICAgICAgLy9vbiBtb3ZpbmcgdGhlIG1vdXNlLCByZXBvc2l0aW9uIHRoZSBtb2RhbFxuICAgICAgICAgICAgdGhpcy5tb2RhbEVsZW1lbnQuc3R5bGUudG9wID0gKGV2ZW50LmNsaWVudFkgLSB0aGlzLnRvcFN0YXJ0KSArICdweCc7XG4gICAgICAgICAgICB0aGlzLm1vZGFsRWxlbWVudC5zdHlsZS5sZWZ0ID0gKGV2ZW50LmNsaWVudFggLSB0aGlzLmxlZnRTdGFydCkgKyAncHgnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bW91c2VsZWF2ZScsIFsnJGV2ZW50J10pXG4gICAgb25Nb3VzZUxlYXZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2FibGUgPSBmYWxzZTtcbiAgICB9XG5cbn1cbiJdfQ==