import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-route',
  templateUrl: './new-route.page.html',
  styleUrls: ['./new-route.page.scss'],
})
export class NewRoutePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  return() {
    this.router.navigate(['']);
  }

}
