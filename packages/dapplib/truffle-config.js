require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remember mistake hope arch olympic someone'; 
let testAccounts = [
"0xdda15e6efdd4263469a0615ad8178939c845706ead2fd0fa271680ad944db183",
"0x2819531d4a0e14e9e44599c38febd451768003211acd2cfb3e492ff4abffee71",
"0x9e220d6da2f600d83073eaa4e3ff503960ce5dce677c30504ae4fd0761e5c39c",
"0xa08d74a18b7717f84b5f342059d69b7e5a902d7584a9ff59ed374aad8cd04501",
"0xcf3f1a038e32e0983b75dbf43707228986a0cc9de0d49a4d5151b17057c442d3",
"0xeeb08025a83b7f1d3d2519ea92110202bb32d6efcb0ea8e19b675a13decea084",
"0x8f8f226536c8acdc28fb373a931e5de992a47bcda67cee3cd4ed457fbaf84527",
"0x1d5295782f1fa9bdb71d5c203a2fef9f18f71c3abf47193aa4de1cb3c0c1586a",
"0xe57a489ca7db97dd7760aae410e2672f9fb08fb66f1feeafdd350c5bfb97c86e",
"0x6c5dd1c58904fe8ec9c35afe96cedefbafb4e0776a94318aff39a476411c9eb3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
