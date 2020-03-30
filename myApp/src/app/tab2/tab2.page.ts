import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService
  ) { }

  ngOnInit() {
    if (this.authService.userDetails()){
    } 
    else {
      this.navCtrl.navigateBack('login');
    }
  }

}
