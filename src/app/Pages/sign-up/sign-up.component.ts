import { Component } from '@angular/core';
import { Sample } from '../../Data/Entities/Sample';
import { SignInFormData } from '../../Data/Entities/signin';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  
  public userData: Sample[] = [];
  UserData: SignInFormData = new SignInFormData();
  constructor(private http: HttpClient, private userService: UserService , private router : Router) { }

  ngOnInit(): void {

  }

  onSubmit() {

    this.userService.createUser(this.UserData).subscribe(
      (result) => {

        this.userData = result;

        this.router.navigate(['/SignIn']);
      },
      (error) => {
        console.error(error);
      }
    );
    
    this.UserData.username = '';
    this.UserData.password = '';
  }
}
