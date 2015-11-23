# -*- coding: utf-8 -*-
"""
@author: mcgovey
"""

from pymongo import MongoClient
client = MongoClient()

client = MongoClient('localhost',3001)

db = client['meteor']

tasks = db.tasks

tasks.find_one()