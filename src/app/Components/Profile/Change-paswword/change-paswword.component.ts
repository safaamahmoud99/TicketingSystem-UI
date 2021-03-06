
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/helpers/must-match.validator';
import { AuthService } from 'src/Shared/Services/auth.service'
import { ClientService } from 'src/Shared/Services/client.service';
import { EmployeeService } from 'src/Shared/Services/employee.service';

@Component({
  selector: 'app-change-paswword',
  templateUrl: './change-paswword.component.html',
  styleUrls: ['./change-paswword.component.css']
})
export class ChangePaswwordComponent implements OnInit {
  Newpassword: string;
  registerForm: FormGroup;
  model: any = {};
  empId: number;
  employeeEmail: any
  clientEmail: any
  confirmedPassword: any
  passwordPattern: string
  submitted = false;
  clientId: number;
  role: string;

  constructor(private AuthService: AuthService,
    private router: Router,
    public formBuilder: FormBuilder,
    private empService: EmployeeService,
    private clientService: ClientService
  ) {
  }



  ngOnInit(): void {
    this.role = localStorage.getItem("roles")
    // Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{9,})/)
    this.passwordPattern = "^[a-z0-9_-]{8,15}$";
    this.employeeEmail = ''
    this.clientEmail = ''
    if (this.role == "Client") {
      this.clientId = Number(localStorage.getItem("clientId"))
      this.clientService.GetclientByID(this.clientId).subscribe(w => {
        this.clientEmail = w["email"]
        console.log("Client email", this.clientEmail)
      })
    }
    if (this.role != "Client") {
      this.empId = Number(localStorage.getItem('id'))
      this.empService.getEmpByID(this.empId).subscribe(w => {
        this.employeeEmail = w.email
        console.log("this.employeeEmail",this.employeeEmail)

      })
    }

    



    //   this.registerForm = this.formBuilder.group({
    //     email: ['', [Validators.required, Validators.email]],
    //     password: ['', [Validators.required, Validators.minLength(6),  
    //       Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{9,})/)]],

    //     confirmPassword: ['', Validators.required],
    //     acceptTerms: [false, Validators.requiredTrue]
    // }, {
    //     validator: MustMatch('password', 'confirmPassword')
    // });
    this.registerForm = this.formBuilder.group(
      {
        password: ["", [Validators.required, Validators.minLength(6),
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{6,12}$")]],

        confirmPassword: ["", Validators.required]
      },
      {
        validator: MustMatch("password", "confirmPassword")
      }
    );
  }

  //   onSubmit() {
  //     this.submitted = true;

  //     // stop here if form is invalid
  //     if (this.registerForm.invalid) {
  //       console.log("valid or not",this.registerForm)
  //         return;
  //     }
  //     else{
  // this.AuthService.changPassword(this.Newpassword).subscribe(

  //   data=>this.router.navigate(['/login']),

  //   error=>console.log(error)
  // )
  //   alert("hello")
  // }
  //     // display form values on success
  //    // alert("hello")

  // } 
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
 console.log("this.newPassword",this.Newpassword)
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log(this.registerForm);
      return;
    }
    else {
      this.AuthService.changPassword(this.Newpassword).subscribe(

        data => this.router.navigate(['/login']),

        error => console.log(error)

      )
      alert("PASSWORD UPDATED SUCCESSFULLY!! :-)\n\n");
    }

  
  }
  onReset() {
    // this.submitted = false;
    this.router.navigate(['/home/profile'])
    // this.registerForm.reset();
  }
  // password(formGroup: FormGroup) {
  //   const { value: password } = formGroup.get('password');
  //   const { value: confirmPassword } = formGroup.get('confirmpassword');
  //   return password === confirmPassword ? null : { passwordNotMatch: true };
  // }
  // onSubmit() {
  //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  // }
}
