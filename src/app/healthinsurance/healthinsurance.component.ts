import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-healthinsurance',
  templateUrl: './healthinsurance.component.html',
  styleUrls: ['./healthinsurance.component.css']
})
export class HealthinsuranceComponent implements OnInit {



  constructor(private formbuilder:FormBuilder,private _activatedRoute:ActivatedRoute,private _router:Router)
  {

  }

  ngOnInit() {
  }
 
  healthform(){
    this._router.navigate(['/Payment']);
  }

}
