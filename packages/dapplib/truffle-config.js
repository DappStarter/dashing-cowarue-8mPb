require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note misery upon gesture neck flock gather'; 
let testAccounts = [
"0xf33e1e914a1abdf69067e8e194232be8bf1bbf51cf6fab255cdbcfdcc375b0a8",
"0x64e9c19f876e0c0452a78bf69b41e2e36ed490a32e6eb3abdf4002f688ab1fbe",
"0xb5262278440e343beac73601af8bb5eb86d19d0c1fe4cc14331a4a49a71d6351",
"0x233e46ca2c22590e4f043a88fb2e2a52654942b9a09a428c2dc84a515af95865",
"0x0f2fbe64ef6b2c41e91e67897962716b090dfee3aa53a6075f4be9f4bb9ba709",
"0x7cc265dcb203b67c2bde737829d393ec344dc75f919786243b26c38497e06473",
"0x1ebf7477d5e14e9b13c733b20d6a88d7d91a8ef007b3c5d198baef0ab3dd290d",
"0xe88c995efecc50d9adfc4f96b8ad3f4ca57ce5cf57515515cbf597b49c75db12",
"0x4dcf75a05ab9c68c3743b6e76fccf65aedfde944381203a0d3868cae30350d90",
"0x60fcfa487ce05a877bfa09aa7941b306dca56d2e8380140ff66c091f2b6d959f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

