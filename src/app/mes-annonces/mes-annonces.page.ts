import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from '../services/annonces.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mes-annonces',
  templateUrl: './mes-annonces.page.html',
  styleUrls: ['./mes-annonces.page.scss'],
})
export class MesAnnoncesPage implements OnInit {
  id: any;
  annonces: any[];
  constructor(
    private announceService: AnnoncesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.annonces = this.announceService.getAnnoncesByUId(this.id);
    console.log(this.annonces);
  }
  details(id) {
    console.log('ID/', id);
    this.router.navigate(['/annonce-details', id]);
  }
}
