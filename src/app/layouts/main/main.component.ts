import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterModule } from '@angular/router';
import { BreadcrumbsComponent } from "../../components/breadcrumbs/breadcrumbs.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [NavbarComponent, FooterComponent, RouterModule, BreadcrumbsComponent]
})
export class MainComponent {

}
