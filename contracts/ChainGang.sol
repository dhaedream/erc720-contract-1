// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "../node_modules/OpenZeppelin/contracts/token/ERC20/ERC20.sol";

contract Chaingang is ERC20 {
 constructor(uint256 initialSupply) public ERC20("ChainGang", "CGG") {
        _mint(msg.sender, initialSupply);
    }
}