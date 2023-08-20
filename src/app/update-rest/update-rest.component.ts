import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CommonService} from '../common.service';
import { FormGroup,FormControl } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-update-rest',
  templateUrl: './update-rest.component.html',
  styleUrls: ['./update-rest.component.css']
})
export class UpdateRestComponent {
  alert:boolean = false;
  constructor(private resto : CommonService, private router:ActivatedRoute){
   }
  

  editRestaurant = new FormGroup({
    name: new FormControl(''),
    address : new FormControl(''),
    mobile : new FormControl('')
  });

ngOnInit(): void {  
  console.log(this.router.snapshot.params['id'])
    this.resto.getCurrentData(this.router.snapshot.params['id']).subscribe((result:any)=>{
      this.editRestaurant= new FormGroup({
        name: new FormControl(result['name']),
        address: new FormControl(result['address']),
        mobile: new FormControl(result['mobile'])
      })
    })
}

updateResto(){
  this.resto.updateResto(this.router.snapshot.params['id'],this.editRestaurant.value).subscribe((result)=>{
    console.log(result,"data updated successfull");
    this.alert=true;
  })
}


closeAlert(){
  this.alert=false;
}

}