import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingSignInModule } from './routing-sign-in.module';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from '../../Pages/sign-in/sign-in.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    FormsModule,
    RoutingSignInModule,
    NgbModule
  ]
})
export class SignInModule { }
