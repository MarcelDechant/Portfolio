import { Component, OnInit } from '@angular/core';
import{ ContactFormComponent} from './contact-form/contact-form.component'
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent,TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  lang: string = '';
  germanIsSelected: boolean = false;


  constructor(private translateService: TranslateService) {}

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



  goUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
