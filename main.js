const {Blockchain, Transaction} = require('./src/blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('0461ab26c08b6bb3b2ef43251d8298dc91f6e834b195dfd80da533c5d67f7bec');
const myWalletAddress = myKey.getPublic('hex');

let myCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
myCoin.addTransaction(tx1);

console.log('\nStarting the miner...');
myCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of vinh is ', myCoin.getBalanceOfAddress(myWalletAddress));