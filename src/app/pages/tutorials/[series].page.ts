import { injectContentFiles } from '@analogjs/content';
import { RouteMeta } from '@analogjs/router';
import { DatePipe, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ITutorial } from 'src/app/models/iTutorial';

@Component({
  standalone: true,
  imports: [RouterLink, DatePipe, NgFor],
  template: `
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <article *ngFor="let tutorial of tutorials" class="flex flex-col items-start justify-between">
          <div class="relative w-full">
            <a [routerLink]="['/tutorials', seriesName, tutorial.slug]">
                <img src="{{tutorial.attributes.mainImage}}" alt="" class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]">
            </a>
            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
          </div>
          <div class="max-w-xl">
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-white">
                <a [routerLink]="['/tutorials', seriesName, tutorial.slug]">
                  <span class="absolute inset-0"></span>
                  {{tutorial.attributes.title }}
                </a>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-white">{{tutorial.attributes.description}}</p>
            </div>
            <div class="mt-8 flex items-center gap-x-4 text-xs">
              <time datetime="2020-03-16" class="text-white">{{tutorial.attributes.date | date: "dd/MM/yyyy" }}</time>
              <a [routerLink]="['/tutorials', seriesName]" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-primary-500 hover:bg-gray-100">{{tutorial.attributes.category}}</a>
              <div class="text-sm leading-6">
                <p class="font-semibold text-white">
                    {{tutorial.attributes.authorName}} {{tutorial.attributes.authorRole}}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
  `,
})
export default class DocsListComponent {
  private readonly route = inject(ActivatedRoute);

  readonly seriesName = this.route.snapshot.paramMap.get('series');

  readonly tutorials = injectContentFiles<ITutorial>((contentFile) => {
    return contentFile.filename.includes('tutorials/'+ this.seriesName)
  })
  .filter((tutorial) => !tutorial.filename.includes('index'))
  .sort((a, b) => (a.attributes.order < b.attributes.order ? -1 : 1));

}