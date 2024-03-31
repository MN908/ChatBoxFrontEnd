import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingSignUpModule } from './routing-sign-up.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignUpComponent } from '../../Pages/sign-up/sign-up.component';



@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    FormsModule,
    RoutingSignUpModule,
    NgbModule
    
  ]
})
export class SignUpModule { }
