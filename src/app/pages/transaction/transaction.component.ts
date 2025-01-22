import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './transaction.component.html',
})
export class TransactionComponent {
  @Input() type: string = '';
  amount: number = 0;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  onSubmit() {
    const accountNumber = this.getAccountNumber();
    const data = {
      type: this.type,
      amount: this.amount,
      date: new Date(),
      accountNumber
    };

    this.http.post('http://localhost:5000/api/operations', data)
      .subscribe({
        next: () => {
          alert('Transaction successful!');
          this.router.navigate(['/account'], { 
            queryParams: { accountNumber }
          });
        },
        error: () => alert('Transaction failed. Please try again.')
      });
  }

  private getAccountNumber(): string {
    const params = new URLSearchParams(window.location.search);
    return params.get('accountNumber') || '';
  }
}