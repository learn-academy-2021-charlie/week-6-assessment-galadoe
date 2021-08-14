# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer:

  Researched answer:



2. Which RESTful API routes must always be passed params? Why?

  Your answer: edit, show, update (patch & put), destroy

  Researched answer:



3. Name three rails generator commands. What is created by each?

  Your answer:
  1. rails g model
  2. rails g controller
  3. rails g association

  Researched answer:



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students         
def index: it allows us to get everything from the table (.all)   

method="POST"   /students         
def create: It allows us to create tables with attributes and we can set params as well. For us to check if things are valid or not

method="GET"    /students/new     
def new: It creates a new table

method="GET"    /students/2       
def show: It goes in the data and show us the table one by one

method="GET"    /students/edit/2    
def edit: allows us to go in the table and edit some of the params

method="PATCH"  /students/2      
def update: after we've gone in the table and edited it, we update the new changes

method="DELETE" /students/2      
def destroy: goes in the table, allows us to get the table one by one and delete (destroy) which table we want



5. As a developer, you want to make an application that will help you manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
  - As a user, I see a Header that says create List
  - As a user, I can create a new List 
