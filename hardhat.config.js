require("@nomiclabs/hardhat-waffle");
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()

module.exports = {
  networks:{
    hardhat : {
      chainId: 1337
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/8d09561fbdf24e71969b9d5f2b62a3a1",
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
