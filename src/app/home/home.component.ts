import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Coffee Family';
  subtitle = 'Bienvenidos a Coffe Family, donde cada grano importa!';

  constructor() { }

  ngOnInit() {
  }

  

}
