import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Smartphone } from '../model/smartphone.model';
import { SmartphoneService } from '../services/smartphone.service';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.css'],
})
export class SmartphonesComponent implements OnInit {
  smartphones?: Smartphone[];

  constructor(private smartphoneService: SmartphoneService) {}

  ngOnInit(): void {
    this.chargerSmartphones();
  }

  chargerSmartphones() {
    this.smartphoneService.listeSmartphone().subscribe((phones) => {
      console.log(phones);
      this.smartphones = phones;
    });
  }

  supprimerSmartphone(p: Smartphone) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf)
      this.smartphoneService
        .supprimerSmartphone(p.smartphoneId)
        .subscribe(() => {
          console.log('smartphone supprimé');
          this.chargerSmartphones();
        });
  }
}
