import { Component, Input, OnInit } from '@angular/core';
import { HomeComponent } from './../home/home.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Input() sideNavStatus: boolean = false;

  list = [
    {
      number: '1',
      name: 'home',
      icon: 'fa-solid fa-house',
      url: 'https://www.utleon.edu.mx/zonas'
    },
    {
      number: '2',
      name: '¿Quienes Somos?',
      icon: 'fa-solid fa-users',
      url: 'https://www.utleon.edu.mx/historia'
    },
    {
      number: '3',
      name: 'Mensaje Institucional',
      icon: 'fa-solid fa-bullhorn',
      url: 'https://www.utleon.edu.mx/rectora-libre'
    },
    {
      number: '4',
      name: 'Noticias',
      icon: 'fa-solid fa-newspaper',
      url: 'https://www.utleon.edu.mx/zona-libre'
    },
    {
      number: '5',
      name: 'Biblioteca Digital',
      icon: 'fa-solid fa-book-open-reader',
      url: 'https://www.utleon.edu.mx/biblioteca-digital'
    },
    {
      number: '6',
      name: 'Normativa',
      icon: 'fa-solid fa-scale-balanced',
      url: 'https://www.utleon.edu.mx/politicas-lineamientos'
    },
    {
      number: '7',
      name: '¿Quieres Trabajar en UTL?',
      icon: 'fa-solid fa-briefcase',
      url: 'https://sito.utleon.edu.mx/jsp/reclutamiento/muestra_convocatoria_general.jsp'
    },
    {
      number: '8',
      name: 'Transparencia',
      icon: 'fa-solid fa-eye',
      url: 'https://www.utleon.edu.mx/obligaciones-transparencia'
    },
    {
      number: '9',
      name: 'Calendario',
      icon: 'fa-regular fa-calendar',
      url: 'https://www.utleon.edu.mx/resource/img/CALENDARIO%20LE%C3%93N__.jpg'
    },
    {
      number: '10',
      name: 'Sito',
      icon: 'fa-solid fa-globe',
      url: 'https://sito.utleon.edu.mx/'
    },
  ];

  constructor() { }

  ngOnInit(): void {

  }
}
