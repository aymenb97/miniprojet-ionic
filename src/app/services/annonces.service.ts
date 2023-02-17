import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AnnoncesService {
  annonces: any[] = [
    {
      user: '0',
      title: 'Ordinateur Portable',
      description: 'Ordinateur Portable HP à Vendre',
    },
    {
      user: '0',
      title: 'Télévision',
      description: 'Télévision Sony 42" à Vendre',
    },
    {
      user: '0',
      title: 'Machine Café',
      description: 'Machine a Café a vendre',
    },
  ];

  getAllAnnonces(): any {
    return this.annonces;
  }

  addAnnonce(annonce: any): any {
    this.annonces.push(annonce);
  }

  getAnnonceById(id: any): any {
    return this.annonces.filter((x) => x.id === id);
  }

  getAnnoncesByUId(uId: string): any {
    return this.annonces.filter((x) => x.user === uId);
  }

  deleteAnnonceById(id: number) {
    this.annonces.splice(
      this.annonces.findIndex((x) => x.id === id),
      1
    );
  }
}
