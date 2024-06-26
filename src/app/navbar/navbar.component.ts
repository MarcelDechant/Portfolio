import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  public languageDeSelected: boolean = false;
  languages = ['en', 'de'];
  

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    const storedLanguage = localStorage.getItem('language') || 'en';
    this.translateService.setDefaultLang(storedLanguage);
    this.translateService.use(storedLanguage);
    this.checkLanguageButton(storedLanguage);
  }


  changeLanguage(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('language', lang);
    this.checkLanguageButton(lang);
  }

  checkLanguageButton(lang: string) {
    this.languageDeSelected = lang === 'de';
  }

  setActive(event: Event) {
    let links = document.querySelectorAll('.right-side a, .dropdown-menu a');

    links.forEach((link) => {
      link.classList.remove('active');
    });

    (event.target as HTMLElement).classList.add('active');
    
  }
  
}
