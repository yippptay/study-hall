#//////////////////////////////
# Create USD to BTC/LTC/XLM Converter
#//////////////////////////////
# BTC = Bitcoin
# LTC = Litecoin
# XLM = Stellar
# Get Prices from https://coinmarketcap.com/
# For more explanation of blockchain BitcoinBlockchainCrypto.com

def CryptoConver(amount,currency):
    if currency == "btc":
        conversionrate = 1/9500 #what one dollar is worth in BTC
        return amount * conversionrate #converting out dollars to bitcoin
    if currency == "ltc":
        conversionrate = 1/44 #what one dollar is worth in BTC
        return amount * conversionrate #converting out dollars to bitcoin
    if currency == "xlm":
        conversionrate = 1/.07 #what one dollar is worth in BTC
        return amount * conversionrate #converting out dollars to bitcoin
    print("only can convert into btc, ltc, xlm")



toconvert = input("How much USD would you like to convert? ") #returns input as a string
converto = input("Which currency to convert to? (btc, ltc, xlm) ")
print(CryptoConver(int(toconvert), converto)) #int() converts string into integer