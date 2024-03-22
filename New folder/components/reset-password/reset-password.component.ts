import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/User/user.service';
import { ActivatedRoute } from '@angular/router';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {

  submitted = false;
  token:any;



  resetForm!:FormGroup;
  constructor(private formbuilder:FormBuilder,private userService: UserService, private activeRoute: ActivatedRoute){}



  ngOnInit(): void {
    this.resetForm=this.formbuilder.group({

        password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}')]],
        re_enter_newpassword: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}')]]
        
    })
    this.token=this.activeRoute.snapshot.paramMap.get('token');
    console.log(this.token);
    
  }


  ResetSubmit(){
    let reqData={
      newpassword:this.resetForm.value.newpassword,
      re_enter_newpassword:this.resetForm.value.re_enter_newpassword
      
    }
    console.log(reqData);
    this.userService.reset(reqData, this.token ).subscribe((res:any)=>{
      console.log(res);
    })
  }

}
