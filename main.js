const {Blockchain, Transaction} = require('./src/blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('0461ab26c08b6bb3b2ef43251d8298dc91f6e834b195dfd80da533c5d67f7bec');
const myWalletAddress = myKey.getPublic('hex');

let myCoin = new Blockchain();

myCoin.minePendingTransactions(myWalletAddress);

const tx1 = new Transaction(myWalletAddress, 'address2', 100);
tx1.signTransaction(myKey);
myCoin.addTransaction(tx1);

myCoin.minePendingTransactions(myWalletAddress);

const tx2 = new Transaction(myWalletAddress, 'address1', 50);
tx2.signTransaction(myKey);
myCoin.addTransaction(tx2);

myCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of vinh is ', myCoin.getBalanceOfAddress(myWalletAddress));