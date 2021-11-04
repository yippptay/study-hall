import random  # for deck


class Player:  # function for checking player hand
    def sum_hand(self):
        return sum(map(lambda x: x.value, self.hand))


class House(Player):
    def __init__(self):
        self.name = "House"
        self.bankroll = 1000
        self.hand = []


class Human(Player):
    def __init__(self):
        self.name = None
        self.bankroll = 100
        self.hand = []


class Card:
    def __init__(self, value):
        self.value = value


deck = []  # deck creator


for _ in range(4):
    for num in range(2, 10):
        deck.append(Card(num))
    for _ in range(4):
        deck.append(Card(10))
    deck.append(Card(11))

random.shuffle(deck)

name = input("Input username: ")
human = Human()
house = House()
leaveGame = False


while True:  # game setup
    print(f"Welcome, {name}!")
    bet = int(input("Bet: "))

    human.hand.clear()  # clear deck
    house.hand.clear()
    human.hand.append(deck.pop())
    human.hand.append(deck.pop())  # deal cards

    print(f"Your hand is {human.hand[0].value} and {human.hand[1].value}.")

    house.hand.append(deck.pop())
    house.hand.append(deck.pop())  # deal cards

    result = human.sum_hand(), house.sum_hand()
    winner = None

    if result[0] == 21:
        winner = human
    elif result[0] > 21:
        winner = house
    elif result[1] < 21:
        if result[0] == result[1]:
            winner = None
        elif result[0] < result[1]:
            winner = house
        else:
            winner = human

    if human == winner:
        print("You won this hand.")
        loser = house

    elif house == winner:
        print("You lost this hand")
        loser = human

    winner.bankroll += bet
    loser.bankroll -= bet
    if human.bankroll < 0:
        print("You lose!")  # lose condition
        break

    elif house.bankroll < 0:  # win condition
        print("You win!")
        break

    elif not deck:  # win condition
        print("You're playing too much.")
        break

    else:  # player input
        response = None
        while response != "d" and response != "q":
            response = input("Choose d to deal, b to check bankroll, and l to leave: ")
            if response == "l":
                leaveGame = True
                break

            elif response == "d":
                break

            elif response == "b":
                print(f"Your bankroll is ${human.bankroll}")
    if leaveGame:
        break
