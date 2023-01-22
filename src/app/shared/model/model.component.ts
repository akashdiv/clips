import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit, OnDestroy {
  @Input() modalID = '';

  constructor(
    public modal: ModalService,
    public el: ElementRef
    ) { }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }

  ngOnDestroy(){
    document.body.removeChild(this.el.nativeElement)
  }

  closeModal(){
    this.modal.toggleModal(this.modalID);
  }

}
