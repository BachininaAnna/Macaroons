import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[BackgroundColorBtn]'
})
export class BackgroundColorBtnDirective implements OnInit{
  private _backgroundColor: string = '';
  @HostBinding('style.background')
  get getBackgroundColor(){
    return this._backgroundColor;
  }
  private newBGColor = 'rgb(215, 72, 92)';
  private defaultBGColor = this._backgroundColor;
  private newBGHoverColor = 'rgb(119, 10, 29)';

  @HostListener('mouseenter')
  onHover(){
    this.el.nativeElement.style.background = this.newBGHoverColor;
  }
  @HostListener('mouseleave')
  outHover(){
    this.el.nativeElement.style.background = this.defaultBGColor;
  }

  constructor(private el: ElementRef) { }

  ngOnInit(){
     this._backgroundColor = this.newBGColor;
  }
}
