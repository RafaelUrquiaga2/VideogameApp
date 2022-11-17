import { Component, OnInit } from '@angular/core';
import { Videogame } from '../models/videogame';
import { VideogameOrdered } from '../models/videogame-ordered';
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

  constructor(private videogamesService: VideogamesService) {
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
    this.videogamesService.getById(id).subscribe((response: Videogame) => {
      this.videogameOrdered.videogameId = response.id;
      this.videogameOrdered.image = response.image;
      this.videogameOrdered.name = response.name;
      this.videogameOrdered.price = response.price;
      this.videogameOrdered.rarity = response.rarity;
    })

    //console.log(this.buyedWaifu);
  }
/*
  addVideogameToUser(id: string){
    this.getVideogameById(id);
    //this.waifuService.create(this.buyedWaifu).subscribe((response:any) => {this.domestic$ = response;});
    //this.waifuService.create(this.buyedWaifu);
    //this.buyedWaifu.id="0";
    this.videogamesService.create(this.videogameOrdered).subscribe(response => {alert("Order registered");});
    //console.log(this.buyedWaifu);
  }
  */
}
