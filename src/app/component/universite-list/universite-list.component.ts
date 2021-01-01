import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-universite-list',
  templateUrl: './universite-list.component.html',
  styleUrls: ['./universite-list.component.css']
})
export class UniversiteListComponent implements OnInit {
  public universiteListe: any[] = [
    {
      _id:"1",
      name:"Ecole Centrale Supérieure Privée des Lettres, des Arts et des Sciences de la Communication Tunis",
      Adresse : "7, Rue du Brésil 1002 Tunis  ",
      Tel : "  +216 71 783 175",
     
    },
    {
      _id:"2",
      name:"IT Business School",
      Adresse : "Av. Dali Jezi, 8062 Nabeul, Tunisie  ",
      Tel : "  +216 92 337 777",
     
    },
    {
      _id:"3",
      name:"Université SESAME",
      Adresse : "1, 2 rue André Ampère - 2083 - Pôle Technologique - El Ghazala  ",
      Tel : "  +216 70 686 486",
     
    },
    {
      _id:"4",
      name:"Esprit",
      Adresse : "1, 2 rue André Ampère - 2083 - Pôle Technologique - El Ghazala  ",
      Tel : "  +216 70 205 000",
    },
    {
      _id:"5",
      name:"TEK-UP",
      Adresse : "Av. Dali Jezi, 8062 Nabeul, Tunisie  ",
      Tel : "  +216 23 814 000",
      
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
