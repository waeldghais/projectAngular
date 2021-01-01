import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public universiteListe: any[] = [
    {
      _id:"1",
      name:"Ecole Centrale Supérieure Privée des Lettres, des Arts et des Sciences de la Communication Tunis",
      Adresse : "7, Rue du Brésil 1002 Tunis  ",
      Tel : "  +216 71 783 175",
      about:"Depuis sa création, le Groupe Université Centrale s’est continuellement réinventée. Aujourd’hui, nos Facultés et campus sont plus que tout autre endroit un lieu où des idées nouvelles peuvent être lancées et mises en œuvre. Méthodes pédagogiques, enseignements d’ouverture, engagement citoyen, campus numérique, nouveaux outils : cette capacité à innover est l’une de nos marques de fabrique",
      image:"EcoleLettre.jpg"
    },
    {
      _id:"2",
      name:"IT Business School",
      Adresse : "Av. Dali Jezi, 8062 Nabeul, Tunisie  ",
      Tel : "  +216 92 337 777",
      about:"IT Business School est implantée dans un campus universitaire entre Nabeul et Hammamet, à 50 minutes de l’aéroport de Tunis Carthage. Notre réseau est également présent en France, au Canada et à New York. Nos diplômes sont reconnus en Tunisie et à l’étranger et accrédités par l’Ordre des Ingénieurs en Tunisie.",
      image:"itbs.png"
    },
    {
      _id:"3",
      name:"Université SESAME",
      Adresse : "1, 2 rue André Ampère - 2083 - Pôle Technologique - El Ghazala  ",
      Tel : "  +216 70 686 486",
      about:"L’ Université SESAME est à la fois une école d’ingénieur et une école de management, elle a construit sur son expérience réussie dans le domaine de la formation continue et a démarré à partir de la rentrée 2011 la formation d’ingénieur en Informatique. Elle a lancé à la rentrée 2012-2013 le cycle préparatoire intégrée pour les études d’ingénieur, les licences appliquées en informatique et des formations en management (licences appliquées et mastères professionnels).",
      image:"sesame.jpg"
    },
    {
      _id:"4",
      name:"Esprit",
      Adresse : "1, 2 rue André Ampère - 2083 - Pôle Technologique - El Ghazala  ",
      Tel : "  +216 70 205 000",
      about:" Fondée en 2003 à l’initiative de trois universitaires ayant conduit de nombreux projets dans l’enseignement supérieur tunisien, et dans l’enseignement supérieur technique en particulier, entourés de plusieurs dizaines de leurs collègues, ainsi que d’entreprises TIC et de partenaires financiers.",
      image:"Esprit.jpg"
    },
    {
      _id:"5",
      name:"TEK-UP",
      Adresse : "Av. Dali Jezi, 8062 Nabeul, Tunisie  ",
      Tel : "  +216 23 814 000",
      about:"TEK-UP est une institution qui offre la possibilité de bénéficier d'une formation académique reconnue et appréciée dans le monde entier.L'université délivre le diplôme national en génie informatique ou en télécommunications.",
      image:"tekup.png"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
