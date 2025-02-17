import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
} from '@angular/router';
import { algorithms, algorithmsArray } from '@const/algorithms';
import { Algorithm } from '@type/algorithm';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.sass',
})
export class NavBarComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  algorithm?: Algorithm;

  ngOnInit(): void {
    this.router.events.subscribe({
      next: (event) => {
        if (event instanceof NavigationEnd) {
          if (event.url.startsWith('/algorithm/')) {
            const urlId = event.url.replace('/algorithm/', '');

            if (urlId in algorithms)
              this.algorithm = algorithmsArray.find((a) => a.id === urlId);
          } else {
            this.algorithm = undefined;
          }
        }
      },
    });
  }

  get category() {
    return this.algorithm?.category;
  }

  print() {
    window.print();
  }
}
