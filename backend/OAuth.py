#!/usr/bin/env python
# coding: utf-8

# This is example of OAuth being used.
# 
# In order to adapt to the project, first everyone needs to get client ID and secret.
# 
# Then redirect_uri should be set to page of website and authorization automatically collected

# In[ ]:


from requests_oauthlib import OAuth2Session

# OAuth 2.0 endpoints for the provider (e.g., Google)
authorization_base_url = 'https://accounts.google.com/o/oauth2/auth'
token_url = 'https://accounts.google.com/o/oauth2/token'

# OAuth 2.0 credentials
with open("secret.config", "r") as f:
    lines = f.readlines()

client_id = lines[0]
client_secret = lines[1]

# client_secret = None
# client_secret = None

# Define the scope of access requested
scope = ['https://www.googleapis.com/auth/userinfo.email', 'openid']

# Create OAuth2Session with scope
google = OAuth2Session(client_id, redirect_uri='https://localhost:8000/callback', scope=scope)

# Redirect user to Google's OAuth 2.0 authentication URL
authorization_url, state = google.authorization_url(authorization_base_url, access_type='offline')

print('Please go here and authorize:', authorization_url)

# Get the authorization response
authorization_response = input('Paste the full redirect URL here: ')

# Fetch the access token
google.fetch_token(token_url, authorization_response=authorization_response, client_secret=client_secret)

# Make authenticated request to Google API
profile_info = google.get('https://www.googleapis.com/oauth2/v1/userinfo').json()
print('Profile Info:', profile_info)

