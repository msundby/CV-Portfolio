import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ProjectsComponent } from './projects/projects.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FrontpageComponent, ProjectsComponent, TimelineComponent, AboutmeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cv-portfolio';

}
