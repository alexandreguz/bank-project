import { Component } from '@angular/core';
import { AccountCardComponent } from "../../account-card/account-card.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [AccountCardComponent, RouterLink],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

}
