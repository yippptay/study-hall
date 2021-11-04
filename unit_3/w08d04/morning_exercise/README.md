![](/ga_cog.png)

# Collaborating with GitHub
## Intro
GitHub allows for amazing collaboration to happen! For this weekend's homework, you will be asked to complete the task in groups of 2-3. For this morning’s exercise, you will work together in those groups to get setup for collaboration to go smoothly.
## Deliverables
### Bookmark'd Homework 

Using collaboration via GitHub, each group will create a new repo **outside the class repo** and collaborate to complete the Bookmark'd homework. Each person must make significant contributions to the functionality of the homework to get a passing grade.

The bookmark'd assignment can be found [here](../homework)

## Morning Exercise Goals:

- Set up the repo
- All members add something to the README.md
- Make a functioning `server.js` file
  - Remember your npm modules etc...
- Make sure everyone has a very basic server running via one member writing the `server.js` and sharing the file via GitHub/git work flow
- You will have two branches to work with for the morning exercise. The `master` branch is 'production quality' code it should be bug and error free - only push functioning code here. You will also have a dev branch - members should be merging their code together on the `dev` branch - then checking that their code works together. If it does, push it to `master` if it doesn't work, fix the code and try again.

---

## Setup

### Make a plan/assign tasks
- [Read over the homework together once again so you can start to discuss who will do what and plan](../homework)
- To be sure everyone is getting practice pulling and pushing as you work, be sure to keep communication open on who is working on what task
- _Note:_ It is fine for the group to screenshare and work on one file simultaneously - feel free to create a way of working together that will help you get the deliverable complete.

### Delegate the roles

- Choose _one member_ that will make the one GitHub repo **OUTSIDE** the class repository - this person will be 'the owner' for the purpose of this morning exercise
    - Other members will be known as 'collaborators'
- The collaborators will **clone** this repo onto their local computer
    - Reminder: you will be working within the same repo, so the collaborators do **not** need to fork the repo - only clone!
- _Note:_ This is a simplified workflow that is appropriate for a homework/group unit project for SEI. In a job environment, you'll likely see much more complex workflows. That's ok! Choose the right tools for the job, don't over engineer for the task at hand and don't be like Kath and Dave from Portlandia:  [Get the Gear](https://www.youtube.com/watch?v=R3SFqV0hMyo)

### THE OWNER: Create the GitHub Enterprise repo and add everyone else as collaborators
- [Create a new repository on GitHub Enterprise](https://git.generalassemb.ly/new)
- Name the repo `bookmarkd` 
- Make sure to make the repo public
- Check the `Initialize this repository with a README` checkbox
- Create your new repo!
- Go to the repo's settings tab (upper right next to insights, below the `star` button)
- Choose `Collaborators` on left menu
- Enter your GitHub Enterprise password
- Ask your partner(s) for their GHE handle
- Add them and they should be able to access the repo immediately! Give them the link to the repo
    - If not, GitHub Enterprise will send an email and they must respond in order to gain access to the repo
- Remember to `git clone` onto your computer OUTSIDE of the class repo to get your own local version 

### THE COLLABORATOR(S): Clone the repository and make sure you can make changes

**NOTE!** If there is more than one collaborator (i.e. you're in a group of 3), have one person do these steps at a time and then move on to the next collaborator

- Go to a location in your terminal that is OUTSIDE of the class repo in preparation for cloning the owner's repo
- Go to the repo the owner just created
- Choose the green `Clone or Download` button
- Copy the correct link to the clipboard
- Back in terminal, clone the repo: `git clone pasteurlhere`
- `cd` into the newly cloned repo
- Open it up in your code editor
- Add your name to the `README.md` and save it
- Back in terminal, type `git status` - you should see your modified README.md ready for `git add` and `git commit`
- Go ahead and `git add` and `git commit`
- Push your changes up using `git push origin master`
    - **NOTE** This is the ONLY time you should push directly to master! From this point forward, you should only push to your feature branches or the `dev` branch, then merge to master when needed. But for now we just want to be sure you have the ability to push/pull
- Check the repo on your browser and you should now see your changes to the README!

### ALL MEMBERS: Create dev branch

- In terminal, inside your new repo directory...
   - `git checkout -b dev`  - you should get a message confirming you are now `on branch dev`
   - `git pull origin master` - you should pull the changes from the master branch, even though you are now on the dev branch to update your code to the working functional code
   - check via your code editor that you all have the updated `README.md`
- Agree on who will write the `server.js` file

### ONE MEMBER AS DECIDED ABOVE: Create the API `server.js` 

- `mkdir bookmarkd_api`
- `cd bookmarkd_api`
- `touch server.js`
- `npm init` - be sure to finish the prompts before going to the next step
- `touch .gitignore`
- In your code editor, add the following to the `.gitignore` file:
    - `node_modules`
    - _it is critical to do this **BEFORE** adding/creating node modules via `npm install`_
- `npm install express`
- `git status`
    - you should see all your files (`server.js`, `package.json`, `package-lock.json`) available for `git add` and `git commit`.  You SHOULD NOT see `node_modules` being added!  If they are, double check your `.gitignore` file.

- Write a very basic `server.js`
  - Your server should be able to `res.send('Hello World')` to a `/` route at `localhost:3000`
    - *DO NOT* try to add more modules, create more routes etc. in an effort to 'get ahead' on the hw right now - Morning Exercise is for helping make sure everyone can collaborate on git/github - new group work always starts a little slow. Be patient and make sure you get things right and squash the little bugs before they become big headaches!
  - `git add`
  - `git commit`
  - `git push origin dev` - this will send your changes to the dev branch
  - Make a pull request via GitHub Enterprise to merge these changes into the master branch
  - Choose another teammate to check your work and if it all looks good (no merge conflicts, expected files uploaded)
  - Teammate merges (via GitHub Enterprise)

#### ALL MEMBERS: Pull changes, install the needed npm packages, make sure the server is running

 - Everyone should be on the `dev` branch (`git branch` to confirm)
 - `git pull origin master`
 - Everyone should have the `server.js` file, `.gitignore`, and the `package.json` and `package.lock` files
 - Only the person who created the server and had it running should have `node_modules`
 - Other collaborators should `npm install` and THEN should get the `node_modules` that way
 - Everyone should now be able to run `nodemon` and have their `localhost:3000` display `Hello World`
 
---

### Workflow
- Try to abide by the below workflow. You will make mistakes and that's ok - figure out how to move forward rather than to start over or do really hard to understand git commands we haven't covered. Keep practicing to get the work flow right!
![git/GitHub workflow](https://i.imgur.com/aAmxC0G.png)

### Commit Messages
- Making informative commit messages can be challenging especially when you are tired/stressed/pressed for time.  While you may remember what the message `asdfjkl;` meant and what you were working on - your collaborators won't.

### Next Steps

- Plan how you will tackle this project together
- Remember this is just a weekend homework. Keep it simple but make it watertight and polish it! This assignment's main goal is to help you all practice collaborating on projects.

### Resources
- [Class Wiki](https://git.generalassemb.ly/Software-Engineering-Immersive-Remote/SEIR-Nova/wiki)
- [Happy Fun Ball](../../w08d03/morning_exercise)
- [GitHub Guides](https://guides.GitHub.com/introduction/flow/?utm_source=onboarding-series&utm_medium=email&utm_content=read-the-guide-cta&utm_campaign=learn-GitHub-flow-email)
- [Another GitHub cheatsheet](https://education.GitHub.com/git-cheat-sheet-education.pdf)
