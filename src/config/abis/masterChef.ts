export const MASTERCHEF_ABI = [
  {
    "inputs": [
      { "internalType": "address", "name": "_rewardsToken", "type": "address" },
      { "internalType": "address", "name": "_localFarm_implementation", "type": "address" }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "address", "name": "_localFarm", "type": "address" },
      { "indexed": false, "internalType": "address", "name": "_lpToken", "type": "address" },
      { "indexed": false, "internalType": "uint32", "name": "_multiplier", "type": "uint32" }
    ],
    "name": "AddLocalFarm",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "uint256", "name": "_thisChainMultiplier", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "_cloTotalMultipliers", "type": "uint256" }
    ],
    "name": "ChangeGlobalMultiplier",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "address", "name": "oldImplementation", "type": "address" },
      { "indexed": false, "internalType": "address", "name": "newImplementation", "type": "address" }
    ],
    "name": "ChangeLocalFarm_implementation",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "address", "name": "_localFarm", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "_oldMultiplier", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "_newMultiplier", "type": "uint256" }
    ],
    "name": "ChangeMultiplier",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "uint256", "name": "oldAmount", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "newAmount", "type": "uint256" }
    ],
    "name": "ChangeTokenPerYear",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" },
      { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [{ "indexed": false, "internalType": "address", "name": "_localFarm", "type": "address" }],
    "name": "RemoveLocalFarm",
    "type": "event"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_lpToken", "type": "address" },
      { "internalType": "uint32", "name": "_multiplier", "type": "uint32" }
    ],
    "name": "addLocalFarm",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_localFarmAddress", "type": "address" },
      { "internalType": "uint32", "name": "_multiplier", "type": "uint32" }
    ],
    "name": "changeMultiplier",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "newAmount", "type": "uint256" }],
    "name": "changeTokenPerYear",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "cloTotalMultipliers",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "_farmAddress", "type": "address" }],
    "name": "farmExists",
    "outputs": [{ "internalType": "bool", "name": "_exists", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "_farm", "type": "address" }],
    "name": "getAllocationX1000",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "_localFarmAddress", "type": "address" }],
    "name": "getLocalFarmId",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getRewardPerSecond",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "_localFarmAddress", "type": "address" }],
    "name": "getlastPayment",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isOwner",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "lastAddedFarmIndex",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "name": "localFarmId",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "localFarm_implementation",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "name": "localFarms",
    "outputs": [
      { "internalType": "address", "name": "farmAddress", "type": "address" },
      { "internalType": "uint256", "name": "multiplier", "type": "uint256" },
      { "internalType": "uint256", "name": "lastPayment", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "_localFarmAddress", "type": "address" }],
    "name": "mintFarmingReward",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "name": "nextMint",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "next_payment",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "paymentDelay",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "_localFarmAddress", "type": "address" }],
    "name": "removeLocalFarmByAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  {
    "inputs": [{ "internalType": "address", "name": "_farm", "type": "address" }],
    "name": "rewardMintingAvailable",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "rewardsToken",
    "outputs": [{ "internalType": "contract IMintableToken", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_thisChainMultiplier", "type": "uint256" },
      { "internalType": "uint256", "name": "_cloTotalMultipliers", "type": "uint256" }
    ],
    "name": "setGlobalMultipliers",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "_localFarm_implementation", "type": "address" }],
    "name": "setLocalFarm_implementation",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "thisChainMultiplier",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "tokensPerYear",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalMultipliers",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;
