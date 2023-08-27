import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { AlertService } from '../../services/alert.service';
import { Type } from '@interfaces/message.interface';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit, OnDestroy {
  private unSub!: Subscription;
  private delay: number = 5000;
  public text!: string;
  public type!: Type;
  public errorText!: string;

  constructor(public alertService: AlertService) {}
  ngOnInit(): void {
    this.unSub = this.alertService.alert$.subscribe((alert) => {
      console.log(alert);
      this.text = alert.text;
      this.type = alert.type;
      if (alert.errorText) {
        this.errorText = alert.errorText;
      }

      const timeout = setTimeout(() => {
        clearTimeout(timeout);
        this.text = '';
        this.errorText = '';
      }, this.delay);
    });
  }

  ngOnDestroy(): void {
    if (this.unSub) {
      this.unSub.unsubscribe();
    }
  }
}
