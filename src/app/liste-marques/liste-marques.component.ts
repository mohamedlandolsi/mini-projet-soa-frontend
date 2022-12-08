import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { SmartphoneService } from '../services/smartphone.service';

@Component({
  selector: 'app-liste-marques',
  templateUrl: './liste-marques.component.html',
  styleUrls: ['./liste-marques.component.css'],
})
export class ListeMarquesComponent implements OnInit {
  marques!: Marque[];
  updatedMarque: Marque = { marqueId: 0, marqueNom: '' };
  ajout: boolean = true;

  constructor(private smartphoneService: SmartphoneService) {}

  ngOnInit() {
    this.smartphoneService.listeMarques().subscribe((marques) => {
      this.marques = marques._embedded.marques;
      console.log(marques);
    });
  }

  chargerMarque() {
    this.smartphoneService.listeMarques().subscribe((marques) => {
      this.marques = marques._embedded.marques;
      console.log(marques);
    });
  }

  marqueUpdated(marque: Marque) {
    console.log('Marque updated event', marque);
    this.smartphoneService
      .ajouterMarque(marque)
      .subscribe(() => this.chargerMarque());
  }

  updateMarque(marque: Marque) {
    this.updatedMarque = marque;
    this.ajout = false;
  }


}
