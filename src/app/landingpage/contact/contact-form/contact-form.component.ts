import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule, RouterModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  lang: string = '';
  germanIsSelected: boolean = false;


  constructor(private translateService: TranslateService) { }
  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    terms: false
  };
  emailSent = false;

  post = {
    endPoint: 'https://marcel-dechant.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            this.showEmailSentMessage();
          },
        });
    } else if (ngForm.submitted && ngForm.form.valid) {

      ngForm.resetForm();
    }
  }
  showEmailSentMessage() {
    this.emailSent = true;
    setTimeout(() => {
      this.emailSent = false;
    }, 2000);
  }


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
}