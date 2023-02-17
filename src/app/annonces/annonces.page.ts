import { Component, OnInit, ViewChild } from '@angular/core';
import { AnnoncesService } from '../services/annonces.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'annonces.page.html',
  styleUrls: ['annonces.page.scss'],
})
export class AnnoncePage implements OnInit {
  annonces: any[];
  constructor(
    private announceService: AnnoncesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.annonces = this.announceService.getAllAnnonces();
    console.log(this.annonces);
  }
  details(id) {
    console.log('ID/', id);
    this.router.navigate(['/annonce-details', id]);
  }
}
