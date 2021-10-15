## NFT Dapps
a simple NFT contract creation, and NFT web based application using [Moralis](https://moralis.io/).

### ✔️ Funcionality
- **Generate, Compile, & Deploy Smart Contract to Any Network**  
  all wrapped in simple command

- **Get NFTs (Web Based)**  
  get all nfts from token and own address

- **Upload NFT (Web Based)**  
  web based upload NFT to contract address

- **Transfer Token NFT (Web Based)**  
  change NFT ownership

### ⚓ Prerequisites
- Node JS >= 12.x
- Metamask wallet with browser integration
- Create Moralis account [https://moralis.io/](https://moralis.io/)

### 🗄️ Environment Variable [.env](.env.example)

| VARIABLE | DESCRIPTION | TYPE |
|--|--|--|
| BLOCKCHAIN_NETWORK | contract & token bc network | *enum:* development, bscMainnet, bscTestnet, ethMainnet, ethTestnet |
| WALLET_MNEMONIC | secret metamask paraphrase | *string* |
| WALLET_ADDRESS | metamask account address | *string* |
| MORALIS_APP_ID | moralis’s server app id | *string* |
| MORALIS_SERVER_URL | moralis's https server url | *string* |
| MORALIS_API_KEY | moralis api key | *string* |
| MORALIS_API_URL | moralis api url | *string* |
| CONTRACT_ADDRESS | connected contract/token address (automatically filled after deploy) | *string* |


### 💽 Generate NFT Token
```sh
$ npm run generate token
```
![Token Generate](https://blogger.googleusercontent.com/img/a/AVvXsEgg91FZQ7NCo3Xi5ud0MPP6c1KbTq-vBHmFZr9_6jlDGerngQJ7Pma2m-wcSXC0t3XPYEVgJf4xLU0E8Hk_T0mDV7QRNFymKteoJyba6BpYZBkry3vGdaBR8mgGdmfTLnHkrv1qQzBDxXvbd24H_rACtwGDecgcNcaQv4vI7dx6dPEvebNaTUlBrW8 "Token Generate")

### 💽 Deploy NFT Token to Blockchain Network
```sh
$ npm run token deploy
```
![Token Deploy](https://blogger.googleusercontent.com/img/a/AVvXsEjX5wunBDEiQJcbezxX0FV1hyajeGAMzN3WyppODrBIkoMtu0ur0RlOJGA-8gnvP6YrWtLnfLHKL2mZWA02_EEN0IU1evV62-SmJEpXQb0bofu0BtQb5IjY0w4X2RAQGKuIDUVYEV3RFh_BCxo1CHNeJMV4NB36ag3znYMI2qB1X2MmmXTJ9ElNTr8 "Token Deploy")

### 💽 Compile/Re-Compile Token
```sh
$ npm run token compile
```
![Token Compile](https://blogger.googleusercontent.com/img/a/AVvXsEiG0wrH44jsqMOKjOEaom6-My74HJzxTvxyP3jkP5VET7TS4wV7XzU6ZJc6FyFMnmxNx9cKQvFvSNtHgNboulE2p1hI7zltm43jbuBoZvJevhRe_V3692DbUv7RBUrE_r2tkf6yCw5aPAUpil0vaVV-NkAWWgnyI6NogVvxvDK8FblO6c_5JYLQKF0 "Token Compile")

### 💽 Run DApps Client
```sh
$ npm run client
```
![Open Client](https://blogger.googleusercontent.com/img/a/AVvXsEj0shTEUISb0aAmAxAqOZLbLo-wBA8AGRP_L5fKqr3fBzDAKlyhpHX1zJeSAcolpSlRN6TH3KJYAL4mvAnScP9jgqzgwmtvdh91RKO-YbtHpea40pgv3vHe11IAOB69_xEbzwo7-wMMIT-Ex_NrmuDOgyMEA3le0swHD1yfG-1i9pDL9ZoZSnNbANo "Open Client")

## 🔆 NFT Token Addresses List
**See More Info: [CONTRIBUTING.md](CONTRIBUTING.md)**

- [ArsanNFT (ANFT)](https://ropsten.etherscan.io/token/0x06FAd733beE63A50e4e27806edA7457B4F18EA08) - **[@mtegarsantosa](https://github.com/mtegarsantosa)**
