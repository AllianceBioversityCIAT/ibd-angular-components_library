import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AllComponent } from './pages/form-elements/all/all.component';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path:'getting-started',
    loadChildren: () => import('./pages/getting-started/getting-started.module').then((m) => m.GettingStartedModule),
  },
  {
    path:'all',
    loadChildren: () => import('./pages/form-elements/all/all.module').then((m) => m.AllModule),
  },
  {
    path:'textarea',
    loadChildren: () => import('./pages/form-elements/textarea/textarea.module').then((m) => m.TextareaModule),
  },
  {
    path:'save-button',
    loadChildren: () => import('./pages/form-elements/save-button/save-button.module').then((m) => m.SaveButtonModule),
  },
  {
    path:'simple-text',
    loadChildren: () => import('./pages/form-elements/simple-text/simple-text.module').then((m) => m.SimpleTextModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
