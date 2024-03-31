import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from '../../Pages/messages/messages.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MessagesComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RoutingMessageModule { }
