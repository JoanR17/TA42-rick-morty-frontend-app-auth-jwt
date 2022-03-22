import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  msg = '';
  rol: string = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if(this.tokenStorage.getToken())
    {
      this.isLoggedIn = true;
      this.rol = this.tokenStorage.getUser().role;
    }
  }

  onSubmit(): void
  {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(data => {
      this.tokenStorage.saveToken(data.token);


      //No funciona
      this.authService.usuario(username).subscribe(result => {
        this.tokenStorage.saveUser(result);
      },
      err => {
        console.log(err.message);
      });

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.rol = this.tokenStorage.getUser().role;
      window.location.reload();
    },
    err => {
      this.errorMessage = err.message;
      this.isLoginFailed = true;
    });
  }

}
