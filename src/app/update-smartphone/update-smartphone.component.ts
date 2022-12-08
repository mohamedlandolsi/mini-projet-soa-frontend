import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { SmartphoneService } from '../services/smartphone.service';
import { Smartphone } from '../model/smartphone.model';
import { Marque } from '../model/marque.model';

@Component({
  selector: 'app-update-smartphone',
  templateUrl: './update-smartphone.component.html',
  styles: [],
})
export class UpdateSmartphoneComponent implements OnInit {
  currentSmartphone = new Smartphone();

  marques!: Marque[];
  updatedMarqueId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private smartphoneService: SmartphoneService
  ) {}

  ngOnInit(): void {
    // this.smartphoneService.listeMarques().subscribe((marques) => {
    //   this.marques = marques;
    //   console.log(marques);
    // });
    // this.smartphoneService
    //   .consulterSmartphone(this.activatedRoute.snapshot.params['id'])
    //   .subscribe((prod) => {
    //     this.currentSmartphone = prod;
    //     this.updatedMarqueId = this.currentSmartphone.marque.marqueId;
    //   });
    this.smartphoneService.listeMarques().subscribe((marques) => {
      console.log(marques);
      this.marques = marques._embedded.marques;
    });
    this.smartphoneService
      .consulterSmartphone(this.activatedRoute.snapshot.params['id'])
      .subscribe((prod) => {
        this.currentSmartphone = prod;
        this.updatedMarqueId = this.currentSmartphone.marque.marqueId;
      });
  }

  updateSmartphone() {
    this.currentSmartphone.marque = this.marques.find(
      (marque) => marque.marqueId == this.updatedMarqueId
    )!;
    this.smartphoneService
      .updateSmartphone(this.currentSmartphone)
      .subscribe((phone) => {
        this.router.navigate(['smartphones']);
      });
  }
}
