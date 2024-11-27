require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/dGe01MFea8mS2vjn1UZUPtwfmQi9HaMo',
      accounts: ['355c10421fcbc1466548a57a0a99a42d91a186f8bd43f4d115bdf325080436cf'],
    },
  },
}; 