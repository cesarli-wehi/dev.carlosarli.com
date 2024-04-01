import { injectContentFiles } from '@analogjs/content';
import { RouteMeta } from '@analogjs/router';
import { DatePipe, KeyValuePipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ITutorial } from 'src/app/models/iTutorial';
import { ITutorialCategory } from 'src/app/models/iTutorialCategory';

@Component({
  standalone: true,
  imports: [RouterLink, DatePipe, KeyValuePipe],
  template: `
  <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
    @for (tutorial of tutorials | keyvalue; track tutorial.key){
      <article class="relative isolate flex flex-col gap-8 lg:flex-row">
          <div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
            <img src="{{tutorial.value.categoryImage}}" alt="" class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover">
            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
          </div>
          <div>
            <div class="flex items-center gap-x-4 text-xs">
              <p class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{tutorial.value.numberOfTutorials - 1}} Tutorials</p>
            </div>
            <div class="group relative max-w-xl">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-secondary-500 group-hover:text-secondary-600">
                <a [routerLink]="['/tutorials', tutorial.key.toLowerCase()]">
                  <span class="absolute inset-0"></span>
                  {{tutorial.value.title}}
                </a>
              </h3>
              <p class="mt-5 text-sm leading-6 text-primary-200">
                {{tutorial.value.description}}
              </p>
            </div>
            <div class="mt-6 flex border-t border-gray-900/5 pt-6">
              <div class="relative flex items-center gap-x-4">
                <img src="{{tutorial.value.authorImage}}" alt="" class="h-10 w-10 rounded-full bg-gray-50">
                <div class="text-sm leading-6">
                  <p class="font-semibold text-secondary-400">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      {{tutorial.value.authorName}}
                    </a>
                  </p>
                  <p class="text-primary-300">
                    {{tutorial.value.authorRole}}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
    }
  </div>
  `,
})
export default class TutorialCategoryListComponent {
  readonly tutorials = injectContentFiles<ITutorial>((contentFile) =>
    contentFile.filename.includes('tutorials/')
  ).reduce((categories, tutorial) => {
    const category = tutorial.attributes.category;
    if (!categories[category]) {
      categories[category] = {
        title: '',
        categoryImage: '',
        authorImage: '',
        authorName: '',
        authorRole: '',
        slug: '',
        description: '',
        numberOfTutorials: 0
      };
    }
    if (tutorial.filename.includes('index')) {
      categories[category] = {
        title: tutorial.attributes.title,
        categoryImage: tutorial.attributes.categoryImage,
        authorImage: tutorial.attributes.authorImage,
        authorName: tutorial.attributes.authorName,
        authorRole: tutorial.attributes.authorRole,
        slug: tutorial.attributes.slug,
        description: tutorial.attributes.description,
        numberOfTutorials: categories[category].numberOfTutorials
      };
    } else {
      categories[category].numberOfTutorials += 1;
    }
    return categories;
  }, {} as Record<string, ITutorialCategory>);
}