import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted = false;
  fieldTextType!: boolean;
  error = '';
  returnUrl!: string;
  toast!: false;
  year: number = new Date().getFullYear();
  emailForResetPassword: string = ''
  public ForgotPasswordModal: any;
  public errorModal: any;
  public errorMessage: string = ''
  public isProcessingLogIn: boolean = false;
  constructor
  (
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) 
    {

      // if (this.authService.displayname !== undefined) 
      // this.router.navigate(['/form'])
    }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  onSubmit(errormodal: any) 
  {
    if (this.loginForm.valid) 
    {
      this.isProcessingLogIn = true;
      var params = 
      {
        email: this.f['email'].value,
        password: this.f['password'].value
      }

      this.authService.signIn(params)
      .subscribe
      ({
        next: async (res) => 
        {
          this.authService.setDisplayNameLocalStorage(res.user.displayName, res.user);
            if (res.user.displayName == 'customer') 
            {
              this.router.navigate(['/'])
            }
            else 
            {
              this.router.navigate(['/admin/applicants'])
            }
            this.isProcessingLogIn = false;
          
        },
        error: async (err) => 
        {
          this.isProcessingLogIn = false;
          this.errorMessage = ''
          this.errorMessage = await err;
         // alert(await err)
          this.errorModal = new bootstrap.Modal(errormodal, {})
          this.errorModal?.show();
        }
      })
    }
    else 
    {
      this.validateAllFormFields(this.loginForm);
    }    


  }
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  openForgotPasswordModal(element: any) 
  {
    this.ForgotPasswordModal = new bootstrap.Modal(element, {})
    this.ForgotPasswordModal?.show();

  }
  sendEmailResetPassword() 
  {
    this.authService.resetPassword(this.emailForResetPassword).subscribe
    ({
      
      next: async (res) => 
      {
        this.ForgotPasswordModal?.hide();
        alert("Please check your email inbox to reset your password!")
        this.emailForResetPassword = ''
      },
      error: async (err) => 
      {
        //console.log("the error", err)
        alert(await err);
      }

    })
  }
}