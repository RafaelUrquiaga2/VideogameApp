import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Videogame } from '../models/videogame';
import { VideogamesService } from '../services/videogames.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @ViewChild('gameForm', {static: false})
  gameForm!: NgForm;
  
  registerForm: FormGroup = this.formBuilder.group({
    name: ['',{validators: [Validators.required], updateOn: 'change'}],
    image: ['',{validators: [Validators.required], updateOn: 'change'}],
    rarity: ['',{validators: [Validators.required], updateOn: 'change'}],
    price: ['',{validators: [Validators.required], updateOn: 'change'}],
  });

  constructor(private formBuilder: FormBuilder, private videoGameService: VideogamesService) { 

  }

  get name(){return this.registerForm.get('name');}
  get image(){return this.registerForm.get('image');}
  get rarity(){return this.registerForm.get('rarity');}
  get price(){return this.registerForm.get('price');}

  addGame(){
    const formBody: Videogame = this.gameForm.value;
    //formBody.dni = this.dniData;
    this.videoGameService.create(formBody).subscribe(response => {
      this.gameForm.reset();
      alert("Order registered");
      //this.router.navigate(['urlorder']);
    });
  }

  onSubmit(){
    this.addGame();
  }

}
