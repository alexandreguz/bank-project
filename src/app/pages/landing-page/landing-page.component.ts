import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="min-h-screen bg-gradient-to-b from-indigo-100 to-white flex flex-col items-center justify-center">
      <div class="text-center p-8">
        <h1 class="text-5xl font-bold mb-4 text-indigo-900">Welcome</h1>
        <div class="flex flex-col">
          <label class="text-xl text-gray-600 mb-2">Please, add your account number</label>
          <input [(ngModel)]="accountNumber" class="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <p *ngIf="showError" class="text-red-500 mt-2">Account number not found. Please try again.</p>
        </div>
        <button (click)="onSubmit()" class="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 mt-4">Send</button>
      </div>
    </div>
  `
})
export class LandingPageComponent {
  accountNumber: string = '';
  showError: boolean = false;

  constructor(
    private router: Router,
    private accountService: AccountService
  ) {}

  onSubmit() {
    if (this.accountNumber) {
      this.accountService.getOperations(this.accountNumber).subscribe({
        next: (operations) => {
          if (operations && operations.length > 0) {
            this.router.navigate(['/account'], { 
              queryParams: { accountNumber: this.accountNumber }
            });
          } else {
            this.showError = true;
          }
        },
        error: () => {
          this.showError = true;
        }
      });
    }
  }
}