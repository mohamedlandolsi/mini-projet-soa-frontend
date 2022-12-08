import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { Smartphone } from '../model/smartphone.model';
import { SmartphoneService } from '../services/smartphone.service';

@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-model.component.html',
})
export class RechercheParModelComponent implements OnInit {
  smartphones!: Smartphone[];
  smartphoneModel!: string;
  marques!: Marque[];
  allSmartphones!: Smartphone[];
  searchTerm!: string;

  constructor(private smartphonesService: SmartphoneService) {}

  ngOnInit(): void {
    this.smartphonesService.listeSmartphone().subscribe((phones) => {
      console.log(phones);
      this.allSmartphones = phones;
    });
  }

  onKeyUp(filterText: string) {
    this.smartphones = this.allSmartphones.filter((item) =>
      item.smartphoneModel.toLowerCase().includes(filterText)
    );
  }

  rechercherPhones() {
    this.smartphonesService
      .rechercherParModel(this.smartphoneModel)
      .subscribe((phones) => {
        this.smartphones = phones;
        console.log(phones);
      });
  }
}
