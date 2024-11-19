export const IDO_MIGRATE_ABI = [{"type":"event","name":"Migrate","inputs":[{"type":"address","name":"user","internalType":"address","indexed":false},{"type":"uint256","name":"soyAmount","internalType":"uint256","indexed":false},{"type":"uint256","name":"slothAmount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"SetPeriod","inputs":[{"type":"uint256","name":"endMigration","internalType":"uint256","indexed":false},{"type":"uint256","name":"soyRatio","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"SOY","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"addReserved","inputs":[{"type":"address[]","name":"users","internalType":"address[]"},{"type":"uint256[]","name":"amounts","internalType":"uint256[]"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"endMigration","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isOwner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isPause","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"rescueERC20","inputs":[{"type":"address","name":"token","internalType":"address"},{"type":"address","name":"to","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"amount","internalType":"uint256"}],"name":"reserved","inputs":[{"type":"address","name":"user","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setPause","inputs":[{"type":"bool","name":"pause","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setPeriod","inputs":[{"type":"uint256","name":"_endMigration","internalType":"uint256"},{"type":"uint256","name":"_soyRatio","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setSlothVesting","inputs":[{"type":"address","name":"_slothVesting","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"slothVesting","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"soyRatio","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"startMigration","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bytes4","name":"","internalType":"bytes4"}],"name":"tokenReceived","inputs":[{"type":"address","name":"_from","internalType":"address"},{"type":"uint256","name":"_value","internalType":"uint256"},{"type":"bytes","name":"","internalType":"bytes"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSlothMinted","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSoyReserved","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]}] as const;
