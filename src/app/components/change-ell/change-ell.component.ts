import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-change-ell',
  templateUrl: './change-ell.component.html',
  styleUrls: ['./change-ell.component.css']
})
export class ChangeEllComponent implements OnInit {
  form: FormGroup;
  @Input() ell: any;

  @Output() closePopup = new EventEmitter();
  @Output() onSuccess = new EventEmitter();


  constructor(
    private http: HttpService,
  ) { }

  ngOnInit(): void {
    this.generateForm();
    console.log( this.ell )
  }

  generateForm(){
    let disabled = false;

    this.form = new FormGroup({
      name: new FormControl( { value: this.ell ? this.ell.name : '', disabled: disabled }, [ Validators.required ] ),
      price: new FormControl( { value: this.ell ? this.ell.price : '', disabled: disabled }, [ Validators.required, Validators.pattern('[0-9]*') ] ),
      weight: new FormControl( { value: this.ell ? this.ell.weight : '', disabled: disabled }, [ Validators.required, Validators.pattern('[0-9]*') ] ),
      stock: new FormControl( { value: this.ell ? this.ell.stock : '', disabled: disabled }, [ Validators.required, Validators.pattern('[0-9]*') ] ),
      madeBy: new FormControl( { value: this.ell ? this.ell.madeBy : '', disabled: disabled }, [ Validators.required ] ),
      article: new FormControl( { value: this.ell ? this.ell.article : '', disabled: disabled }, [ Validators.required ] ),
      category: new FormControl( { value: this.ell ? this.ell.category : 'phone', disabled: disabled }, [ Validators.required ] )
    })
  }

  
  async deleteEll(){
    await this.http.deleteItem(this.ell.id).then( () =>{
      this.onSuccess.emit();
      this.closePopup.emit();
    });
  }

  async postEll(){
    await this.http.postItem( this.form.value ).then( () => {
      this.onSuccess.emit();
      this.closePopup.emit();
    });
  }

  async putEll(){
    await this.http.putItem( this.ell.id, this.form.value ).then( () => {
      this.onSuccess.emit();
      this.closePopup.emit();
    });
  }

}
