
# Contributing to Code
- Fork this repository
- Make any changes to code
- Open a pull request

# Hacktoberfest 2021 🥳 🎉
In order to enliven hacktoberfest 2021, we are open contribute to this repository by adding your first NFT token address to the list. If you new on Blockchain and/or NFT, it's a best time for you to learn how it's work. Just follow all these step.

## 🦊 Preparing Your Crypto Wallet

### 1. Install Metamask to your browser
Install **Metamask** extenstion to your browser.
[Mozilla Firefox](https://addons.mozilla.org/id/firefox/addon/ether-metamask/), [Chrome](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn).

### 2. Create crypto wallet (account) on Metamask
Register & create your **Metamask Address**.

### 3. Switch Metamask network to Ropsten Test Network
![image](https://user-images.githubusercontent.com/43356029/137452549-01945029-be12-4b35-922e-d9979dddff15.png)

### 4. Get some ETH coin from Faucet
Go to [Ropsten Faucet](https://faucet.ropsten.be/), enter your address and click *Send Ether*.
\
&nbsp;
## ✍️ Deploy Your NFT Token Address & Contribute

### 1. Fork this repository
Fork this repository to your github account.

### 2. Clone Your Forked Repository
```sh
$ git clone https://github.com/<YOUR-GITHUB-USERNAME>/nft-dapps.git
$ cd nft-dapps
```
Afterwards, rename `.env.example` to `.env`.

### 3. Change `.env` file
```
BLOCKCHAIN_NETWORK=ethTestnet

WALLET_MNEMONIC=<YOUR-METAMASK-PARAPHRASE>
WALLET_ADDRESS=<YOUR-METAMASK-ADDRESS>

MORALIS_APP_ID=
MORALIS_SERVER_URL=
MORALIS_API_KEY=

CONTRACT_ADDRESS=
```

### 4. Deploy Smart Contract & NFT Token to Network

```sh
$ npm install
$ npm run generate token
$ npm run token deploy
```

### 5. Commit your CONTRACT_ADDRESS to README.md

Copy generated **CONTRACT_ADDRESS** value from `.env`.  

![Screenshot from 2021-10-15 20-42-36](https://user-images.githubusercontent.com/43356029/137489622-f891bcb5-f2cc-4568-8b2b-acedcb453164.jpg)

Put it in `README.md`, under the **NFT Token Addresses List** with this formating:
```markdown

[<YOUR-NFT-NAME> (<YOUR-NFT-SYMBOL>)](https://ropsten.etherscan.io/token/<YOUR-CONTRACT-ADDRESS>) - [<YOUR-GITHUB-USERNAME>](<YOUR-GITHUB-LINK>)

```

### 6. Create Your PR!

### Recent Lists:

#### [README.md#NFT-Token-Addresses-List](README.md#-nft-token-addresses-list)
