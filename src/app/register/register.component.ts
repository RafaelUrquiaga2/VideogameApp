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

  @ViewChild('gameForm2', {static: false})
  gameForm2!: NgForm;
  
  registerForm: FormGroup = this.formBuilder.group({
    name: ['',{validators: [Validators.required], updateOn: 'change'}],
    image: ['',{validators: [Validators.required], updateOn: 'change'}],
    rarity: ['',{validators: [Validators.required], updateOn: 'change'}],
    price: ['',{validators: [Validators.required], updateOn: 'change'}],
  });

  registerForm2: FormGroup = this.formBuilder.group({
    id: ['',{validators: [Validators.required], updateOn: 'change'}],
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

  get id(){return this.registerForm2.get('id');}
  get name2(){return this.registerForm2.get('name');}
  get image2(){return this.registerForm2.get('image');}
  get rarity2(){return this.registerForm2.get('rarity');}
  get price2(){return this.registerForm2.get('price');}

  addGame(){
    const formBody: Videogame = this.gameForm.value;
    //formBody.dni = this.dniData;
    this.videoGameService.create(formBody).subscribe(response => {
      this.gameForm.reset();
      alert("Game registered");
      //this.router.navigate(['urlorder']);
    });
  }

  updateGame(){
    const formBody: Videogame = this.gameForm2.value;
    //formBody.dni = this.dniData;
    this.videoGameService.update(formBody.id,formBody).subscribe(response => {
      this.gameForm.reset();
      alert("Game updated");
      //this.router.navigate(['urlorder']);
    });
  }

  onSubmit(){
    this.addGame();
  }

  update(){
    this.updateGame();
  }

}
