import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Implementation of Lazy-Loading features in Angular (Enhance website performance)
  // { path: '', redirectTo: '/home', pathMatch: 'full'}, // {{ Default Route }}
  { path: '', redirectTo: '/about', pathMatch: 'full'},
  { path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule) }, 
  { path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule) }, 
  // { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) }, 
  { path: 'portfolio', loadChildren: () => import('./modules/portfolio/portfolio.module').then(m => m.PortfolioModule) }, 
  { path: 'portfolio-detail/:pid', loadChildren: () => import('./modules/portfolio-detail/portfolio-detail.module').then(m => m.PortfolioDetailModule) }, 
  // { path: 'resume', loadChildren: () => import('./modules/resume/resume.module').then(m => m.ResumeModule) }, 
  // { path: 'service', loadChildren: () => import('./modules/service/service.module').then(m => m.ServiceModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
