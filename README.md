# SA 8 
[deployed heroku url](https://sathvi-lab5-platform.herokuapp.com/)

[deployed surge url (different from lab 5)](http://sathvi-cs52-sa8.surge.sh/)

## Extra Credit
I extended the permissions system so that users can only edit their own posts after they sign in. To test this out, here are two accounts that I made a post with:

*email:* test@test.com

*password:* password

**and**

*email:* test2@test.com

*password:* password

--------------------

# Lab 5 (Server)

[deployed heroku url](https://sathvi-lab5-platform.herokuapp.com/)

[deployed surge url (different from lab 4)](http://sathvi-cs52-lab5.surge.sh/)

## What Worked Well
Overall, this lab and connecting the front end to the mongo database felt a bit easier than Lab 4, because the instructions were pretty straightforward. I also console-logged a bunch of things as I was working on this lab, and that helped me debug.

## What Didn't
I tried to implement the search functionality for ec, but I wasn't able to get it to work. I figured out how to set it up on the server side, but I was having trouble with the client-side of the search functionality.

## Extra Credit
I changed the way I stored tags to be an array instead of a string (I split tags by whitespace) and added a new artist name field. I also tried to implement the full-text search functionality using mongodb, but I wasn't able to get it to work (I commented out the code I have so far for the search functionality). Instead, I implemented searching using filtering, and I allow users to search for tags, artist names, and album titles. 

## Screenshots
Search Tags:

![search tags](https://github.com/dartmouth-cs52-20X/platform-api-sathvi-k/blob/master/search1.png)

Search Album & Artist names:

![search album & artist](https://github.com/dartmouth-cs52-20X/platform-api-sathvi-k/blob/master/search2.png)
