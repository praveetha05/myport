import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { ColorDirective } from '../color.directive';

@Component({
  selector: 'app-project',
  imports: [CommonModule,FormsModule,ColorDirective],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  l:boolean=false;
  m:boolean=false;
  n:boolean=false;
  o:boolean=false;
  A:any=""
   B:any=""
    C:any=""
     D:any=""

  
  

 show(){
    this.l=true
    this.m=false
    this.n=false
    this.o=false
  this.A= {
  height: '50px'
};
   
  }
  two(){
    this.m=true
    this.l=false
     this.n=false
    this.o=false
      this.B= {
  height: '50px'
};

  }
   three(){
    this.n=true
    this.l=false
     this.m=false
    this.o=false
      this.C = {
  height: '50px'
};

  }
   four(){
    this.o=true
    this.l=false
     this.n=false
    this.m=false
      this.D = {
  height: '50px'
};

  }


  }







  




