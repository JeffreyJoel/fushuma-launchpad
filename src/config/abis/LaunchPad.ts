export const Launchpad_ABI = [
    {
      "inputs": [],
      "name": "ERC1167FailedCreateClone",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "buyer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "ICO_id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountPaid",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountBought",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "bonus",
          "type": "uint256"
        }
      ],
      "name": "BuyToken",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "ICO_id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "refund",
          "type": "uint256"
        }
      ],
      "name": "CloseICO",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "ICO_id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "vestingContract",
          "type": "address"
        }
      ],
      "name": "ICOCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_token",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "Rescue",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountToBuy",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "buyer",
          "type": "address"
        }
      ],
      "name": "buyToken",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "closeICO",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "counter",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "paymentToken",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "startPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "endPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "startDate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "endDate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "bonusReserve",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "bonusPercentage",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "bonusActivator",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "unlockPercentage",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "cliffPeriod",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestingPercentage",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestingInterval",
                  "type": "uint256"
                }
              ],
              "internalType": "struct Launchpad.VestingParams",
              "name": "vestingParams",
              "type": "tuple"
            }
          ],
          "internalType": "struct Launchpad.ICOParams",
          "name": "params",
          "type": "tuple"
        }
      ],
      "name": "createICO",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "fee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "feeReceiver",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "getICO",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "paymentToken",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "startPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "endPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "startDate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "endDate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "bonusReserve",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "bonusPercentage",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "bonusActivator",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "unlockPercentage",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "cliffPeriod",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestingPercentage",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestingInterval",
                  "type": "uint256"
                }
              ],
              "internalType": "struct Launchpad.VestingParams",
              "name": "vestingParams",
              "type": "tuple"
            }
          ],
          "internalType": "struct Launchpad.ICOParams",
          "name": "params",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "ICOOwner",
              "type": "address"
            },
            {
              "internalType": "uint8",
              "name": "icoTokenDecimals",
              "type": "uint8"
            },
            {
              "internalType": "address",
              "name": "vestingContract",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isClosed",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "totalSold",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalReceived",
              "type": "uint256"
            }
          ],
          "internalType": "struct Launchpad.ICOState",
          "name": "state",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "getValue",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "availableAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ICOid",
          "type": "uint256"
        }
      ],
      "name": "icoParams",
      "outputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "paymentToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "startPrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "endPrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "startDate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "endDate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "bonusReserve",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "bonusPercentage",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "bonusActivator",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "unlockPercentage",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "cliffPeriod",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "vestingPercentage",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "vestingInterval",
              "type": "uint256"
            }
          ],
          "internalType": "struct Launchpad.VestingParams",
          "name": "vestingParams",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ICOid",
          "type": "uint256"
        }
      ],
      "name": "icoState",
      "outputs": [
        {
          "internalType": "address",
          "name": "ICOOwner",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "icoTokenDecimals",
          "type": "uint8"
        },
        {
          "internalType": "address",
          "name": "vestingContract",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "isClosed",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "totalSold",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalReceived",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "vestingImplementation_",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "feeReceiver_",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isPaused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        }
      ],
      "name": "rescueTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "fee_",
          "type": "uint256"
        }
      ],
      "name": "setFee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "feeReceiver_",
          "type": "address"
        }
      ],
      "name": "setFeeReceiver",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "pause",
          "type": "bool"
        }
      ],
      "name": "setPauseLaunchpad",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "vestingImplementation_",
          "type": "address"
        }
      ],
      "name": "setVestingImplementation",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "tokenReceived",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        }
      ],
      "name": "vestingContracts",
      "outputs": [
        {
          "internalType": "address",
          "name": "vestingContract",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "vestingImplementation",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]