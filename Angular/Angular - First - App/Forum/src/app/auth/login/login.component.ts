import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild(
    // 'form',
    NgForm, { static: true }) form!: ElementRef<HTMLInputElement>;

  // @ViewChild('files', { static: true }) files!: ElementRef<HTMLInputElement>;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService) {

  }

  loginHandler(form: NgForm): void {
    // console.log(this.files.nativeElement.files);
    if (form.invalid) { return; }

    this.authService.username = {
      username: 'John',
    } as any;

    const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';

    this.router.navigate([returnUrl]);
  }
}

