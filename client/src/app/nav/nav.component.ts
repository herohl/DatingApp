import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  // currentUser$: Observable<User>;
  loggedIn: boolean;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    // this.currentUser$ = this.accountService.currentUser$;
    this.getCurrentUser();
  }

  // tslint:disable-next-line: typedef
  login(){
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.loggedIn = true;
    }, error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line: typedef
  logout(){
    this.accountService.logout();
    this.loggedIn = false;
  }

  // tslint:disable-next-line: typedef
  getCurrentUser() {
    this.accountService.currentUser$.subscribe(user => {
      this.loggedIn = !!user;
    }, error => {
      console.log(error);
    });
  }

}
