import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-signup-client',
  templateUrl: './signup-client.component.html',
  styleUrls: ['./signup-client.component.scss']
})
export class SignupClientComponent implements OnInit{

  validateForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private notification: NzNotificationService
  ){}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      name: [null, [Validators.required]],
      phone: [null],
      lastname:[null, [Validators.required] ],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required]]
    });
      
  }

  submitForm() {

    this.authService.registerClient(this. validateForm.value).subscribe( res =>{
      this.notification.success(
        'SUCCESS',
        'Signup successfull',
        { nzDuration: 3000}
      );
      this.router.navigate(['/login']);
    }, error =>{
      this.notification.error(
        'ERROR',
        `${error.error}`,
        { nzDuration: 3000}
      )

    });

  }

}
