import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBreadcrumb } from '../models/iBreadcrumb';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  constructor() {}

  buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
    if (route.routeConfig && route.routeConfig.path !== '') {
      // Avoid adding a breadcrumb for the root path
      const routePath = route.routeConfig.path;
      // Handle dynamic routes
      let path = routePath?.startsWith(':') ? route.snapshot.params[routePath.substring(1)] : routePath;
      let fullPath = url + `/${path}`;

      // Prevent duplicating breadcrumbs
      if (!breadcrumbs.some(bc => bc.url === fullPath)) {
        const breadcrumbLabel = route.snapshot.data['breadcrumb'] ? route.snapshot.data['breadcrumb'] : this.extractLabelFromUrl(fullPath);
        breadcrumbs.push({ label: breadcrumbLabel, url: fullPath });
      }
    }

    if (route.firstChild) {
      // Recursively add breadcrumbs for child routes
      return this.buildBreadCrumb(route.firstChild, url + '/' + (route.routeConfig ? route.routeConfig.path : ''), breadcrumbs);
    } else {
      // Cleanup any duplicated slashes
      breadcrumbs = breadcrumbs.map(bc => {
        return { label: bc.label, url: bc.url.replace(/\/\/+/g, '/') };
      });
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
