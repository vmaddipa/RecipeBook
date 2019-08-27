import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  isLoading = false;
  subscription: Subscription = new Subscription();
  constructor(private authService: AuthService) {}

  ngOnInit() {}
  signUp(form: FormGroup, event: Event) {
    event.preventDefault();
    if (form.invalid) {
      return;
    }
    if (form.value.password !== form.value.confirmPassword) {
      return;
    }
    this.subscription = this.authService.signUp(form.value).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error)
    );
    console.log(form.controls.email.value);
    console.log(form.value.email);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
