import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {

  public listTransactions: any = [];

  constructor(private blockchainService: BlockchainService) { 
    this.listTransactions = blockchainService.getAllTransactions();
  }

  ngOnInit(): void {
  }

}
