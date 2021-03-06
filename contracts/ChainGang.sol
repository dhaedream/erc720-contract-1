// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ChainGang is ERC20 {
 constructor(uint256 initialSupply) ERC20("ChainGang", "CGG") {
        _mint(msg.sender, initialSupply * (10 ** decimals()));
    // constructor() public {
    //     _mint(msg.sender, 1000);
    }
}