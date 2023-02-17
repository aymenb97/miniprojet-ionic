import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnoncesService } from 'src/app/services/annonces.service';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.page.html',
  styleUrls: ['./add-annonce.page.scss'],
})
export class AddAnnoncePage implements OnInit {
  annonce: any;
  user: string;
  constructor(
    private annoncesService: AnnoncesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = window.localStorage.getItem('user');
  }
  addAnnonce(formValue: any) {
    this.annonce = { user: this.user, ...formValue };
    console.log(this.annonce);
    this.annoncesService.addAnnonce(this.annonce);
    this.router.navigate(['/annonces']);
  }
}
