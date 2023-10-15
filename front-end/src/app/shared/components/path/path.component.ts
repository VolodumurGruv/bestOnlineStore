import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-path',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.scss'],
})
export class PathComponent implements OnInit {
  @Input() paths: UrlSegment[] = [];

  private readonly route = inject(ActivatedRoute);

  ngOnInit(): void {
    console.log(this.paths);
    this.route.url
      .pipe(
        map((url: UrlSegment[]) => {
          if (url.length === 3) {
            return (this.paths = url.slice(0, 2));
          }

          return (this.paths = url);
        })
      )
      .subscribe();
  }
}
