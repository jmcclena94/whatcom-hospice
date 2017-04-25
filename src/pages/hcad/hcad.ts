import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-hcad',
  templateUrl: 'hcad.html'
})
export class HcadPage {

  constructor(
      public navCtrl: NavController,
      private transfer: Transfer,
      private file: File,
  ) { }

  fileTransfer: TransferObject = this.transfer.create();

  download() {
      const url = 'http://www.honoringchoicespnw.org/wp-content/uploads/2017/03/HCPNW-Advance-Directive-3rd-Version.pdf';

      this.fileTransfer.download(url, this.file.dataDirectory + 'hcad.pdf').then((entry) => {
          console.log('download complete: ' + entry.toURL());
      }, (error) => {
          console.log('error downloading');
      });
  }
}
