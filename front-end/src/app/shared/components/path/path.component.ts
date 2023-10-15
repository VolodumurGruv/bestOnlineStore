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
  // paths: UrlSegment[] = [];
  paths: { path: string }[] = [];

  private readonly route = inject(ActivatedRoute);
  private catalogs: Category[] = mainCategories;
  category!: Category[];
  subcategory!: any;

  ngOnInit(): void {
    this.route.url
      .pipe(
        map((url: UrlSegment[]) => {
          this.category = this.catalogs.filter(
            (item) => item.routerLink == url[0].path
          );

          this.subcategory = this.category[0].subcategories?.filter(
            (item) => item.routerLink == url[1].path
          );

          this.paths.push({ path: this.category[0].name });
          this.paths.push({ path: this.subcategory[0].name });
          console.log(this.paths);
          console.log(url);

          return this.paths;
        })
      )
      .subscribe();
  }
}
import { mainCategories } from '@interfaces/catalog.data';
import { Category } from '@interfaces/catalog.interface';
