import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personaje } from 'src/app/models/personaje.model';
import { PersonajesService } from 'src/app/servicios/personajes.service';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';

@Component({
  selector: 'app-personajes-list',
  templateUrl: './personaje-list.component.html',
  styleUrls: ['./personaje-list.component.css']
})
export class PersonajesListComponent implements OnInit {

  personajes?: Personaje[];

  constructor(private personajesService: PersonajesService, private token: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if(!this.token.getToken())
    {
      this.router.navigate(['login']);
    }

    this.personajesService.getAll().subscribe(result => {
      this.personajes = result;
    },
    error => {
      console.log("Problemas");
    });
  }

}
