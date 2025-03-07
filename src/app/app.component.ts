import { Component } from '@angular/core';
import { TokenStorageService } from './servicios/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  username?: string;

  constructor (private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void
  {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if(this.isLoggedIn)
    {
      const user = this.tokenStorageService.getUser();
      this.roles = user.role;

      this.showAdminBoard = this.roles.includes('admin');

      this.username = user.username;
    }
  }

  logout(): void
  {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
