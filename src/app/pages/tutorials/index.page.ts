import { injectContentFiles } from '@analogjs/content';
import { RouteMeta } from '@analogjs/router';
import { DatePipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IBlogPost } from 'src/app/models/iBlogPost';

@Component({
  standalone: true,
  imports: [RouterLink, DatePipe, NgFor],
  template: `
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <article *ngFor="let doc of docs" class="flex flex-col items-start justify-between">
          <div class="relative w-full">
            <a [routerLink]="['/tutorials', doc.slug]">
                <img src="{{doc.attributes.mainImage}}" alt="" class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]">
            </a>
            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
          </div>
          <div class="max-w-xl">
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-white">
                <a [routerLink]="['/tutorials', doc.slug]">
                  <span class="absolute inset-0"></span>
                  {{doc.attributes.title}}
                </a>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-white">{{doc.attributes.description}}</p>
            </div>
            <div class="mt-8 flex items-center gap-x-4 text-xs">
              <time datetime="2020-03-16" class="text-white">{{doc.attributes.date | date: "short" }}</time>
              <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-primary-500 hover:bg-gray-100">{{doc.attributes.category}}</a>
              <div class="text-sm leading-6">
                <p class="font-semibold text-white">
                    {{doc.attributes.authorName}} {{doc.attributes.authorRole}}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
  `,
})
export default class DocsListComponent {
  readonly docs = injectContentFiles<IBlogPost>((contentFile) =>
    contentFile.filename.includes('tutorials/')
  ).sort((a, b) => (a.attributes.date < b.attributes.date ? -1 : 1));
}