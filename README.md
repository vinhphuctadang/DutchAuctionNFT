# Dutch Auction for NFTs
---

## Features

- Create auction for nfts from different erc721 contracts

## Run ?

1. Setup environment

* nodejs

Used nodejs v10.21, installed using ``nvm``. 

To install nvm:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
nvm install 10.21
```

Learn more at ``https://github.com/nvm-sh/nvm``

Can also install from https://nodejs.org/en/

* ganache

Use Ganache-cli (docker container version) as a blockchain emulator

```
docker run -d -p 7777:8545 trufflesuite/ganache-cli
```

* install packages:

```
git clone https://github.com/vinhphuctadang/AuctionNFT
cd AuctionNFT
npm i
```

* install truffle 

```
npm i -g truffle
```
