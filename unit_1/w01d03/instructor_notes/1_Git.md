# Git - Keeping Track of Files

## Lesson Objectives

1. Add an ssh key to your github account
1. Describe what git is and what it does
1. Explain the difference between git and other versioning tools
1. Create a repository in github
1. Clone that repository
1. Stage Files
1. Commit Files
1. Push files
1. Pull changes from remote repo
1. Fork a repository
1. Pull changes from original repo
1. Create a pull request to original repository


##  Add an ssh key to your github account

- When you get tired of always entering your github password, you can use the ssh URL (as opposed to the https URL) when cloning a repo
- You'll need to also add what's called an ssh key to github https://help.github.com/articles/generating-an-ssh-key/
- Now you can use the ssh url when cloning instead of https

## Lets copy the student repository 
1. first lets change directories into our desktop and make a folder called dev
1. inside that folder lets clone git@git.generalassemb.ly:Software-Engineering-Immersive-Remote/SEIR-NOVA.git
1. If that works for you then you have made SSH Work

##  Describe what git is and what it does
![image](https://media.git.generalassemb.ly/user/15881/files/d333fe00-3d1c-11ea-9d2f-69c2a807b0cb)

- Git is just a tool that allows you to move project specific files from your "local" (or personal) computer to another internet-connected computer which is acting as a central location for your code.  This other computer is called a "remote repository."
- All other computers that want to contribute to this specific project, will use the same remote repository (central computer), but send files from their own local computers.
- Git functions just like a time machine...
	- This allows a user to keep a log of their local changes before finally pushing everything back to the remote repository
	- The user can also travel "back in time" to previous states that have been saved locally, but not yet pushed to the remote repository.  This is great for when something goes wrong
	- The process:
		1. Add files whose changes you want to be logged
		1. Log the changes of the files that were added (called making a "commit")
		1. Once all commits have been made, and you're ready to send your changes to the remote repo
			1. "pull" any changes that have been made to the repo since you last synced your local repo with the remote repo
			1. "push" your changes to the remote repo.

##  Create a repository in github

1. Go to https://git.generalassemb.ly
1. On the right click the green button that says "New Repository"
1. Give the repo a name and click Create

##  Clone that repository

1. Once you've created the repo, you'll be taken to repo page
1. In the "Quick setup" section, copy and paste **the SSH** url
1. Go to a suitable location in the terminal (let's do `~/dev/`) and type `git clone ` and paste the ssh url (e.g.`git clone git@git.generalassemb.ly:arthurbernierjr/everythingisawesome.git`)

##  Stage Files

`cd` into the repo and use `ls -a` to check for a `.git` repo

Now create `specific_file.txt` and make some changes to it.

Once you've finished making changes for the moment, it's time to tell git which files need to have their changes logged

- `git add specific_file.txt` will log all changes to the file specific_file.text
- `git add .` will log the changes to all files in the current working directory
- `git add some_dir/` will log the changes to all files in the some_dir directory
- `git add -A` will add all files in the local repo that have been modified

To see the status of which files are in the process of being committed use `git status`

##  Commit Files

Log the files, and give the log a description (or "message") so you can easily remember what was done

- `git commit -m "changed the database structure to allow for an email address for each user"`
- check your commits with `git log`

##  Push files

Push your changes to the remote repository

- `git push origin master`
- origin is the nickname of the remote repo.  Master is the name of the branch (covered later), this is usually master when you start out.

##  Pull changes from remote repo

Pull any changes others made to the repo into your local version of the repo

- `git pull origin master`

##  Fork a repository

Open source software is popular because the source code for an open source application is available for viewing on the internet.  If you want to play around with the code of an open source app on github, you can simply fork the repo and make changes to it there.

1. Find the class repo on github
1. In the upper right, click the `fork` button
1. Choose which user (or organization if you belong to any) should create the duplicated repo
1. Clone, add, commit, push as normal

##  Pull changes from original repo

Sometimes you want to get changes that have been made to the original repository

1. Add original remote repo with `git remote add upstream git@git.generalassemb.ly:arthurbernierjr/everythingisawesome.git`
	- `upstream` is a conventional name, it can be anything, though
	- update the URL to that of the original repo NOT your fork
1. Pull with `git pull upstream master`

## Create an issue for the original repository

Sometimes you want to send messages to the maintainers of the original repository

1. Go to the original repo on git.generalassemb.ly
1. Click on the "Issues" tab at the top
1. Click the green "New issue" button on the right
1. Enter a title and a comment
1. Click "Submit new issue"

##  Create a pull request to original repository

If you have made a change to your fork that you want to be integrated into the original repo, you'll have to ask the original repo owner to review and merge your changes into theirs.

1. Go to the original repo
1. Click the tab marked `Pull requests`
1. Click "New pull request"
1. Underneath "Compare changes" click "compare across forks"
1. For the "head fork" choose your fork.  Leave "base fork" as the original repo
1. Next to the "base fork" and "head fork" buttons are drop downs for which branch of your fork (compare) should be merged into which original repo branch (base).
1. Click "Create pull request"
