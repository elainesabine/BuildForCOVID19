import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  userEmail: string;

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService
  ) { }

  ngOnInit() {
    if (this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
      this.authService.getFirstName();
    } 
    else {
      this.navCtrl.navigateBack('login');
    }
  }

  accountSettings(){
    console.log("account settings");
  }

  logout(){
    this.authService.logoutUser()
    .then(res => {
      console.log(res);
      this.navCtrl.navigateBack('login');
    })
    .catch(error => {
      console.log(error);
    })
  }

}

