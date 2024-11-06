import { Component } from '@angular/core';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { AppRoutingModule } from '../../app-routing.module';
import { CommonModule } from '@angular/common';
import { AppModule } from '../../app.module';





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
