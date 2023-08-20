import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CommonService} from '../common.service';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-rest',
  templateUrl: './list-rest.component.html',
  styleUrls: ['./list-rest.component.css']
})
export class ListRestComponent implements OnInit {
  alert:boolean= false;
  faPen=faPenToSquare;
  faTrash=faTrashCan;
  public collection : any;
  constructor(private router: Router, 
    private commonService : CommonService){

  }

  
  ngOnInit(){
    this.commonService.getRestList().subscribe((result)=>{
      this.collection = result;
      console.log(this.collection);
    });
  }

  simpleAlert(){
    Swal.fire('Restaurent Added Successfully');
  
  }

  deleteResto(resto:any){
    this.collection.splice(resto.id,-1)
    this.commonService.deleteResto(resto).subscribe((result)=>{
      this.confirmBox();
      this.collection.splice(resto, 1);
      console.log("Data is Deleted Successfully !", result);
      this.alert= true;
    })
  }

  closeAlert(){
    this.alert= false;
  }

  confirmBox(){
    Swal.fire({
      title: 'Are you sure want to delete?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Restaurant Deleted Successfully',
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
}
