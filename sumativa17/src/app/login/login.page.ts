import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonInput, IonItem, IonLabel, IonCheckbox } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [FormsModule,IonHeader, IonToolbar, IonTitle, IonContent,IonButton,IonItem,IonLabel,IonInput,IonCard,IonCardHeader,IonCardContent,CommonModule,IonCardTitle,IonCheckbox],
})
export class LoginPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  nombre:string = '';
  fecha:Date=new Date();
  items:any=[];
  agregar(){
    if (this.nombre && this.fecha)
    {
      this.items.push({nombre:this.nombre,fecha:this.fecha});
      this.nombre='';
      this.fecha=new Date();
    }
  }
  eliminar(index:number){
    this.items.splice(index,1);
  }

  logout(){
    this.router.navigate(['home']);
  }

}
