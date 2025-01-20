import { Component } from '@angular/core';
import { TransactionComponent } from '../transaction/transaction.component';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [TransactionComponent],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent {
  selectedOption: 'deposit' | 'loan' | 'withdrawal' | '' = '';
}