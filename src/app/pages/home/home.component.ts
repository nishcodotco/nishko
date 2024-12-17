import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(){
    console.log("HOME COMPONENT => ")
  }
}
