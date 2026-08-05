import * as i0 from '@angular/core';
import { AfterViewInit, ElementRef } from '@angular/core';

declare class polpModalDraggableDirective implements AfterViewInit {
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
    static ɵdir: i0.ɵɵDirectiveDeclaration<polpModalDraggableDirective, "[polpModalDraggable]", never, {}, {}, never, never, false, never>;
}

declare class PolpDraggableModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<PolpDraggableModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PolpDraggableModule, [typeof polpModalDraggableDirective], never, [typeof polpModalDraggableDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PolpDraggableModule>;
}

export { PolpDraggableModule, polpModalDraggableDirective };
//# sourceMappingURL=polpware-modal-directives.d.ts.map
