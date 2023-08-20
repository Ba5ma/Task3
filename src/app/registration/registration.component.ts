import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {CommonService} from '../common.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  createUser = new FormGroup({
    name: new FormControl(''),
    email : new FormControl(''),
    password : new FormControl('')
  });
  
  constructor(private router: Router, private resto : CommonService){

  }

  goToLogin(){
    this.router.navigate(['/login']);
  }



  regUser(){
    console.log(this.createUser.value);
    this.resto.createUser(this.createUser.value).subscribe((result)=>{
      console.log(result,"data created sucessfully");
    })
  }

  Regiterbtn(){
    Swal.fire('Thank you...', 'You registered succesfully!', 'success');
    this.router.navigate(['/login']);
  }
}
