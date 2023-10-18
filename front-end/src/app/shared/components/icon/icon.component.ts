import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() path: string = '';
  @Input() size!: { width: string; height: string };
  @Input() viewBox: string = '';
  @Input() fill: string = '';

  public link: string = '';

  ngOnInit(): void {
    this.link = `assets/pics/svg/${this.path}.svg#${this.path}`;
  }
}
