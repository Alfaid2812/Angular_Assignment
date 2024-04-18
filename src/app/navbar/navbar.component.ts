import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    $(document).ready(function () {
      $('.navbar-toggler').click(function () {
        $('.navbar-collapse').toggleClass('show');
      });
    });
  }

}
