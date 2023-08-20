import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CommonService} from '../common.service';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
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

  
}
