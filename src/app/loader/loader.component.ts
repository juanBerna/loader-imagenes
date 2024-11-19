import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {

  //@Input() images: Un arreglo de objetos que contiene las imágenes y los textos que se mostrarán en el loader. Cada objeto tiene las propiedades src (la ruta de la imagen) y text (el texto asociado a la imagen).
  @Input() images: { src: string, text: string }[] = [];
  interval: number = 900; // Tiempo en milisegundos currentIndex: number = 0; intervalId: any;
  // currentIndex: Un índice que rastrea la imagen y el texto actuales que se están mostrando.
  currentIndex: number = 0;
  // Un identificador para el intervalo que se usa para cambiar las imágenes y los textos.
  intervalId: any;


  ngOnInit() {
    this.images = this.images.map(image => ({
      ...image, text: this.getImageName(image.src)
    }));
    this.startLoader();
  }

  ngOnDestroy() {
    this.stopLoader();
  }

  //  Este método inicia el intervalo que cambia las imágenes
  // y los textos en el loader.
  // Usa setInterval para actualizar currentIndex cada
  // interval milisegundos. currentIndex se incrementa
  // y se reinicia a 0 cuando alcanza el final del
  // arreglo images
  startLoader() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, this.interval);
  }


  //Usa clearInterval para detener el intervalo
  stopLoader() {
    clearInterval(this.intervalId);
  }

  getImageName(imagePath: string): string {
    return imagePath?.split('/').pop()?.split('.')[0] || 'cargando';
  }

}
