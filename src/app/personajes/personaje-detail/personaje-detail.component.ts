import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personaje } from 'src/app/models/personaje.model';
import { PersonajesService } from 'src/app/servicios/personajes.service';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';

@Component({
  selector: 'app-personajes-detail',
  templateUrl: './personaje-detail.component.html',
  styleUrls: ['./personaje-detail.component.css']
})
export class PersonajesDetailComponent implements OnInit {

  id: any;
  personaje: Personaje = {
    name: '',
    gender: '',
    species: '',
    location: {name: ''},
    image: ''
  };

  constructor(private personajesService: PersonajesService, private _route: ActivatedRoute, private token: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if(!this.token.getToken())
    {
      this.router.navigate(['login']);
    }
    if(this.token.getUser().role != 'admin')
    {
      this.router.navigate(['personajes']);
    }

    this.id = this._route.snapshot.paramMap.get('id');

    this.personajesService.get(this.id).subscribe(result => {
      this.personaje = result;
    },
    error => {
      console.log("Problemas");
    });
  }

}
