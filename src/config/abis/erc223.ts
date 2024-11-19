export const ERC223_ABI = [
  { "type": "constructor", "stateMutability": "nonpayable", "inputs": [] },
  {
    "type": "event",
    "name": "Approval",
    "inputs": [
      { "type": "address", "name": "owner", "internalType": "address", "indexed": true },
      { "type": "address", "name": "spender", "internalType": "address", "indexed": true },
      { "type": "uint256", "name": "value", "internalType": "uint256", "indexed": false }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "AssignMinter",
    "inputs": [
      { "type": "address", "name": "minter", "internalType": "address", "indexed": false },
      { "type": "bool", "name": "status", "internalType": "bool", "indexed": false }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "DelegateChanged",
    "inputs": [
      { "type": "address", "name": "delegator", "internalType": "address", "indexed": true },
      { "type": "address", "name": "fromDelegate", "internalType": "address", "indexed": true },
      { "type": "address", "name": "toDelegate", "internalType": "address", "indexed": true }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "DelegateVotesChanged",
    "inputs": [
      { "type": "address", "name": "delegate", "internalType": "address", "indexed": true },
      { "type": "uint256", "name": "previousBalance", "internalType": "uint256", "indexed": false },
      { "type": "uint256", "name": "newBalance", "internalType": "uint256", "indexed": false }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "OwnershipTransferred",
    "inputs": [
      { "type": "address", "name": "previousOwner", "internalType": "address", "indexed": true },
      { "type": "address", "name": "newOwner", "internalType": "address", "indexed": true }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Transfer",
    "inputs": [
      { "type": "address", "name": "from", "internalType": "address", "indexed": true },
      { "type": "address", "name": "to", "internalType": "address", "indexed": true },
      { "type": "uint256", "name": "value", "internalType": "uint256", "indexed": false }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TransferData",
    "inputs": [{ "type": "bytes", "name": "", "internalType": "bytes", "indexed": false }],
    "anonymous": false
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{ "type": "bytes32", "name": "", "internalType": "bytes32" }],
    "name": "DELEGATION_TYPEHASH",
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{ "type": "bytes32", "name": "", "internalType": "bytes32" }],
    "name": "DOMAIN_TYPEHASH",
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }],
    "name": "allowance",
    "inputs": [
      { "type": "address", "name": "owner", "internalType": "address" },
      { "type": "address", "name": "spender", "internalType": "address" }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }],
    "name": "approve",
    "inputs": [
      { "type": "address", "name": "spender", "internalType": "address" },
      { "type": "uint256", "name": "amount", "internalType": "uint256" }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "assignMinter",
    "inputs": [
      { "type": "address", "name": "_minter", "internalType": "address" },
      { "type": "bool", "name": "_status", "internalType": "bool" }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }],
    "name": "balanceOf",
    "inputs": [{ "type": "address", "name": "account", "internalType": "address" }]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      { "type": "uint32", "name": "fromBlock", "internalType": "uint32" },
      { "type": "uint256", "name": "votes", "internalType": "uint256" }
    ],
    "name": "checkpoints",
    "inputs": [
      { "type": "address", "name": "", "internalType": "address" },
      { "type": "uint32", "name": "", "internalType": "uint32" }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{ "type": "uint8", "name": "", "internalType": "uint8" }],
    "name": "decimals",
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }],
    "name": "decreaseAllowance",
    "inputs": [
      { "type": "address", "name": "spender", "internalType": "address" },
      { "type": "uint256", "name": "subtractedValue", "internalType": "uint256" }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "delegate",
    "inputs": [{ "type": "address", "name": "delegatee", "internalType": "address" }]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "delegateBySig",
    "inputs": [
      { "type": "address", "name": "delegatee", "internalType": "address" },
      { "type": "uint256", "name": "nonce", "internalType": "uint256" },
      { "type": "uint256", "name": "expiry", "internalType": "uint256" },
      { "type": "uint8", "name": "v", "internalType": "uint8" },
      { "type": "bytes32", "name": "r", "internalType": "bytes32" },
      { "type": "bytes32", "name": "s", "internalType": "bytes32" }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{ "type": "address", "name": "", "internalType": "address" }],
    "name": "delegates",
    "inputs": [{ "type": "address", "name": "delegator", "internalType": "address" }]
  },
  { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "disableSetup", "inputs": [] },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }],
    "name": "getCurrentVotes",
    "inputs": [{ "type": "address", "name": "account", "internalType": "address" }]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }],
    "name": "getPriorVotes",
    "inputs": [
      { "type": "address", "name": "account", "internalType": "address" },
      { "type": "uint256", "name": "blockNumber", "internalType": "uint256" }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }],
    "name": "increaseAllowance",
    "inputs": [
      { "type": "address", "name": "spender", "internalType": "address" },
      { "type": "uint256", "name": "addedValue", "internalType": "uint256" }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "mint",
    "inputs": [
      { "type": "address", "name": "_to", "internalType": "address" },
      { "type": "uint256", "name": "_amount", "internalType": "uint256" }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }],
    "name": "minters",
    "inputs": [{ "type": "address", "name": "", "internalType": "address" }]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{ "type": "string", "name": "", "internalType": "string" }],
    "name": "name",
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }],
    "name": "nonces",
    "inputs": [{ "type": "address", "name": "", "internalType": "address" }]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{ "type": "uint32", "name": "", "internalType": "uint32" }],
    "name": "numCheckpoints",
    "inputs": [{ "type": "address", "name": "", "internalType": "address" }]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{ "type": "address", "name": "", "internalType": "address" }],
    "name": "owner",
    "inputs": []
  },
  { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "renounceOwnership", "inputs": [] },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "rescueERC20",
    "inputs": [
      { "type": "address", "name": "token", "internalType": "address" },
      { "type": "address", "name": "to", "internalType": "address" }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }],
    "name": "setup_mode",
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "pure",
    "outputs": [{ "type": "string", "name": "", "internalType": "string" }],
    "name": "standard",
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{ "type": "string", "name": "", "internalType": "string" }],
    "name": "symbol",
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }],
    "name": "totalSupply",
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }],
    "name": "transfer",
    "inputs": [
      { "type": "address", "name": "recipient", "internalType": "address" },
      { "type": "uint256", "name": "amount", "internalType": "uint256" },
      { "type": "bytes", "name": "data", "internalType": "bytes" }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }],
    "name": "transferFrom",
    "inputs": [
      { "type": "address", "name": "sender", "internalType": "address" },
      { "type": "address", "name": "recipient", "internalType": "address" },
      { "type": "uint256", "name": "amount", "internalType": "uint256" }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "transferOwnership",
    "inputs": [{ "type": "address", "name": "newOwner", "internalType": "address" }]
  }
] as const;
