import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }

  isLoading = false;//isLoading: Un booleano que indica si el loader está activo o no.

  loaderImages = [
    { src: 'assets/heroes/dc-arrow.jpg',    text: '' },
    { src: 'assets/heroes/dc-batman.jpg',   text: '' },
    { src: 'assets/heroes/dc-black.jpg',    text: '' },
    { src: 'assets/heroes/dc-blue.jpg',     text: '' },
    { src: 'assets/heroes/dc-flash.jpg',    text: '' },
    { src: 'assets/heroes/dc-green.jpg',    text: '' },
    { src: 'assets/heroes/dc-martian.jpg',  text: '' },
    { src: 'assets/heroes/dc-robin.jpg',    text: '' },
    { src: 'assets/heroes/dc-superman.jpg', text: '' },
    { src: 'assets/heroes/dc-wonder.jpg',   text: '' },];

    // Este método se llama cuando el usuario hace
    // clic en el botón "Show Loader".
    // Activa el loader estableciendo isLoading a true.
    // Usa setTimeout para simular una llamada
    // a un proceso o API, desactiva el loader después
    // de 10 segundos (10000 milisegundos)
    // y redirige a una nueva
    // ruta (/new-route) usando el router de Angular.
  showLoader() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/new-route']);
    }, 10000); // Simula una llamada a un proceso o API }
  }

}
