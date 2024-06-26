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
        gitRepositories: '',
        liveTest: '',
        title: 'Join',
        description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        usedLanguage: 'HTML | CSS | JavaScript',
        showInfo: false
      },
      {
        coverImg: 'Pollo loco.png',
        bgImage: 'pollo loco2.png',
        gitRepositories: '',
        liveTest: '',
        title: 'Ell Pollo Loco',
        description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
        usedLanguage: 'HTML | CSS | JavaScript',
        showInfo: false
      },
      {
        coverImg: 'Pokedex.png',
        bgImage: 'pokedex2.png',
        gitRepositories: '',
        liveTest: '',
        title: 'Pokedex',
        description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
        usedLanguage: 'JavaScript | HTML | CSS | API',
        showInfo: false
      }
      
    ];
  }
}