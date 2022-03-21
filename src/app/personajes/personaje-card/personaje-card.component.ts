import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personaje-card',
  templateUrl: './personaje-card.component.html',
  styleUrls: ['./personaje-card.component.css']
})
export class PersonajeCardComponent implements OnInit {

  @Input() personaje: any;

  constructor() { }

  ngOnInit(): void {
  }

}
