import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDirective]'
})

export class DirectiveClass {
    @HostBinding('class.Active') isActive: boolean = false;

    @HostListener('mouseover') mouseOver() {
        console.log('Mouse Over');
        this.el.nativeElement.style.color = 'blue';
        this.isActive = true
    }
    @HostListener('mouseleave') mouseLeave() {
        this.isActive = false
    }
    constructor(private el: ElementRef, private renderer: Renderer2) {
        // el.nativeElement.style.color = 'red';
        renderer.setStyle(el.nativeElement, 'color', 'green')
    }
    // new example 

    PossibolColors = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green',
        'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red',
        'silver', 'teal', 'white', 'yellow'];

    // @HostBinding('style.color') color: string;
    @HostBinding('style.backgroundColor') backgroundColor: string;
    @HostBinding('style.border-color') borderColor: string;
    @HostListener('keyup') keyup() {
        const indexColor = Math.floor(Math.random() * this.PossibolColors.length)
         this.backgroundColor= this.borderColor = this.PossibolColors[indexColor]
    }
}