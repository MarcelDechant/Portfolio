import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
    { path: '', component: LandingpageComponent },
    { path: 'impressum', component: ImpressumComponent },
    { path: 'privacy', component: PrivacyComponent },
];
