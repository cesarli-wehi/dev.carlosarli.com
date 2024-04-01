import { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export const routeMeta: RouteMeta = {
    title: 'Tutorials',
    data: {
        breadcrumb: 'Tutorials'
    }
};

@Component({
    standalone: true,
    imports: [RouterOutlet],
    template: `
    <div class="bg-gray-900 bg-gradient-to-b from-indigo-100/20 ">
        <div class="py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl text-center mb-5">
                    <h2 class="text-3xl font-bold text-white sm:text-4xl">Tutorials</h2>
                </div>
                    <router-outlet />
            </div>
        </div>
    </div>
  `,
})
export default class TutorialsPage { } 