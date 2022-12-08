import { Injectable } from '@angular/core';
import { Smartphone } from '../model/smartphone.model';
import { Marque } from '../model/marque.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MarqueWrapped } from '../model/marqueWrapped.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class SmartphoneService {
  smartphones!: Smartphone[];

  apiURL: string = 'http://localhost:8080/smartphones/api';
  apiURLMarque: string = 'http://localhost:8080/smartphones/marque';

  constructor(private http: HttpClient) {}

  // listeSmartphones(): Smartphone[] {
  //   return this.smartphones;
  // }

  listeSmartphone(): Observable<Smartphone[]> {
    return this.http.get<Smartphone[]>(this.apiURL);
  }

  ajouterSmartphone(phone: Smartphone): Observable<Smartphone> {
    // this.smartphones.push(phone);
    return this.http.post<Smartphone>(this.apiURL, phone, httpOptions);
  }

  // supprimerSmartphone(phone: Smartphone) {
  //   //supprimer le produit prod du tableau produits
  //   const index = this.smartphones.indexOf(phone, 0);
  //   if (index > -1) {
  //     this.smartphones.splice(index, 1);
  //   }
  // }

  supprimerSmartphone(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterSmartphone(id: number): Observable<Smartphone> {
    // this.smartphone = this.smartphones.find((p) => p.idSmartphone == id)!;
    // return this.smartphone;

    const url = `${this.apiURL}/${id}`;
    return this.http.get<Smartphone>(url);
  }

  trierSmartphones() {
    this.smartphones = this.smartphones.sort((n1, n2) => {
      if (n1.smartphoneId > n2.smartphoneId) {
        return 1;
      }
      if (n1.smartphoneId < n2.smartphoneId) {
        return -1;
      }
      return 0;
    });
  }

  updateSmartphone(phone: Smartphone): Observable<Smartphone> {
    return this.http.put<Smartphone>(this.apiURL, phone, httpOptions);
  }

  listeMarques(): Observable<MarqueWrapped> {
    // return this.http.get<Marque[]>(this.apiURL + '/marque');
    return this.http.get<MarqueWrapped>(this.apiURLMarque);
  }

  // consulterMarque(id: number): Marque {
  //   return this.marques.find((marque) => marque.idMarque == id)!;
  // }

  rechercherParMarque(idMarque: number): Observable<Smartphone[]> {
    const url = `${this.apiURL}/prodscat/${idMarque}`;
    return this.http.get<Smartphone[]>(url);
  }

  rechercherParModel(smartphoneModel: string): Observable<Smartphone[]> {
    const url = `${this.apiURL}/phonesByModel/${smartphoneModel}`;
    return this.http.get<Smartphone[]>(url);
  }

  ajouterMarque( marque: Marque):Observable<Marque>{
    return this.http.post<Marque>(this.apiURLMarque, marque, httpOptions);
    }
    
}
