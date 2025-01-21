import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-initial-loading',
  standalone: true,
  imports: [],
  templateUrl: './initial-loading.component.html',
  styleUrls: ['./initial-loading.component.css']
})
export class InitialLoadingComponent {
  // Variable de estado
  isLoading = true;

  // Output para emitir el estado
  @Output() isLoadingChange = new EventEmitter<boolean>();

  // Método para cambiar y emitir el estado
  toggleLoading() {
    this.isLoading = !this.isLoading;
    this.isLoadingChange.emit(this.isLoading); // Emitiendo el nuevo estado
  }

  // Método para emitir el estado actual al inicializar
  emitInitialState() {
    this.isLoadingChange.emit(this.isLoading);
  }

  // Llamar al método al iniciar el componente
  ngOnInit() {
    this.emitInitialState();
  }
}
