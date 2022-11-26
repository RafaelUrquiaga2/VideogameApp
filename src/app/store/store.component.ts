import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Videogame } from '../models/videogame';
import { VideogameOrdered } from '../models/videogame-ordered';
import { GaleryService } from '../services/galery.service';
import { VideogamesService } from '../services/videogames.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit{
  videogame: Videogame;
  videogames: Videogame[] = [];
  videogameOrdered: VideogameOrdered;
  videogame$: Observable<Videogame> | undefined;


  constructor(private videogamesService: VideogamesService, private videogameOrderedService: GaleryService) {
    this.videogame = {} as Videogame;
    this.videogameOrdered = {} as VideogameOrdered;
   }

  ngOnInit(): void {
    this.getAllVideogames();
  }

  getAllVideogames(){
    this.videogamesService.getAll().subscribe((response:any) => {this.videogames = response;})
  }

  getVideogameById(id: string) {
    /*
    this.videogamesService.getById(id).subscribe((response: Videogame) => {
      this.videogameOrdered.videogameId = response.id;
      this.videogameOrdered.image = response.image;
      this.videogameOrdered.name = response.name;
      this.videogameOrdered.price = response.price;
      this.videogameOrdered.rarity = response.rarity;
    });
    */
    this.videogame$ = this.videogamesService.getById(id);

    this.videogame$.subscribe((value: Videogame) => {
      this.videogameOrdered.videogameId = 2;
      this.videogameOrdered.image = value.image;
      this.videogameOrdered.name = value.name;
      this.videogameOrdered.price = value.price;
      this.videogameOrdered.rarity = value.rarity;
    })

    //console.log(this.videogameOrdered);
  }

  addVideogameToGalery(newGaleryGame: Videogame) {
    //this.getVideogameById(id);
    //console.log(this.videogameOrdered);
    this.videogameOrdered.videogameId = newGaleryGame.id;
    this.videogameOrdered.image = newGaleryGame.image;
    this.videogameOrdered.name = newGaleryGame.name;
    this.videogameOrdered.price = newGaleryGame.price;
    this.videogameOrdered.rarity = newGaleryGame.rarity;
    console.log(newGaleryGame);
    this.videogameOrderedService.create(this.videogameOrdered).subscribe(response => { alert("Order registered"); });
  }



}
