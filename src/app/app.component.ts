import { Component } from '@angular/core';
import { BlockchainService } from './services/blockchain.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mycoin';
  public myAddress: any;

  constructor(public blockchainService: BlockchainService) { 
    this.myAddress = blockchainService.walletKeys[0].publicKey;
  }
}
