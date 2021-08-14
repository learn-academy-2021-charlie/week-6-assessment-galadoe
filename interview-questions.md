# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: If we forgot the foreign key, we would need to create a migration and then add the foreign key. foreign keys allows us to formalize data. It helps us to create references (links) among tables. We are only accepting information that we need

  Researched answer: a column or a set of columns in a table whose values correspond to the values of the primary key in another table. In order to add a row with a given foreign key value, there must exist a row in the related table with the same primary key value.



2. Which RESTful API routes must always be passed params? Why?

  Your answer: edit, show, update (patch & put), destroy. These are accessing the table and showing some type of change in the table of displaying

  Researched answer:
  show: show one instance of a resource
  new: typically used to render a form to create a resource
  edit: used to render a form to edit an existing resource
  update: update an existing resource
  delete: delete the resource



3. Name three rails generator commands. What is created by each?

  Your answer:
  1. rails g model: for generating the model for the app
  3. rails g migration: makes changes to the database
  3. rails g resource: creates almost everything we need to do in the view

  Researched answer:
  - rails g model: generates a new model
  - rails g migration: add column to existing model
  - rails g resource: it create a model, migration, empty controller, and resources: projects in routes.rb



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
  - As a user, when I create a new List, its create a new table
  - As a developer, I can take the users input
  - As a user, I can go in the table and make changes
  - As a user, I can add, edit, and delete the list
  - As a developer, the users changes are shown in the table (.all)
  - As a user, when I edit and update, it takes me back to home page
  - As a developer, I create a button that takes the user to the main page
  - As a user, I can see a List of what I've completed and what's uncompleted

  *honestly, I'm not 100% sure if I did this correctly. The document was helpful though
