def deco (func):
    def result(*args, **kwargs):
        print("----------------------")
        func(*args, **kwargs)
        print("----------------------")
    return result

@deco
def decorated(word):
    print(word)

decorated("Hello")