import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transaction',
  standalone: true,
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent {
  @Input() type: 'deposit' | 'loan' | 'withdrawal' = 'deposit';

  get title(): string {
    switch(this.type) {
      case 'deposit': return 'Deposit Money';
      case 'loan': return 'Request Loan';
      case 'withdrawal': return 'Withdraw Money';
    }
  }

  get buttonText(): string {
    switch(this.type) {
      case 'deposit': return 'Deposit';
      case 'loan': return 'Request Loan';
      case 'withdrawal': return 'Withdraw';
    }
  }

  get labelText(): string {
    switch(this.type) {
      case 'deposit': return 'Amount to deposit';
      case 'loan': return 'Loan amount';
      case 'withdrawal': return 'Amount to withdraw';
    }
  }
}