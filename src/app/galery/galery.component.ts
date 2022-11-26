import { Component, OnInit } from '@angular/core';
import { VideogameOrdered } from '../models/videogame-ordered';
import { GaleryService } from '../services/galery.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit{

  videogamesOrdered: VideogameOrdered[] = [];
  videogameOrdered: VideogameOrdered;

  constructor(private videogameOrderedService: GaleryService) {
    this.videogameOrdered = {} as VideogameOrdered;
   }

  ngOnInit(): void {
    this.getAllVideogames();
  }

  getAllVideogames(){
    this.videogameOrderedService.getAll().subscribe((response:any) => {this.videogamesOrdered = response;})
  }

  deleteGaleryGame(id:number){
    this.videogameOrderedService.delete(id).subscribe(()=>{alert("Juego borrado")})
  }

}
