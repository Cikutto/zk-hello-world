# Mina Protocol zkApp Tutorial

In this tutorial, we will code a zkApp step by step, from start to finish.

We will write a basic smart contract that stores a number as on-chain state and contains logic to only allow this number to be replaced by its square (e.g. 2 -> 4 -> 16...). We will create this project using the Mina zkApp CLI, write our smart contract code, and then use a local Mina blockchain to interact with it.

Later tutorials will introduce further concepts and patterns. But we hope this helps you get started with SnarkyJS, zkApps, and programming with zero knowledge proofs. Then you can go further by reading the zkApps docs and additional tutorials.

To follow the same zkApp tutorial, proceed to the Mina Docs 
https://docs.minaprotocol.com/zkapps/tutorials/hello-world?utm_medium=blog&utm_source=minablog&utm_campaign=evergreen&utm_content=What-You-Need-To-Know-To-Build-zkApp

This template uses TypeScript.

## How to build

```sh
npm run build
```

## How to run tests

```sh
npm run test
npm run testw # watch mode
```

## How to run coverage

```sh
npm run coverage
```

## License

[Apache-2.0](LICENSE)
