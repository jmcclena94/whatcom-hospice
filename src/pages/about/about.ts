import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TAHPage } from '../talk-about-hospice/talk-about-hospice'
import { TAIPage } from '../talk-about-illness/talk-about-illness'
import { AMIPage } from '../advanced-medical-interventions/advanced-medical-interventions'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  pushTAH(event) {
    this.navCtrl.push(TAHPage);
  }

  pushTAI(event) {
    this.navCtrl.push(TAIPage);
  }

  pushAMI(event) {
    this.navCtrl.push(AMIPage);
  }
}
