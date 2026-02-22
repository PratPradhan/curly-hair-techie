import random, sys

print('ROCK, PAPER, SCISSORs')
#These variables keep track of the number of wins, losses and ties.
wins =0
losses =0
ties=0

while True: #main game loop
    print('%s Wins, %s Losses, %s Ties' % (wins, losses, ties))
    while True:
        print('Enter your move: (r)ock, (p)aper, (s)cissors or (q)uit')
        player_move = input('>')
        if player_move == 'q':
            sys.exit() #quit the game
        if player_move == 'r' or player_move == 's' or player_move == 'p':
            break
        print('Type one of r, p, s or q.')

    #Display what the player chose:
    if player_move == 'r':
        print('ROCK Versus......')
    elif player_move == 's':
        print('SCISSORS Versus.....')
    elif player_move == 'p':
        print('PAPER Versus.....')

    #Display what the computer chose:
    move_number = random.randint(1,3)
    if move_number == 1:
        computer_move ='r'
        print('ROCK')
    elif move_number == 2:
        computer_move = 'p'
        print('PAPER')
    elif move_number == 3:
        computer_move = 's'
        print('SCISSORS')
    
    #Display and record win loss ties
    if player_move == computer_move:
        print('It is a tie!')
        ties = ties + 1
    elif player_move == 'r' and computer_move == 's':
        print('You win!')
        wins = wins + 1
    elif player_move == 'p' and computer_move == 'r':
        print('You win!')
        wins = wins + 1
    elif player_move == 's' and computer_move == 'p':
        print('You win!')
        wins = wins + 1
    elif player_move == 'r' and computer_move == 'p':
        print('You lose!')
        losses = losses + 1
    elif player_move == 'p' and computer_move == 's':
        print('You lose!')
        losses = losses + 1
    elif player_move == 's' and computer_move == 'r':
        print('You lose!')
        losses = losses + 1