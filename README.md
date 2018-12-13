
# VBHS Coding Club Todo Application

###### We strive to change the world, one line at a time.

## Introduction
> The VBHS Coding Club is a group of High School students who enjoy coding and programming. One of our main
> focuses is to challenge ourselves, in order to learn as much as we can and be the best we are able to be.
> This is our first independent project, but there will be many more to come.

---
## How to edit this file
  *You do not need to be logged into this account to make changes*
  #### Getting local copy of the file
  1. Make sure you can see the project you want to make changes to
  2. Click the button that says *Fork*, then wait for it to copy to a personal repository
  3. Once the file is in personal repository, click the button that says *Clone or download* in your repository
  4. Copy the URL to the clipboard, then go into the *git bash*
  5. Type in the *git bash* `git clone` followed by the URL
  6. Once you navigate into the folder, make a new branch via `git checkout -b` followed by the name of the new branch
  7. Edit the file and make commits after each feature added
  8. Throughout the project, make sure the code is up-to-date with main repo with `git fetch upstream`
  9. Once the code has been fetched, go to the master branch `git checkout master`, then type `git merge upstream/master`

  #### Sending a Pull Request
  1. Make sure a changes are saved and commited
  2. In the *git bash* type `git push origin` followed by the name of the branch
  3. On *GitHub*, navigate to the location of the project, then press the button that says *New Pull Request*
  4. Click the button that says *Create pull request*
  4. Type in the box a brief summary of all the changes you made
  6. Click the button that says *Create pull request* to submit your request

## How to test this project on your local computer
 *Make sure Node.js is installed on your computer first*
 #### Running the file
 1. Once the file is on your local computer, open the command line and navigate into the directory
 2. Type `npm install` to install the node_modules needed to run the file
 3. After they have downloaded, type in `nodemon app.js` and press enter
 4. On your browser (chrome is recommended), go to the domain *localhost:3000* to access the webpage

 #### Restarting/stopping the server
   > Nodemon allows you to change the code without having to restart the server, but if the changes
   > do not appear on the webpage, type `rs` into the command line to restart the server. If you need to stop
   > the server press *Ctrl + c*.

## Note to Coding Club members
   > Once you have made a pull request and it has been accepted, try to add more features to your part of the website,
   > once a pull request has been made, it doesn't mean it's all over. Add more features, or try to streamline some of
   > the styles to make it cleaner. *There is always a way to make a project better.*
---
## Terminal Commands

  *Staging/Commiting*
  - `git add .` *adds all files to the staging area*
  - `git add [file name]` *add only that specific file to the staging area*
  - `git commit -m '[commit message]'` *pushes code to local repo*
  - `git status` *checks the staging/commiting status of the current branch*
  
  *Pulling/Pushing Code*
  - `git clone [GitHub link]` *makes a new directory for the repo that the link is connected to*
  - `git add upstream [GitHub link]` *adds a remote repo (not personal repo)*
  - `git fetch upstream` *fetches the data from remote upstream repo (on someone else's GitHub)*
  - `git merge upstream/master` *merges the data from the remote upstream repo*
  - `git pull [remote name]` *fetches code from remote repo and merges it to current branch*
  - `git push origin [branch name]` *pushes the code to personal remote repo*
  
  *Branch Manipulation*
  - `git branch` *lists all local branches*
  - `git branch -d [branch name]` *deletes branch, pass -D to force delete it (instead of -d)*
  - `git checkout -b [branch name]` *makes and navigates to a new branch*
  - `git checkout [branch name]` *navigates into preexisting branch*
