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
import { updateProfile } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  signupForm!: FormGroup;
  submitted = false;
  fieldTextType!: boolean;
  error = '';
  returnUrl!: string;

  toast!: false;
  year: number = new Date().getFullYear();
  public errorModal: any;
  public errorMessage: string = ''
  public isProcessingRegistering: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) 
  {
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.pattern('(09)[0-9]{9}')]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
          ),
        ],
      ],
      confirmpassword: ['', Validators.required],
    });
  }
  get f() {
    return this.signupForm.controls;
  }
  onSubmit(errormodal: any) {
    if (this.signupForm.valid) 
    {
      this.isProcessingRegistering = true;
      var params = {
        email: this.f['email'].value,
        password: this.f['password'].value,
      };
      this.authService.signUp(params).subscribe
      ({
        next: async (res) => 
        {
          this.isProcessingRegistering = false;
          updateProfile(res.user, {displayName: 'customer'});
          this.authService.setDisplayNameLocalStorage('customer', res.user);
          var specificDataObject = 
          {
            email: this.f['email'].value,
            name: this.f['name'].value,
            phonenumber: this.f['number'].value
          }
          this.authService.saveUserInfoAfterRegistering(specificDataObject, res.user.uid)
          this.router.navigate(['/'])
          
        },
        error: async (err) => 
        {
          this.isProcessingRegistering = false;
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
      this.validateAllFormFields(this.signupForm);
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
  passwordFieldcontainsUppercase(str: string) {
    return /[A-Z]/.test(str);
  }
  passwordFieldcontainsLowercase(str: string) {
    return /[a-z]/.test(str);
  }
  passwordFieldcontainsNumber(str: string) {
    return /[0-9]/.test(str);
  }
  passwordFieldcontainsSpecialCharacters(str: string) {
    return /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str);
  }

}
