import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'disabled',
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload'
  //useHash: true
};
const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'work', component: WorkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
