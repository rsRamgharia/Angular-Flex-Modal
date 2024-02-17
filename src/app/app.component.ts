import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalService } from './modal.service';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ModalService]
})
export class AppComponent {
  constructor(private modalService: ModalService) { }

  openModal() {
    this.modalService.openModal(TestComponent, 60)
  }
}
