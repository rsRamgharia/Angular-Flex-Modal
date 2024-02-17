import { Component } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  constructor(private modalService: ModalService) { }

  closeModal() {
    this.modalService.closeModal()
  }
}
