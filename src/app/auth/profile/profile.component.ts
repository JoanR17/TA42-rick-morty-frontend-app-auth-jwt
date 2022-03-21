import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;
  tokenAcc: any;

  constructor(private token: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if(!this.token.getToken())
    {
      this.router.navigate(['login']);
    }
    this.tokenAcc = this.token.getToken();
    this.currentUser = this.token.getUser();
  }

}
