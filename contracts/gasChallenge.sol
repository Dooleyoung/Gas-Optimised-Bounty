// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract gasChallenge {
    uint[10] numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    uint sum;

    function getSumOfArray() public view returns (uint256) {
        return sum;
    }

    function optimizedFunction() public {
        for (uint i = 0; i < numbers.length; i++) {
            numbers[i] = 0;
        }
        sum = 0; // Update the sum after modifying the array
    }

    function notOptimizedFunction() public {
        for (uint i = 0; i < numbers.length; i++) {
            numbers[i] = 0;
        }
        sum = 0; // Update the sum after modifying the array
    }
}
