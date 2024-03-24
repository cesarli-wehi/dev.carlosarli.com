import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

interface Link {
  name: string;
  url: string;
}

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css'
})

export class NavMenuComponent {
  @Input() isMobile: boolean = false;
  public activeLink!: string; // Default active link
  private routerSubscription: Subscription;
  public links: Link[] = [
    { name: 'Home', url: '/' },
    { name: 'Tutorials', url: '/tutorials' },
  ];

  constructor(private router: Router) {
    this.activeLink = this.router.url;

    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)).subscribe(
        (event: any) => {
          this.activeLink = event.url;
        }
      );

    console.log(this.activeLink);
  }

  // Ensure to unsubscribe from the observable to avoid memory leaks
  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }


}
