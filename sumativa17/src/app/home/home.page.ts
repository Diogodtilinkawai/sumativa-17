import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonInput, IonItem, IonLabel } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [FormsModule,IonHeader, IonToolbar, IonTitle, IonContent,IonButton,IonItem,IonLabel,IonInput,IonCard,IonCardHeader,IonCardContent,CommonModule,IonCardTitle],
})
export class HomePage {
  constructor(private router:Router , private authservice:AuthService, private alertController:AlertController) {}
  ngOnInit() {
  }
  email:string = '';
  password:string='';
  emailn:string='';
  passwordn:string='';
  login(){
    this.router.navigate(['login']);
  }
  async onSubmit()
  {
    const email =(document.getElementById('email') as HTMLInputElement).value;
    const password =(document.getElementById('password') as HTMLInputElement).value;
    if(this.validateEmail(email) && password)
    {
      try{
        await this.authservice.login(this.email,this.password);
        const alert = await this.alertController.create({
          header: 'Inicio de sesion exitoso',
          message: 'Bienvenido',
          buttons: ['OK']
        });
          await alert.present();
          this.router.navigate(['/home']);
      }catch(error){
        const alert = await this.alertController.create({
          header: 'Error',
          message: "Error al registrar",
          buttons: ['OK']
        });
        await alert.present();
      }
    }
    else {
      const alert=await this.alertController.create({
        header: 'Error',
        message: 'complete los campos',
        buttons: ['OK']
      });
      await alert.present();
    }
    this.router.navigateByUrl("login");
  }
  
  validateEmail(email:string):boolean{
    const emailpatern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailpatern.test(email);
  }
  async onRegister()
  {
    const email =(document.getElementById('emailn') as HTMLInputElement).value;
    const password =(document.getElementById('passwordn') as HTMLInputElement).value;
    if(this.validateEmail(email) && password)
    {
      try{
        await this.authservice.register(this.email,this.password);
        const alert = await this.alertController.create({
          header: 'Registro exitoso',
          message: 'Bienvenido',
          buttons: ['OK']
        });
          await alert.present();
          this.router.navigate(['/login']);
      }catch(error){
        const alert = await this.alertController.create({
          header: 'Error',
          message: "Error al registrar",
          buttons: ['OK']
        });
        await alert.present();
      }
    }
    else {
      const alert=await this.alertController.create({
        header: 'Error',
        message: 'complete los campos',
        buttons: ['OK']
      });
      await alert.present();
    }
    this.router.navigateByUrl("login");
  }
}
