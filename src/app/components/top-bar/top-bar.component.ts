import { Component } from '@angular/core';
import { Item } from '../../models/top-bar/item';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [SideBarComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  items: Item[] = []
  


}
