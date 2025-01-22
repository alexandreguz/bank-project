import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Operation {
  date: string;
  type: string;
  amount: number;
  accountNumber: string;
}

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account.component.html',
})
export class AccountComponent implements OnInit {
  operations: Operation[] = [];
  balance: number = 0;

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const accountNumber = params['accountNumber'];
      if (accountNumber) {
        this.accountService.getOperations(accountNumber).subscribe(
          operations => {
            this.operations = operations;
            this.calculateBalance();
          }
        );
      }
    });
  }

  get sortedOperations() {
    return [...this.operations].sort((a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  private calculateBalance() {
    this.balance = this.operations.reduce((acc, op) => {
      return op.type === 'deposit'
        ? acc + op.amount
        : acc - op.amount;
    }, 0);
  }

  goToOptions() {
    this.router.navigate(['/options'], {
      queryParams: { accountNumber: this.route.snapshot.queryParams['accountNumber'] }
    });
  }
}