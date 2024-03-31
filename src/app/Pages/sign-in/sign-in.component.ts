import { Component } from '@angular/core';
import { Sample } from '../../Data/Entities/Sample';
import { SignInFormData } from '../../Data/Entities/signin';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  public userData: Sample[] = [];
  formData: SignInFormData = new SignInFormData();
  public isLoginSuccess: boolean = false;
  public token: string = "";

  constructor(
    private http: HttpClient,
    private userService: UserService ,
    private router : Router,
    private cookieService: CookieService
    ) { }

  ngOnInit(): void {

  }

  onSubmit() {

    this.userService.getUser(this.formData.username, this.formData.password).subscribe(

      (result : any)  => {

        if (result.token) {
          console.log('Logined!', result.token);
          this.cookieService.set('token', result.token);
          this.cookieService.set('LoginedUserId', result.id);
          this.cookieService.set('LoginedUserName', result.userName);
          this.formData.username = '';
          this.formData.password = '';
          this.isLoginSuccess = true;
          this.router.navigate(['/messages']);
        }
        else {
          this.isLoginSuccess = true;
        }
        
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
