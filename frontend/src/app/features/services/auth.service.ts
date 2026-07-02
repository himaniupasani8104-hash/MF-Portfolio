import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// Define the User interface to ensure type safety across your components
export interface User {
  name: string;
  email: string;
  role?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Update this URL to match your Express/Node.js backend endpoint
  private apiUrl = 'http://localhost:3000/api/auth';

  // BehaviorSubject holds the current user state. 
  // We initialize it with mock data so your UI works immediately.
  private currentUserSubject = new BehaviorSubject<User | null>({
    name: 'Admin User',
    email: 'admin@mfadmin.com'
  });

  constructor(private http: HttpClient) {}

  /**
   * Returns an observable of the current user.
   * This is exactly what the Header and Dashboard components are expecting.
   */
  getCurrentUser(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }

  // ---------------------------------------------------------
  // Backend Integration Methods (Ready for your Node.js API)
  // ---------------------------------------------------------

  /**
   * Authenticate the user against the backend.
   */
  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        // Assuming your backend returns a JWT token and a user object
        if (response && response.token) {
          localStorage.setItem('auth_token', response.token);
          this.currentUserSubject.next(response.user);
        }
      })
    );
  }

  /**
   * Log the user out and clear local state.
   */
  logout(): void {
    localStorage.removeItem('auth_token');
    this.currentUserSubject.next(null);
  }

  /**
   * Helper to get the token for HTTP Interceptors.
   */
  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }
}