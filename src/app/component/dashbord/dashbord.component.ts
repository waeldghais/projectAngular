import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    let token = localStorage.getItem("mytoken")

    if (token == null) {
      this.router.navigateByUrl("/login")
    }
  }

}
