import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Transaction } from 'src/blockchain.js';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {
  public balance = 0;
  public newTx: any;
  public walletKey: any;

  constructor(private blockchainService: BlockchainService, private toastrService: ToastrService, private router: Router) { 
    this.walletKey = blockchainService.walletKeys[0];
    this.balance = blockchainService.blockchainInstance.getBalanceOfAddress(this.walletKey.publicKey);
  }

  ngOnInit(): void {
    this.newTx = new Transaction();
  }

  createTransaction() {
    this.newTx.fromAddress = this.walletKey.publicKey;
    this.newTx.signTransaction(this.walletKey.keyObj);

    try {
      this.blockchainService.addTransaction(this.newTx);
    } catch (e: any) {
      this.toastrService.error('', e, {
        timeOut: 3000,
      });
      return;
    }

    this.toastrService.success('', 'Create transaction successfully!', {
      timeOut: 3000,
    });
    this.router.navigate(['/new/transaction/pending']);
    this.newTx = new Transaction();
  }
}
