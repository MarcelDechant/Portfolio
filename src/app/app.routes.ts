import { Routes } from '@angular/router';
import { AboutmeComponent } from './landingpage/aboutme/aboutme.component';
import { FirstsectionComponent } from './landingpage/firstsection/firstsection.component';
import { MyskillComponent } from './landingpage/myskill/myskill.component';
import { PortfoliosectionComponent } from './landingpage/portfoliosection/portfoliosection.component';
import { ContactComponent } from './landingpage/contact/contact.component';

export const routes: Routes = [
    { path: 'Aboutme', component: AboutmeComponent },
    { path: 'Firstsection', component: FirstsectionComponent },
    { path: 'Myskill', component: MyskillComponent },
    { path: 'Portfoliosection', component: PortfoliosectionComponent },
    { path: 'Contact', component: ContactComponent },
];
