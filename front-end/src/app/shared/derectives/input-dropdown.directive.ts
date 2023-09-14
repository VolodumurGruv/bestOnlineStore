import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appInputDropdown]',
  standalone: true,
})
export class InputDropdownDirective {
  @Input() addresses!: any;
}
