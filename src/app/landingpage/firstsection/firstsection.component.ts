import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-firstsection',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './firstsection.component.html',
  styleUrl: './firstsection.component.scss'
})
export class FirstsectionComponent implements OnInit {
  lang: string = '';
  germanIsSelected: boolean = false;


  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
    this.germanIsSelected = this.lang === 'de';
    this.translateService.use(this.lang);
    this.translateService.onLangChange.subscribe((event) => {
      this.lang = event.lang;
      this.germanIsSelected = this.lang === 'de';
    });
  }

  changeLang(lang: any) {
    const selectedLanguage = lang.target.value;
    localStorage.setItem('lang', selectedLanguage);
    this.translateService.use(selectedLanguage);
    this.germanIsSelected = selectedLanguage === 'de';
  }


  handleClick() {
    let element = document.getElementById('my-contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
