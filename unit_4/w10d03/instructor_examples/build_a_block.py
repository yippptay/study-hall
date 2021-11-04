#//////////////////////////////
# Build A Block
#//////////////////////////////
# Goal: Build a Blockchain Object and Block Object

# Block Object
# Represents a list of verified transactions
# Can add to list of transactions (verify method)

class Block:
    def __init__(self):
        self.transactions = []
    def verifyTransaction(self, transaction):
        self.transactions.append(transaction)


# Blockchain Object
# Keeps track of individual blocks (block list) 
# Adds verified transactions to blocks (add completed transaction to current block)
# tracks wallets and methods (wallet list, add wallet method, transfer balances method)
# can be mined and when new block is generated, values added to miners wallet

class Blockchain:
    def __init__(self):
        self.blocks = [Block()] #The array of blocks
        # currentBlock = Block()
        self.miningAttempts = 0 ## attempts at mining the current block
        self.wallets = {} ## list of user wallets to hold current

    ## This function allows us to add a transaction to the current block
    def addTrans(self, transaction):
        self.blocks[-1].verifyTransaction(transaction)

    ## This function allows us to mine, on the third attempt a new block is created
    ## If not the third attempt, adds one to counter
    def mine(self):
        if (self.miningAttempts >= 3):
            self.blocks.append(Block())
            self.miningAttempts = 0
        else:
            self.miningAttempts += 1

    def newWallet(self, name): ## Creates a wallet for user with a 0 balance and add it to dictionary of user wallets
        self.wallets = {**self.wallets, **{name: 0}}


#-------------------------------------------
#testing the block class
# oneblock = Block()
# oneblock.verifyTransaction("Transferred 1 btc")
# print(oneblock.transactions)

Bitcoin = Blockchain() ## Create a New Blockchain

# for num in range(100): ## Loop 100 Times
#     Bitcoin.addTrans(f"Transaction {num}") ## Add a transaction based on loop number
#     Bitcoin.mine() ## mine, everything three loops, creates a new block
#
# print(Bitcoin.blocks) ## inspect the list of blocks
# print(Bitcoin.blocks[1].transactions) ##look at the transactions in the first block

Bitcoin.newWallet("Alex")
Bitcoin.newWallet("Arthur")
Bitcoin.newWallet("Ayla")
Bitcoin.newWallet("Jerrica")
print(Bitcoin.wallets)