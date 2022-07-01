import { ElementRef, AfterViewInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class polpModalDraggableDirective implements AfterViewInit {
    element: ElementRef;
    private modalElement;
    private topStart;
    private leftStart;
    private isDraggable;
    private handleElement;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    onMouseDown(event: MouseEvent): void;
    onMouseUp(event: MouseEvent): void;
    onMouseMove(event: MouseEvent): void;
    onMouseLeave(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<polpModalDraggableDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<polpModalDraggableDirective, "[polpModalDraggable]", never, {}, {}, never>;
}
