import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userService: any;
  router: any;


  constructor() { }

  ngOnInit(): void {
  }
  onSignIn(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email
    const password = form.value.password
    this.userService.signIn(email, password).subscribe((data: any) => {
      this.router.navigate([''])
      console.log(data)
    }, (error: any) => {
      console.log(error)
    })

    form.reset()
  }
}
