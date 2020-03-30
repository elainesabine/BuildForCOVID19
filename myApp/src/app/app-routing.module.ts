import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    //might be broken tbh who knows
    path:'tab3',
    children: [
      {
        path: '',
        loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
      },
      {
        path: ':title',
        loadChildren: () => import('./tab3/article/article.module').then( m => m.ArticlePageModule)
      }
    ]
  },
  {
    path: 'article',
    loadChildren: () => import('./tab3/article/article.module').then( m => m.ArticlePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
