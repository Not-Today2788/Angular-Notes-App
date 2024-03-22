import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/User/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {


  registerForm!:FormGroup;

  constructor(private formbuilder:FormBuilder,private userservice: UserService, private route:Router){}


  ngOnInit(): void {
    this.registerForm=this.formbuilder.group({

       firstname: ['',[Validators.required,Validators.pattern('[A-Z][a-z]{2,}')]],       
        email: ['',[Validators.required,Validators.email]],
        password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}')]],
        
    })
    
  }

  // get email(){
  //   return this.registerForm.get('email')
  // }
  // get password(){
  //   return this.registerForm.get('password')
  // }

RegisterSubmit(){
  let reqData={
    Firstname:this.registerForm.value.firstname,
    Useremail:this.registerForm.value.email,
    Userpassword:this.registerForm.value.password 
  }


  console.log(reqData);
  this.userservice.register(reqData).subscribe((res:any)=>{
    console.log(res);
  })


}

}
