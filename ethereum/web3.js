const HDWalletProvider = require("@truffle/hdwallet-provider");
import Web3 from "web3";
const mnemonic =
  "sure achieve weapon network main whip cabbage harsh bundle return alpha melt parade high regular";

const ropsten_network =
  "https://ropsten.infura.io/v3/3b20e43ba04c4106908fe4d6a115285f";
const provider = new HDWalletProvider(mnemonic, ropsten_network);
const web3 = new Web3(provider);

export default web3;
