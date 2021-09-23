import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactform!:FormGroup
  constructor(private formBuilder:FormBuilder,private _http:HttpClient, private router:Router) { }


  ngOnInit(): void {
    this.contactform=this.formBuilder.group({
      firstname:[''],
      surname:[''],
      email:[''],
      number:[''],
      message:['']
    })
  }
  contact(){
    this._http.post<any>("http://localhost:3000/contact", this.contactform.value).subscribe(res=> {
      alert("contact su");
      this.contactform.reset();
      this.router.navigate(['contact']);
    },
    err=>{
      alert("kuth to glar he")
    }
      )
    }



}

