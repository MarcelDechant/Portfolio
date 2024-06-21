import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { FirstsectionComponent } from './firstsection/firstsection.component';
import { MyskillComponent } from './myskill/myskill.component';
import { PortfoliosectionComponent } from './portfoliosection/portfoliosection.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule, RouterOutlet,AboutmeComponent,FirstsectionComponent,MyskillComponent,PortfoliosectionComponent,ContactComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

}
