import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService,
    private router: Router,
    private authService: AuthService) {

  }

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe((result) => {
      localStorage.setItem('access_token', result.token);
      this.router.navigate(['/']);
    });
  }
}
