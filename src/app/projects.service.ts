import { Injectable } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

    constructor(private translate: TranslateService) { }

    getProjects() {
        const joinDescription = this.translate.instant('portfolio.join');

    return [
      {
        coverImg: 'Join.png',
        bgImage: 'join2.png',
        gitRepositories: 'https://github.com/MarcelDechant/Join',
        liveTest: 'https://join.marcel-dechant.de/',
        title: 'Join',
        usedLanguage: 'HTML | CSS | JavaScript',
        showInfo: false
      },
      {
        coverImg: 'Pollo loco.png',
        bgImage: 'pollo loco2.png',
        gitRepositories: 'https://github.com/MarcelDechant/El-Pollo-Loco',
        liveTest: 'https://el-pollo-loco.marcel-dechant.de/',
        title: 'Ell Pollo Loco',
        usedLanguage: 'HTML | CSS | JavaScript',
        showInfo: false
      },
      {
        coverImg: 'Pokedex.png',
        bgImage: 'pokedex2.png',
        gitRepositories: 'https://github.com/MarcelDechant/Pokedex',
        liveTest: 'https://pokedex.marcel-dechant.de/',
        title: 'Pokedex',
        usedLanguage: 'JavaScript | HTML | CSS | API',
        showInfo: false
      }
      
    ];
  }
}