import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/models/personaje.model';
import { PersonajesService } from 'src/app/servicios/personajes.service';
import faker from '@faker-js/faker';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';

@Component({
  selector: 'app-add-personaje',
  templateUrl: './add-personaje.component.html',
  styleUrls: ['./add-personaje.component.css']
})
export class AddPersonajeComponent implements OnInit {

  personaje: Personaje = {
    name: '',
    gender: '',
    species: '',
    location: '',
    image: ''
  };
  submitted = false;

  constructor(private personajeService: PersonajesService, private token: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if(!this.token.getToken())
    {
      this.router.navigate(['login']);
    }
    if(this.token.getUser().role != 'admin')
    {
      this.router.navigate(['personajes']);
    }
  }

  savePersonaje(): void
  {
    const data = {
      name: this.personaje.name,
      gender: this.personaje.gender,
      species: this.personaje.species,
      location: this.personaje.location,
      image: faker.image.image()
    };

    this.personajeService.create(data).subscribe(response => {
      console.log(response);
      this.submitted = true;
    },
    error => {
      console.log(error);
    });
  }

  newPersonaje(): void
  {
    this.submitted = false;
    this.personaje = {
      name: '',
      gender: '',
      species: '',
      location: '',
      image: ''
    }
  }
}
