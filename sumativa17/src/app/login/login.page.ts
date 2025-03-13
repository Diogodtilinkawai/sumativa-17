import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonInput, IonItem, IonLabel, IonCheckbox } from '@ionic/angular/standalone';
import { TaskService, Task } from '../task.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [FormsModule,IonHeader, IonToolbar, IonTitle, IonContent,IonButton,IonItem,IonLabel,IonInput,IonCard,IonCardHeader,IonCardContent,CommonModule,IonCardTitle,IonCheckbox],
})
export class LoginPage implements OnInit {

  constructor(private router:Router, public taskService: TaskService) { }

  nombre:string = '';
  fecha:Date=new Date();
  items:any=[];
  tasks = {
    name: this.nombre,
    day: this.fecha.toString(),
    completed: false,
  }; 
  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.items = tasks;
    });
  }
  agregar(){
    if (this.nombre && this.fecha)
    {
      this.items.push({nombre:this.nombre,fecha:this.fecha});
      this.tasks = {
        name: this.nombre,
        day: this.fecha.toString(),
        completed: false,
      }; 
      this.nombre='';
      this.fecha=new Date();

      this.taskService.addTask(this.tasks);
    }
  }
  eliminar(index:number){
    this.items.splice(index,1);
    this.taskService.deleteTask(this.items[index].id);
  }
  editar(index:number){

    this.items[index].nombre=this.nombre;
    this.nombre='';
    this.fecha=new Date();
    this.taskService.updateTask(this.items[index].id,this
    .items);
  }

  logout(){
    this.router.navigate(['home']);
  }

}
