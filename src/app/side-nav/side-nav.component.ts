import { Component, Input, OnInit } from '@angular/core';

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
      url: 'home'
    },
    {
      number: '2',
      name: '¿Quienes Somos?',
      icon: 'fa-solid fa-users',
      url: '../aspirantes/aspirantes.component.html'
    },
    {
      number: '3',
      name: 'Mensaje Institucional',
      icon: 'fa-solid fa-bullhorn',
    },
    {
      number: '4',
      name: 'Noticias',
      icon: 'fa-solid fa-newspaper',
    },
    {
      number: '5',
      name: 'Biblioteca Digital',
      icon: 'fa-solid fa-book-open-reader',
    },
    {
      number: '6',
      name: 'Normativa',
      icon: 'fa-solid fa-scale-balanced',
    },
    {
      number: '7',
      name: '¿Quieres Trabajar en UTL?',
      icon: 'fa-solid fa-briefcase',
    },
    {
      number: '8',
      name: 'Transparencia',
      icon: 'fa-solid fa-eye',
    },
    {
      number: '9',
      name: 'Calendario',
      icon: 'fa-regular fa-calendar',
      url: ''
    },
    // {
    //   number: '10',
    //   name: 'Sito',
    //   icon: 'fa-solid fa-browser',
    //   url: 'https://sito.utleon.edu.mx/'
    // },
  ];
  
  constructor() { }

  ngOnInit(): void {
      
  }
}
