import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',  
})
export class ListadoComponent  {

  heroes: string[]=['spidermna','Ironman','Hulk','Thor'];
  heroeBorrado?: string="";


  borrarHeroe(){
    const borrado= this.heroes.pop();
    this.heroeBorrado=borrado;
  }

}
