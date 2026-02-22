
try:
    def collatz(number):
        if number % 2 ==0:
            result = number // 2
        else:
            result = 3 * number + 1
        
        print(result, end=' ')
        return result

    #input
    print('Enter number:')
    num = int(input())

    print(num, end=' ')

    #keep calling collatz() until result becomes 1
    while num !=1:
        num= collatz(num)
except Exception as e:
    print('Enter Integer')