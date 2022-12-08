import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { Smartphone } from '../model/smartphone.model';
import { SmartphoneService } from '../services/smartphone.service';

@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',
  styleUrls: ['./recherche-par-marque.component.css'],
})
export class RechercheParMarqueComponent implements OnInit {
  smartphones!: Smartphone[];
  marqueId!: number;
  marques!: Marque[];

  constructor(private smartphonesService: SmartphoneService) {}

  ngOnInit(): void {
    this.smartphonesService.listeMarques().subscribe((marques) => {
      this.marques = marques._embedded.marques;
      console.log(marques);
    });
  }

  onChange() {
    this.smartphonesService
      .rechercherParMarque(this.marqueId)
      .subscribe((phones) => {
        this.smartphones = phones;
      });
  }
}
