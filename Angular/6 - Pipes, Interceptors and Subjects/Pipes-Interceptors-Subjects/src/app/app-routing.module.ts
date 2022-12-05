import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  }
];

// preloadingStrategy:  PreloadAllModules --- Load all modules (and all lazy loading ones)!!!

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy:  PreloadAllModules, enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
