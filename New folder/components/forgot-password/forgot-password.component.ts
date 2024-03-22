import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/User/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

  forgotpassForm!:FormGroup;
  constructor(private formbuilder:FormBuilder, private userservice: UserService){}

  ngOnInit():void {
    this.forgotpassForm = this.formbuilder.group({
      Email:['',[Validators.required,Validators.email]],
      
    });
  }

  Email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessageforemail() {
    if (this.Email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.Email.hasError('email') ? 'Not a valid email' : '';
  }

  ForgotSubmit()
  {
    let reqData ={
      UserEmail:this.forgotpassForm.value.Email
    } 

    this.userservice.forget(reqData).subscribe((res:any)=>{
      console.log(res);
    })
  }
}
