import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-firstsection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './firstsection.component.html',
  styleUrl: './firstsection.component.scss'
})
export class FirstsectionComponent {








  handleClick() {
    let element = document.getElementById('my-contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
