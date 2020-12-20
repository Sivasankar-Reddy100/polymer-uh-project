import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginCls } from './loginpage.classmodel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  loginform: FormGroup;
  submitted = false;
  Username:string;
  Password:string;
  loginobj: LoginCls;
  loginarr: LoginCls[];
  usernamevar;
  passwordvar;

  // logon_page = true;

  constructor(private formbuilder:FormBuilder,private _activatedRoute:ActivatedRoute,private _router:Router)
   {

   }
  ngOnInit() {

    // setTimeout(()=>{ console.log(this) }, 3000);
    // var name = "basavaraj";
    // var company = "uniqhire";
    // console.log(`this is ngonInit ${name} workig as a developer ${company}`);

    this.loginobj = new LoginCls();
    this.loginarr = new Array();
    this.loginform = this.formbuilder.group({
      Username: ['', [Validators.required, Validators.minLength(3)]],
      Password: ['',[Validators.required, Validators.minLength(3)]] ,
      Rememberme:[false, Validators.requiredTrue]
    })    
  }

  get logincontrolsFunc() { 
    return this.loginform.controls; 
  }



  onLoginSubmit() {  
      
      this.submitted = true; 
      
              
        if(this.Username == "admin" && this.Password =="admin"){  
         
          // this.logon_page = false;
          this._router.navigate(['/Dashboard']);
          
          }
         else if (this.loginform.invalid)
          {
           alert("Enter the valid details");           
             return; 
           } 
        else{
          alert("Not Registered");
        }  
                
     }    
 
}
