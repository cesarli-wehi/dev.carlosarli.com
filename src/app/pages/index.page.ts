import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="relative bg-white">
      <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div class="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <img class="h-11" src="/images/logo.webp" alt="Your Company">

            <h1 class="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">Welcome to my corner of the internet</h1>
            <p class="mt-6 text-lg leading-8 text-gray-600">Here I put teaching materials and tutorials that I use as part of my work with Technocamps.</p>
            <div class="mt-10 flex items-center gap-x-6">
              <a href="/tutorials" class="text-md font-semibold leading-6 text-primary-500">Go to the Tutorials <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
        <div class="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img class="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full" src="/images/homepage.webp" alt="">
        </div>
      </div>
  </div>
  `,
  styles: [],
})
export default class HomeComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
