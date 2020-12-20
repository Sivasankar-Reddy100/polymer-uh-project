import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.css']
})
export class PaymentpageComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private _activatedRoute:ActivatedRoute,private _router:Router)
  {

  }

  ngOnInit() {
  }

  pay(){

    this._router.navigate(['/Success']);
  }

}
