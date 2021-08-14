# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# this is where we are defining the methods the RESTful routes
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # we create an instances that is pluarlized and assign it to get all the model table value
    @posts = BlogPost.all
  end

  def show
    # ---3)
    # we use the .find to go in the model and individual return the tables one by one with the parameters
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # this method is self explanatory; it allows us to create a new model
  def new
    @post = Post.new
  end

  def create
    # ---5)
    # first we want to create a private, which will be the name of the parameter. We check to see if it is meeting the private method parameter that are required. If the conditions are met, we create the post and redirect it to where we want it to go (I hope that made sense)
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)
  # this allows us to in a specific table in the model and edit it (if I am understanding it correctly)
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # the edit method and the update method goes together. Once we edit something and want to save those changes, we update it. To update it, it has to meet the same params as creating it
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      # this is being redirected back to the show (I am a little stuck between the index, show, or create)
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  private
  def blog_post_params
    # ---10)
    # this is just telling the user, if they want to creae a new table, they need to include these information in order for it work
    params.require(:blog_post).permit(:title, :content)
  end
end
