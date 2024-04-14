import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { TimelineComponent } from './timeline/timeline.component';

export const routes: Routes = [
  { path: 'projects', component: ProjectsComponent},
  { path: 'timeline', component: TimelineComponent}
];
