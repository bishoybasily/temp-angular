import {
  ComponentFactory,
  ComponentFactoryResolver,
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {DisabledComponent} from './disabled/disabled.component';


@Directive({
  selector: '[appDisablable]'
})
export class DisablableDirective implements OnInit, OnDestroy {

  factory: ComponentFactory<DisabledComponent>;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private componentResolver: ComponentFactoryResolver) {

    this.factory = this.componentResolver.resolveComponentFactory(DisabledComponent);

  }

  @Input() set appDisablable(disabled: boolean) {

    if (disabled) {
      this.viewContainer.createComponent(this.factory);
    } else {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
    }

    // if (disabled) {
    //   this.viewContainer.createEmbeddedView(this.templateRef);
    // } else {
    //   this.viewContainer.clear();
    // }

  }

  ngOnInit(): void {
    // this.viewContainer.createEmbeddedView(this.templateRef);

    // this.componentResolver.resolveComponentFactory()
    //
    // let innerHTML = '<div>Hello</div>';
    // let nativeElement = this.templateRef.elementRef.nativeElement;
    //
    // console.log(nativeElement)
    //
    // nativeElement.innerHTML = innerHTML;
    // this.renderer.setProperty(nativeElement, 'innerHTML', innerHTML);

  }

  ngOnDestroy(): void {
  }

}
