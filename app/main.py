# -*- coding: utf-8 -*-
"""
Created on Wed Apr 17 10:11:19 2024

@author: myang
"""
from fastapi import FastAPI, Request
from pymongo import MongoClient
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None

class Database():
    def __init__(self):
        #CONNECTION_STRING = "mongodb+srv://user:pass@cluster.mongodb.net/myFirstDatabase"
        #client = MongoClient(CONNECTION_STRING)
        client = MongoClient()
        self.client = client
        self.db = client["test-collection"]
        
    def insert(self, post):
        posts = self.db.posts
        post_id = posts.insert_one(post.dict()).inserted_id
        return post_id
    
    def find_one(self, query=None):
        posts = self.db.posts
        if query:
            return posts.find_one(query)
        return posts.find_one({'_id': 0})

app = FastAPI()
db = Database()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/items/")
async def get_item():
    item = db.find_one()
    return item

@app.post("/items/")
async def create_item(item: Item):
    db.insert(item)
    return item

@app.get("/{item_id}")
async def read_item(item_id: str, q: str | None = None, short: bool = False):
    item = {"item_id": item_id}
    if q:
        item.update({"q": q})
    if not short:
        item.update(
            {"description": "This is an amazing item that has a long description"}
        )
    return item