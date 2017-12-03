
import { Routes, RouterModule } from '@angular/router';  
import { GamesBoxComponent } from './games-setup/components/games-box.component';

const routes: Routes = [  
  { path: '', pathMatch: 'full', redirectTo: 'games-setup' },
  { path: 'games-setup', component: GamesBoxComponent }
];

export const routing = RouterModule.forRoot(routes);