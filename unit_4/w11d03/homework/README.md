<img src="https://i.imgur.com/6YTRrdC.png">

# Build Another Django App

## Intro

You'll be building an application called **My Dev Skills**.

There are some helpful hints below!

The MVP version of **My Dev Skills** allows users to track what developer skills they have (and at what level of proficiency).

Here's the ERD:

<img src="https://i.imgur.com/uCbeloQ.png">

The `skill_level` field in `Skill` Model should have a field type of `IntegerField()`.  The value should be an integer between 1 and 5 representing the following skill levels:

| Skill Level<br>(integer) | Human-friendly Description |
|:-:|---|
| 1 | Fundamental Awareness |
| 2 | Novice |
| 3 | Intermediate |
| 4 | Advanced |
| 5 | Expert |

Refer to the _Portfolio API_ lesson for the steps on how to implement the `choices` option for the `skill_level` field when defining the `Skill` Model.

## Minimum Requirements - My Dev Skills v1.0

**All template layout and styling for this assignment will be of your choosing.**

**Use the hints below to help guide you!**

Please implement the following **user stories**:

- As a Visitor (AAV), I want to see a "Welcome to My Dev Skills" landing page with a nav bar.

- AAV, when I click a _description_ on the "My Skills" page, I want to view a "Skill Details" page that displays:
	- The _description_ to be at the top and in a large, bold typeface.
	- The _skill level_ in a human-readable way

- AAV, when I click the "Add Skill" link in the nav bar, I want to view an "Add Skill" page that allows a new skill to be added including:
	- An input to enter the skill's _description_
	- A drop-down to select the _skill level_ (displayed in a human-readable way)

- AAV, when I add a new skill I want to see the "My Skills" page including the new skill.

**Congrats! Make a commit for version 1.0, push to GitHub, and slack the link to your instructors.**

## Optional Bonus Features

### v1.1 User Stories (additional to v1.0)

- AAU, when I click a _description_ on the "My Skills" page, I want to view a "Skill Details" page that displays:
	- A "delete" link

- AAU, when I click the "delete" link on the "Skill Details" page, I want to see a confirmation page so that I don't accidentally delete a skill.

- AAU, if I confirm a delete, I want to see the "My Skills" page with the skill I deleted removed.

### v1.2 User Stories (additional to v1.1)

- AAU, when I click a _description_ on the "My Skills" page, I want to view a "Skill Details" page that displays:
	- An "edit" link

- AAU, if I click the "edit" link on the "Skill Details" page, I want to see a page to edit the _description_ and/or _skill level_ of the skill.

- AAU, if I save an edit, I want to go back to the "Skill Details" page for that skill.

### My Dev Skills v2.0

Looking for more?  Good, because the current users of **My Dev Skills** have requested the following functionality...

Version 2.0 of **My Dev Skills** allows users to add **notes** to any of their skills.

Here's the ERD:

<img src="https://i.imgur.com/lEB20xh.png">

#### Additional User Stories

- AAU, when viewing the "Skill Details" page for a skill, I want to see a list of _notes_ I've entered for that skill.

- AAU, when viewing the "Skill Details" page for a skill, I want to be able to add a new note for that skill.

- AAU, when adding a new note for a skill, I want to continue viewing the "Skill Details" page for that skill after the new note has been added.

- AAU, I want to be able to delete a note for a skill and continue viewing the "Skill Details" page for that skill after the note is deleted.

## Hints

1. Remember to create a database with something like `$ createdb mydevskills` if your going to connect the project to postgresql
2. After starting the project, be sure to start the main app, and add it to the list of installed apps.
3. Configure the app to use PostgreSQL if you are connecting it otherwise it will use SQL Lite
4. The pre-installed admin app has migrations pending - you know what to do.
5. Remember to use getInitialProps in NEXT.JS
