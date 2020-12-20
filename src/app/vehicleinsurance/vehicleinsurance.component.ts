import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicleinsurance',
  templateUrl: './vehicleinsurance.component.html',
  styleUrls: ['./vehicleinsurance.component.css']
})
export class VehicleinsuranceComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private _activatedRoute:ActivatedRoute,private _router:Router)
  {

  }

  ngOnInit() {
  }

  vehicleform(){    
    this._router.navigate(['/Payment']);
  }

}
