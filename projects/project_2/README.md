![](/ga_cog.png)

# Project #2: Building Your First Full-Stack Application

## Attendance

There are no full day classes during project weeks, but we do expect you to be working on your project daily and be available during the usual class times (10AM - 6PM Eastern) for TA hours or any meetings with instructors as needed.

There are no attendance checks during this project week, except:

- **Wednesday, May 27**: You have outcomes as normal at 4:30 PM ET
- **Thursday, May 28**: Project presentation day! You're required to be in the class zoom starting at 10:00 AM Eastern

_Failure to make an attendance check will result in an unexcused absence for both morning and afternoon for that day._

## Technical Requirements

For this project, you will be making a full CRUD app using the technologies outlined below. When thinking of an app idea, try to frame the project in terms of trying to solve a "problem" and think about the purpose of the app, who would use it, etc. The problem doesn't have to be anything intense and can be something small and simple! For example: 

  >**Problem:** I have a huge enamel pin collection and want to organize it all in one place<br> 
  >**General App Idea/Purpose:** An app that allows me to catalogue all my pins by category <br>
  >**Who Would Use It:** Pin collectors

### &#x1F534; Mandatory to pass:
#### MVP - Minimum Viable Product

* A working full-stack application, built by you, using **Node.js, Mongoose, Express and  JSX**
* Adhere to the **MVC** file structure: Models, Views, Controllers
* At least one model with all 7 **RESTful routes** and full **CRUD**.
* :heavy_exclamation_mark: A git repository **not inside the class repo**. You can use your pages repo from last class.
* At **least one** Github commit per day. 
* **Be deployed online** and accessible to the public via **Heroku** We will go over the steps for deployment with Heroku during class on Tuesday.
* **A ``README.md`` file** with explanations of the technologies used, the approach was taken, unsolved problems, user stories, and notes to yourself so you can come back to your project later in the course and be able to pick up your train of thought, etc
* Have a **link to your hosted working app** in the **`README.md`** file in your github repo
* Must be all original work: [Review GA's Plagiarism Policy](https://git.generalassemb.ly/Software-Engineering-Immersive-Remote/SEIR-Nova/wiki/Student-Handbook#plagiarism-policy)

### &#x1F535; Stretch Goals (Not Mandatory):
#### Recommended Features

* Include authorization
* Have more than one model
  - Models can be unrelated 
  - Or, models can be related in a few different ways (one-to-one, one-to-many, many-to-many, for example)
    * [Mongo documentation on model relationships](https://docs.mongodb.com/manual/applications/data-models-relationships/)
    * [Mongoose documentation on sub-documents](https://mongoosejs.com/docs/subdocs.html)
* Include portfolio-quality styling
* Use a CSS framework 
* Inside Your `README.md`:
    * Include User Stories
    * Include **wireframes** that you designed during the planning process 

## Setup for Heroku Deployment

**Before you begin coding, create a new github repo (or use the one you created in class today), set up a basic express server, and deploy to Heroku**! It's always better to deploy early, and deploy often as soon as you get basic features working rather than waiting to deploy at the very end. It's easier to debug why deployments go wrong this way! 

Follow the steps from today for heroku deployment, or again you can just build your project in the app you deployed today! You can always change the name of your heroku project or github repo, just make sure you change your remote URL's if you do. 

Additionally... 

  - Alex has a [video on deploying express apps](https://www.youtube.com/watch?v=d1fk3P6tC3M&list=PLV0X85yx42J0rJGpxo4i_aQChdUGTk93H&index=3&t=0s), **but note** that it doesn't cover mLab so please don't forget to set that up as well! 
  - There are [deployment notes here](https://git.generalassemb.ly/Software-Engineering-Immersive-Remote/SEIR-Nova/blob/master/unit_2/w06d04/instructor_notes/HEROKU.md) 
  

:heavy_exclamation_mark: **REMEMBER:** For all projects, you will be creating the new repo's on [GitHub](https://github.com/), **not** GitHub Enterprise!

## Technical Demonstration

All projects will be presented to the class.  Your presentation should be:

* **Approximately 5-10 minutes in length** 
* Shows off all features of the app
* Explains the technical details
* Explains the technical challenges
* Explains which improvements you might make
* Talk about one new thing you learned during this project (can be something technical, or even something more open ended like time management, etc.)

You will be sharing your app and your code.  Be prepared to answer questions from the instructors and other students.

## Project 2 Assessment
There will be a project assessment after the project 2 presentations. This will take approx. 1.5hrs and will be an open book. The goal of this project assessment is to gauge your ability to develop a minimal Node.js web application using the Express framework.

## Meetings with instructors

An instructor will contact you to setup a meeting time to approve your project.

**Thursday, May 21, 2020 - Mandatory**<br>
You will meet with an instructor to get your app idea approved. Be sure to write out what features you will need to build in order to meet MVP and some stretch goal ideas.

## How to Submit Your Project
Your project is due on Thursday, May 28th at 10 AM EST. You will present your project and show your code to classmates and instructors.

:heavy_check_mark: Submit your project via [this google form](https://docs.google.com/spreadsheets/d/1nO9mcXZFyysmi98cDY5gLB5Arpk3QHfGj_hB1EsKpgM/edit?usp=sharing).


## Where to go for help during project week
1. Seek out help online
2. Seek out help with your classmates (check out the newly created `#nova-students` channel where you can connect with each other!)
3. Seek out help with our class TA 

**TA Hours** :

- Monday, Tuesday, Thursday with Yanny 6:30 PM - 9:00 PM ET `#seir-office-hours-413`
- Saturdays with Dan (1:00 PM - 3:00 PM ET and 7:00 PM - 10:30 PM ET) `#sei-danlawrence-officehours`
- Sundays with Dan (1:45 PM - 5:15 PM ET) `#sei-danlawrence-officehours`


## Etc.

<details><summary><strong>Suggested Ways to Get Started</strong></summary>

* **Wireframe** Make a drawing of what your app will look like in all of the stages of the app(what does it look like as soon as you log on to the site? What does it look like while the player is playing? What does it look like when the player wins / loses?).

* **Break the project down into different components** (data, presentation, views, style) and brainstorm each component individually.

* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.

* **Consult documentation resources** (MDN, etc.) at home to better understand what you’ll be getting into.
</details>


<details><summary><strong>Think about...</strong></summary>

- **Creativity**  
Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user?

- **Code Quality**  
Did you follow code style guidance and best practices covered in class, such as spacing, indentation, modularity, and semantic naming? Did you comment your code as your instructors have in class?

- **Problem Solving**  
Are you able to defend why you implemented your solution in a certain way? Can you demonstrate that you thought through alternative implementations?
</details>

<details><summary><strong>Useful Resources</strong></summary>

* **[Heroku](http://www.heroku.com)**
* **[Writing Good User Stories](http://www.mariaemerson.com/user-stories/)** 
* **[Presenting Information Architecture](http://webstyleguide.com/wsg3/3-information-architecture/4-presenting-information.html)** 
* **[Mongo Documentation](https://docs.mongodb.com/manual/)**
* **[Mongoose Documentation](http://mongoosejs.com/docs/guide.html)**
* **[Mongo Cheatsheet](https://git.generalassemb.ly/Web-Development-Immersive-Remote/WDIR-Adi/wiki/Mongo-Cheatsheet)**
</details>
<hr>  

## Inspiration - Projects by Previous SEIR Students

- [Cheerups](https://warm-beach-18335.herokuapp.com/cheerups)
- [CodeSnips](https://stark-plateau-60254.herokuapp.com/)
- [Yarn](https://thawing-chamber-93915.herokuapp.com/)
- [Pitched](https://pitched-app.herokuapp.com/)
- [PC Builder](https://pc-builder.herokuapp.com/)
- [Gathered](https://gathered-app.herokuapp.com/)
- [Women of STEM](https://womenofstem.herokuapp.com/astro)
- [Dorstep](https://dorstep-final.herokuapp.com/)
- [Find Hike](https://find-hike.herokuapp.com/)
- [Shred App](http://shredapp.herokuapp.com/)
