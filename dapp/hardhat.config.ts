import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  paths: {
    artifacts : './src/artifacts', // for contracts
  },
  networks : {
    hardhat: {
      chainId: 1337 // for metamask
    }
  }
};

export default config;
