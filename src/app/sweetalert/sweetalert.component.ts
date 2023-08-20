import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sweetalert',
  templateUrl: './sweetalert.component.html',
  styleUrls: ['./sweetalert.component.css']
})
export class SweetalertComponent implements OnInit {
  email: string;
  password:string;

  constructor(private router: Router, private resto: CommonService){

  }

  ngOnInit():void {
    
  }

  simpleAlert(){
    Swal.fire('Registered Successfully');
  }

  alertWithSuccess(){
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
  }

  confirmBox(){
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  goToAlert(){
    this.router.navigate(['/alerttoaster/']);
  }

  goToHome(){
    if(this.email == "basma@email.com" && this.password == "123"){
    this.router.navigate(['/home']);
    }
    else{
      alert("Please enter valid details!!");
    }
  }

  goToRegist(){
    this.router.navigate(['/register']);
  }



}

