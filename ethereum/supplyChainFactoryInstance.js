import web3 from "./web3";
import supplyChainFactory from "../build/contracts/SupplyChainFactory.json";


const factoryContractAccountAddress =
  "0x46e7e9759ea5362832277428b15851e1bd2c8c97"; 
const supplyChainFactoryInstance = new web3.eth.Contract(
  supplyChainFactory.abi,
  factoryContractAccountAddress
);


export default supplyChainFactoryInstance;
