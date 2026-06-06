import { Component, computed, inject, signal } from '@angular/core';
import { AuthService } from './auth/auth-service';
import { LearningResources } from "./learning-resources/learning-resources";
import { Auth } from "./auth/auth";
import { AuthDirective } from "./auth/auth-directive";

@Component({
  selector: 'app-root',
  imports: [LearningResources, Auth, AuthDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 private authService = inject(AuthService)
 isAdmin = computed(() => this.authService.activePermission() == 'admin')
}
