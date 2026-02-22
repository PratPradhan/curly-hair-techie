today_is_opposite_day = True

#set
if today_is_opposite_day == True:
    say_it_is_opposite_day =True
else:
    say_it_is_opposite_day =False

#if it's opposite day. toggle say_it_is_opposite_day
if today_is_opposite_day == True:
    say_it_is_opposite_day = not today_is_opposite_day

#say what day it is:
if say_it_is_opposite_day == True:
    print('Today is opposite day!')
else:
    print('today is not opposite day')
