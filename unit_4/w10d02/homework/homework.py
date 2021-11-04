count = 0
inputPhrase = input("Input your phrase: ")
inputTimes = input("How many times?: ")
ETH = 234.00

while count < int(inputTimes):
    print(inputPhrase)
    count += 1


def fizzb():

    fizz_counter = 1
    while fizz_counter < 100:
        if fizz_counter % 2 == 0 and fizz_counter % 3 == 0:
            print("FizzBuzz")
        if fizz_counter % 3 == 0:
            print("Fizz")
        if fizz_counter % 5 == 0:
            print("Buzz")
        print(fizz_counter)
        fizz_counter += 1


fizzb()  # call function


def crypto_conversion(amt):
    conversion_rate = 1 / ETH  # what one dollar is worth in BTC
    return amt * conversion_rate


dollar_amt = input("DOLLAR to ETH, input dollar amt: ")

print(crypto_conversion(int(dollar_amt)))
