import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnoncesService } from 'src/app/services/annonces.service';
@Component({
  selector: 'app-annonce-details',
  templateUrl: './annonce-details.page.html',
  styleUrls: ['./annonce-details.page.scss'],
})
export class AnnonceDetailsPage implements OnInit {
  id: any;
  annonce: any;
  userEmail: string;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private annoncesService: AnnoncesService
  ) {}

  ngOnInit() {
    this.userEmail = localStorage.getItem('email');
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.annonce = this.annoncesService.getAnnonceById(this.id);
    this.annoncesService.getAnnonceById(this.id);
    console.log('AnnonceDetailsPage ngOnInit', this.annonce);
  }
  // supprimer l'annonce
  deleteAnnonce() {
    this.annoncesService.deleteAnnonceById(this.id);
  }
  // backButton() {
  //   console.log('backButton');
  //   this.router.navigate(['/annonces']);
  // }
}
