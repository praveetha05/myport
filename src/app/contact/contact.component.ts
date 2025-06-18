import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

FN:string=""
em:string=""



saveData(Lion:any){
  if(Lion.valid){
    alert('Message is send')
  }
  else{
    alert('Message is not Send')
  }
}

  


}
