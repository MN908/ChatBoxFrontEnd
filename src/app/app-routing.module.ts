import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'SignIn', pathMatch: 'full' },
  { path: 'SignIn', loadChildren: () => import('./Modules/sign-in/sign-in.module').then(m => m.SignInModule) },
  { path: 'messages', loadChildren: () => import('./Modules/message/message.module').then(m => m.MessageModule) },
  { path: 'SignUp', loadChildren: () => import('./Modules/sign-up/sign-up.module').then(m => m.SignUpModule) }
];

@NgModule({
  imports: [CommonModule ,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
