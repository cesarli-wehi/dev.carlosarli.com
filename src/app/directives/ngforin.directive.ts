import {
  Directive, TemplateRef, Input, ChangeDetectorRef, ViewContainerRef,
  IterableDiffers, OnChanges, SimpleChanges, SimpleChange
} from '@angular/core';
import { NgForOf, NgForOfContext } from "@angular/common";

@Directive({
  selector: '[ngFor][ngForIn]'
})
export class NgForIn extends NgForOf<any> implements OnChanges {

  @Input() ngForIn: any;

  constructor(viewContainer: ViewContainerRef,
              template: TemplateRef<NgForOfContext<any>>,
              differs: IterableDiffers,
              cdr: ChangeDetectorRef) {

    super(viewContainer, template, differs, cdr);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('ngForIn' in changes) {
      this.ngForOf = Object.keys(this.ngForIn);

      const currentValue: any[] = Object.keys(changes['ngForIn'].currentValue);
      const previousValue: any[] = Object.keys(changes['ngForIn'].previousValue);
      changes['ngForOf'] =  new SimpleChange(previousValue, currentValue);

      super.ngOnChanges(changes);
    }
  }

}
