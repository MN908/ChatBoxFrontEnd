import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from '../../Pages/messages/messages.component';
import { FormsModule } from '@angular/forms';
import { RoutingMessageModule } from './routing-message.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [MessagesComponent],
  imports: [
    CommonModule,
    FormsModule,
    RoutingMessageModule,
    NgbModule
  ]
})
export class MessageModule { }
