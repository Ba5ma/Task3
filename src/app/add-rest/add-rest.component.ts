import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
import { FormGroup,FormControl } from '@angular/forms';
import Swal  from 'sweetalert2';



@Component({
  selector: 'app-add-rest',
  templateUrl: './add-rest.component.html',
  styleUrls: ['./add-rest.component.css']
})
export class AddRestComponent implements OnInit {
  
  constructor(private resto : CommonService){

  }

  addRestaurant = new FormGroup({
    name: new FormControl(''),
    address : new FormControl(''),
    mobile : new FormControl('')
  });

ngOnInit(): void {  
}

simpleAlert(){
  Swal.fire('Restaurent Added Successfully');

}

createResto(){
  this.resto.addResto(this.addRestaurant.value).subscribe((result)=>{
    console.log("Get data from service", result);
    this.addRestaurant.reset({});
  })
  
}
}
