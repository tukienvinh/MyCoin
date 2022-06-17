import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-pending-transactions',
  templateUrl: './pending-transactions.component.html',
  styleUrls: ['./pending-transactions.component.scss']
})
export class PendingTransactionsComponent implements OnInit {

  public pendingTransactions: any = [];

  constructor(private blockchainService: BlockchainService, private toastrService: ToastrService, private router: Router) { 
    this.pendingTransactions = blockchainService.getPendingTransactions();
  }

  ngOnInit(): void {
  }

  minePendingTransactions() {
    this.blockchainService.minePendingTransactions();
    this.toastrService.success('', 'Block mined successfully!', {
      timeOut: 3000,
    });
    this.router.navigate(['/']);
  }
}
