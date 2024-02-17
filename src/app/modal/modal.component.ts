import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements AfterViewInit {
  @Input() width: number = 50;
  @ViewChild('modalBody') modalBodyRef!: ElementRef

  ngAfterViewInit(): void {
    if (this.modalBodyRef) {
      // Content loaded, handle any logic here 😊
    }
  }
}
