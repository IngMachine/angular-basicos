import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  mostrarHeroeBorrado: boolean = false;

  heroes: string[] = [ 'Spiderman', 'Iroman', 'Hulk', 'Thor' ];
  heroeBorrado: string = '';

  borrarHeroe(): void{
    this.heroeBorrado = this.heroes.shift()  || '';
    if(this.heroeBorrado != ''){
      this.mostrarHeroeBorrado = true;
    } else {
      this.mostrarHeroeBorrado = false;
    }
  }

}
