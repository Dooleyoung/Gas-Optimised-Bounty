const { expect } = require("chai");

describe("Gas Challenge Contract", () => {
  let gas_contract;

  beforeEach(async () => {
    const gasChallenge = await ethers.getContractFactory("gasChallenge");
    gas_contract = await gasChallenge.deploy();
    await gas_contract.deployed();
  });

  describe("Compute Gas", () => {
    it("Should return lower gas", async () => {
      await gas_contract.notOptimizedFunction();
      await gas_contract.optimizedFunction();
    });
  });

  describe("Check Sum Of Array", () => {
    it("Should return 0", async () => {
      // Run the optimized function to update the sum
      await gas_contract.optimizedFunction();

      // Get the sum of the array
      const sum = await gas_contract.getSumOfArray();

      // Assert that the sum is 0
      expect(sum.toNumber()).to.equal(0);
    });
  });
});
