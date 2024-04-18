import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  signOut() {
    localStorage.removeItem("token");
    this.authService.identityCheck();
    this.router.navigate(["/login"]);
  }
  isCollapsed = false;
  constructor(public authService: AuthService, private router: Router) {
    authService.identityCheck();
  }
}
