import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
}

@Component({
  standalone: true,
  imports: [MarkdownComponent, AsyncPipe, NgIf],
  template: `
    <ng-container *ngIf="post$ | async as post">
    <div
      class="prose dark:prose-invert
      prose-h1:font-bold prose-h1:text-xl prose-p:text-justify prose-img:rounded-xl max-w-full">
      <analog-markdown [content]="post.content" class=""></analog-markdown>
    </div>   
    </ng-container>
  `,
  styles: ``
})
export default class DocsPostComponent {
  private readonly route = inject(ActivatedRoute);

  readonly seriesName = this.route.snapshot.paramMap.get('series');
  
  readonly post$ = injectContent<PostAttributes>({
    param: 'slug',
    subdirectory: `tutorials/${this.seriesName}`
  });
}