import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-myskill',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './myskill.component.html',
  styleUrl: './myskill.component.scss'
})
export class MyskillComponent {
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
