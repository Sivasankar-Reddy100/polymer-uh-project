import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-travelinsurance',
  templateUrl: './travelinsurance.component.html',
  styleUrls: ['./travelinsurance.component.css']
})
export class TravelinsuranceComponent implements OnInit {

  
  constructor(private formbuilder:FormBuilder,private _activatedRoute:ActivatedRoute,private _router:Router)
   {

   }

  ngOnInit() {
  }
  travelconfirm(){  
    
    alert("hghtr ghrh");
    this._router.navigate(['/Payment']);
  }

}
