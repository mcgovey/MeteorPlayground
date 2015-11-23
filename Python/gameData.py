# -*- coding: utf-8 -*-
"""
@author: mcgovey
"""

# import library
import nflgame

# store player stats without game details
#nflgame.combine(nflgame.games(2015)).csv('season2015.csv')


#import json

currYearGames = nflgame.games(2015)
allgames = nflgame.combine_game_stats(currYearGames)

#with open('json2015.txt', 'w') as outfile:
#    json.dump(allgames, outfile)

allgames.csv('season2015.csv')