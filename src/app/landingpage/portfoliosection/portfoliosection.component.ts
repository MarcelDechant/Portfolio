import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ProjectsService } from '../../projects.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfoliosection',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './portfoliosection.component.html',
  styleUrls: ['./portfoliosection.component.scss']
})
export class PortfoliosectionComponent implements OnInit {

  projectArray: any;
  cover: string = 'project';
  info: string = 'hover-info';
  hide: string = 'd-none';

  constructor(private projectsService: ProjectsService, private translate: TranslateService) { }

  ngOnInit() {
    this.projectArray = {
      hoverInfo: this.projectsService.getProjects()
    };
  }

  getSpanText(title: string): string {
    switch (title) {
      case 'Join':
        return this.translate.instant('portfolio.join');
      case 'Ell Pollo Loco':
        return this.translate.instant('portfolio.epl');
        case 'Pokedex':
        return this.translate.instant('portfolio.pokedex');
      default:
        return 'Standardtext für Projekte';
    }
  }
}