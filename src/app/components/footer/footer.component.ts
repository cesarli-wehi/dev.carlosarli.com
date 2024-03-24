import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public currentYear!: number;
  public facebookLink: string = 'https://www.facebook.com/Technocamps';
  public instagramLink: string = 'https://www.instagram.com/Technocamps';
  public twitterLink: string = 'https://twitter.com/Technocamps';
  public githubLink: string = 'https://github.com/csTechnocamps';
  public youtubeLink: string = 'https://www.youtube.com/channel/UCTHlHvYfBlMiYrFeGThd0KA';

  constructor() {
    this.currentYear = new Date().getFullYear();
  }

}
