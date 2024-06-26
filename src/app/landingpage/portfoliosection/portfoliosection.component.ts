import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectsService } from '../../projects.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfoliosection',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './portfoliosection.component.html',
  styleUrl: './portfoliosection.component.scss'
})
export class PortfoliosectionComponent implements OnInit {

  projectArray: any;
  cover:string = 'project';
  info:string = 'hover-info';
  hide:string = 'd-none';


  constructor(private projectsService: ProjectsService) { }


  ngOnInit() {
    this.projectArray = {
      hoverInfo: this.projectsService.getProjects() 
    };
  }
}
