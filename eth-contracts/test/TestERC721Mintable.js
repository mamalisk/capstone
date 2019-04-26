const ERC721MintableComplete = artifacts.require('KostasCapstone');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
            for (let a = 10; a <= 19; a++) {
                await this.contract.mint(accounts[a],a, `http://kostas.io/${a}`);
            }
        })

        it('should return total supply', async function () { 
            const totalSupply = await this.contract.totalSupply();
            assert.equal(totalSupply, 10, "wrong total supply 😕");
        })

        it('should get token balance', async function () { 
            const balance = await this.contract.balanceOf(accounts[10]);
            assert.equal(balance, 1, "wrong balance");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            const tokenId = 11;
            const tokenURI = await this.contract.tokenURI(tokenId);
            assert.equal(tokenURI, `https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/${tokenId}`);
        })

        it('should transfer token from one owner to another', async function () { 
            const accountNo12 = await this.contract.ownerOf(12, {from: account_one});
            const accountNo13 = await this.contract.ownerOf(13, {from: account_one});
            await this.contract.transferFrom(accountNo12, accountNo13, 12, {from: accountNo12 });
            const newOwner = await this.contract.ownerOf(12, {from: account_one });
            assert.equal(newOwner, accountNo13, "transferring of token was unsuccessful");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            try {
                await this.contract.mint(accounts[21], 21, "http://kostas.io/21", {from: account_two });
                assert.fail();
            } catch (e) {
                // passed!
            }
        });

        it('should return contract owner', async function () { 
            const contractOwner = await this.contract.getOwner.call({from: account_one});
            assert.equal(contractOwner, account_one, "contract owner is not account_one");
        })

    });
})