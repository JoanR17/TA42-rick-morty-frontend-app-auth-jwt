import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../servicios/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private token: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if(!this.token.getToken())
    {
      this.router.navigate(['login']);
    }
  }

}
