import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBreadcrumb } from '../models/iBreadcrumb';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  constructor() { }

  buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
    // Check if the route configuration exists and has a path
    if (route.routeConfig && route.routeConfig.path !== '') {
      const routePath = route.routeConfig.path;
      let fullPath = '';
      // Handle dynamic routes
      if (routePath?.startsWith(':')) {
        const params = Object.entries(route.snapshot.params);
        for (const [key, value] of params) {
          let fullPath = url + `/${value}`;
          // Prevent duplicating breadcrumbs
          if (!breadcrumbs.some(bc => bc.url === fullPath)) {
            breadcrumbs.push({ label: this.extractLabelFromUrl(fullPath), url: fullPath });
          }
          url = fullPath; // Update the URL for the next parameter
        }
      } else {
        fullPath = url + `/${routePath}`;
        // Prevent duplicating breadcrumbs
        if (!breadcrumbs.some(bc => bc.url === fullPath)) {
          breadcrumbs.push({ label: this.extractLabelFromUrl(fullPath), url: fullPath });
        }
      }

      // Prevent duplicating breadcrumbs
      if (!breadcrumbs.some(bc => bc.url === fullPath)) {
        // Attempt to get the breadcrumb label from the route data
        let breadcrumbLabel = route.snapshot.data['breadcrumb'];
        // If not defined, extract the label from the URL
        if (!breadcrumbLabel) {
          breadcrumbLabel = this.extractLabelFromUrl(fullPath);
          console.log(`Breadcrumb label generated from URL: ${breadcrumbLabel}`);
        }
        // Only add the breadcrumb if the label is not 'Home'
        if (breadcrumbLabel !== 'Home') {
          breadcrumbs.push({ label: breadcrumbLabel, url: fullPath });
        }
      }
    }

    // Recursively add breadcrumbs for child routes
    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, url + '/' + (route.routeConfig ? route.routeConfig.path : ''), breadcrumbs);
    } else {
      // Cleanup any duplicated slashes
      breadcrumbs = breadcrumbs.map(bc => {
        return { label: bc.label, url: bc.url.replace(/\/\/+/g, '/') };
      });
      console.log(breadcrumbs)
      return breadcrumbs;
    }
  }

  private extractLabelFromUrl(url: string | undefined): string {
    const parts = url?.split('/');
    let lastPart = parts?.pop() || 'Home'; // Use the last part as the label or 'Home' as a fallback
    // Capitalize the first letter of the last part and return
    // remove hyphens and capitalize first letter of each word
    lastPart = lastPart.replace(/-/g, ' '); // Remove hyphens
    lastPart = lastPart.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); // Capitalize the first letter of each word
    return lastPart.charAt(0).toUpperCase() + lastPart.slice(1);
  }

}
