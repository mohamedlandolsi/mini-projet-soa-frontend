import { Component, OnInit } from '@angular/core';
import { Smartphone } from '../model/smartphone.model';
import { SmartphoneService } from '../services/smartphone.service';
import { Marque } from '../model/marque.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-smartphone',
  templateUrl: './add-smartphone.component.html',
  styleUrls: ['./add-smartphone.component.css'],
})
export class AddSmartphoneComponent implements OnInit {
  marques!: Marque[];

  newIdMarque!: number;
  newMarque!: Marque;

  ngOnInit(): void {
    // this.smartphoneService.listeMarques().subscribe((marques) => {
    //   this.marques = marques;
    //   console.log(marques);
    // });
    this.smartphoneService.listeMarques().subscribe((marques) => {
      console.log(marques);
      this.marques = marques._embedded.marques;
    });
  }

  constructor(
    private smartphoneService: SmartphoneService,
    private router: Router
  ) {}

  newSmartphone = new Smartphone();

  addSmartphone() {
    // this.newMarque = this.smartphoneService.consulterMarque(this.newIdMarque);
    // this.newSmartphone.marque = this.newMarque;
    this.newSmartphone.marque = this.marques.find(
      (marque) => marque.marqueId == this.newIdMarque
    )!;
    this.smartphoneService
      .ajouterSmartphone(this.newSmartphone)
      .subscribe((phone) => {
        console.log(phone);
        this.router.navigate(['smartphones']);
      });
  }
}
