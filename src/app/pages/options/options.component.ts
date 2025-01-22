import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionComponent } from '../transaction/transaction.component';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [TransactionComponent],
  templateUrl: './options.component.html',
   
})
export class OptionsComponent {
  selectedOption: 'deposit' | 'loan' | 'withdrawal' | '' = '';

  constructor(private router: Router) {}

  goBack() {
    const params = new URLSearchParams(window.location.search);
    const accountNumber = params.get('accountNumber');
    
    this.router.navigate(['/account'], { 
      queryParams: { accountNumber }
    });
  }
}