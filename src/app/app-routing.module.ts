import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1/tab1.page';
import { Tab2Page } from './tab2/tab2.page';

const routes: Routes = [
  { path: '', redirectTo: '/tab1', pathMatch: 'full' }, // Rota padrão
  { path: 'tab1', component: Tab1Page },
  { path: 'tab2', component: Tab2Page },  // Rota para tab2
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
