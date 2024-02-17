import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injectable, Injector } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalComponentRef: ComponentRef<ModalComponent> | null = null

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private injector: Injector, private appRef: ApplicationRef) { }

  openModal(component: any, width: number = 50) {
    if (!this.modalComponentRef) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent)
      const modalComponentRef = componentFactory.create(this.injector);
      this.modalComponentRef = modalComponentRef;
      this.appRef.attachView(modalComponentRef.hostView)
      document.body.appendChild(modalComponentRef.location.nativeElement)
      this.modalComponentRef.instance.width = width
    }

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component)
    const componentRef = componentFactory.create(this.injector);
    if (this.modalComponentRef) {
      setTimeout(() => { // Ensure modal component is fully initialized before appending content
        this.modalComponentRef?.instance.modalBodyRef.nativeElement.appendChild(componentRef.location.nativeElement)
      });
    }
  }

  closeModal(): void {
    if (this.modalComponentRef) {
      this.appRef.detachView(this.modalComponentRef.hostView)
      this.modalComponentRef.destroy()
      this.modalComponentRef = null
    }
  }
}
