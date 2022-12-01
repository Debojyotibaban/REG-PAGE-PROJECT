import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login registration -form';

   ngform = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email:new FormControl('', [Validators.required, Validators.minLength(3)]),
    phoneno:new FormControl('',[Validators.required,Validators.minLength(10)]),
    address:new FormControl('',[Validators.required,Validators.minLength(3)]),
  });
  
  get f(){

    return this.ngform.controls;
  }
  
  mySubmit(){
    console.log(this.ngform.value);
    console.log(this.ngform.value);
    console.log(this.ngform.value);
    console.log(this.ngform.value);
  }



}
