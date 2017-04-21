import { Component } from '@angular/core';
import { NavController, ActionSheetController, Platform } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-staff',
  templateUrl: 'staff.html'
})
export class StaffPage {

  constructor(
      public navCtrl: NavController,
      public platform: Platform,
      public actionsheetCtrl: ActionSheetController,
      private callNumber: CallNumber
  ) { }

  callGupreet() {
      let actionSheet = this.actionsheetCtrl.create({
          title: 'Gurpreet Dhillon',
          cssClass: 'action-sheets-basic-page',
          buttons: [
              {
                  text: 'Call',
                  icon: !this.platform.is('ios') ? 'call' : null,
                  handler: () => {
                      this.callNumber.callNumber('13602019279', true)
                        .then(() => console.log('Launched dialer!'))
                        .catch(() => console.log('Error launching dialer'))
                  }
              }
          ]
      });
      actionSheet.present();
  }

}
