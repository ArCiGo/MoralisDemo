# Moralis demo assessment

A technical assessment for the QA Engineer.

## The project 💻.

The following project was made using **TS + Playwright**. Review [here](https://www.notion.so/moralisweb3/Moralis-QA-Engineer-Practical-Exercise-2b0bb6274071805e815cd339a1281ab1) the assessment proposed. Review [here](./docs/Moralis.%20Technical%20assessment.pdf) the documentation created requested in the assessment.

This is a basic project to test the following endpoint: */wallets/{address}/history*

## Tools 🛠️.

* **playwright/test** v1.57.0
* **@types/node** v24.10.1
* **dotenv** v17.2.3
* **ethers** v6.15.0
* **playwright-schema-validator** v1.0.0

## Main project structure 🗂️.

```bash
.
├── tests/
│   ├── api/
│   │   └── get_wallets_address_history.spec.ts
│   ├── data/
│   │   └── getWalletsAddressHistoryResponse.ts
│   └── schemas/
│       └── getWalletsAddressHistorySchema.json
├── package.json
└── playwright.config.ts
```

## Setup ⚙️.

1. Open your favorite terminal (or you can use the terminal provided by your favorite IDE).
   1. Clone the repository on your computer at any path you prefer.-
        
        ```bash
        > git clone https://github.com/ArCiGo/MoralisDemo.git
        ```
2. In the path you cloned the repository, open the project folder and install the packages.-
   ```bash
   > cd MoralisDemo
   > npm i
   ```
3. **FOR DEMO PURPOSES**. If you want to execute the tests locally, create a file called **.env**, at a root level, with the following content:
    ```bash
    API_BASE_URL=https://deep-index.moralis.io/api/v2.2/
    WALLET_ADDRESS=0xcB1C1FdE09f811B294172696404e88E658659905
    MORALIS_API_KEY=[YOUR_AWESOME_MORALIS_API_KEY]
    ```
## Executing the tests ⚡️.

```bash
# If you want to execute the tests using the Playwright GUI, you can execute the following command.-
> npm run test:open:ui
# If you just want to execute the tests using the CLI, you can execute the following command.-
> npm run test
```

When both commands are executed, the playwright-report and test-results folders are generated. 