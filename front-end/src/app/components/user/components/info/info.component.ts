import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ContactUsComponent } from '@shared/components/icons/contact-us/contact-us.component';
import { InfoFormComponent } from '@shared/components/info-form/info-form.component';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [ContactUsComponent, InfoFormComponent],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  private readonly router = inject(Router);

  @Output() setupInitialValue = new EventEmitter<any>();

  cancel(event: any) {
    this.setupInitialValue.emit(event);
  }

  redirectToContact() {
    this.router.navigate(['/about/contact']);
  }
}
