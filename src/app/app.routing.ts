
import { Routes, RouterModule } from '@angular/router';  
import { SportsBoxComponent } from './sports/components/sports-box.component';

const routes: Routes = [  
  { path: '', pathMatch: 'full', redirectTo: 'sports' },
  { path: 'sports', component: SportsBoxComponent }
];

export const routing = RouterModule.forRoot(routes);