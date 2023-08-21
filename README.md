# voyage-tasks

Your project's `readme` is as important to success as your code. For 
this reason you should put as much care into its creation and maintenance
as you would any other component of the application.

If you are unsure of what should go into the `readme` let this article,
written by an experienced Chingu, be your starting point - 
[Keys to a well written README](https://tinyurl.com/yk3wubft).

And before we go there's "one more thing"! Once you decide what to include
in your `readme` feel free to replace the text we've provided here.

> Own it & Make it your Own!

## Team Documents

You may find these helpful as you work together to organize your project.

- [Team Project Ideas](./docs/team_project_ideas.md)
- [Team Decision Log](./docs/team_decision_log.md)

Meeting Agenda templates (located in the `/docs` directory in this repo):

- Meeting - Voyage Kickoff --> ./docs/meeting-voyage_kickoff.docx
- Meeting - App Vision & Feature Planning --> ./docs/meeting-vision_and_feature_planning.docx
- Meeting - Sprint Retrospective, Review, and Planning --> ./docs/meeting-sprint_retrospective_review_and_planning.docx
- Meeting - Sprint Open Topic Session --> ./docs/meeting-sprint_open_topic_session.docx

## Project Structure

### `components`
Components folder is broken down into subfolders. `ui` folder contains UI components like buttons, modals, cards, etc. `graphs` contains implementations of different graphs.

### `hooks`
The hooks folder contains custom hooks in the project.

### `assets`
The assets folder contains all images, css files, font files, etc. for the project. Pretty much anything that isn’t code related stored in this folder.

### `utils`
This folder is for storing all utility functions such as formatters. This is a pretty straightforward folder and all the files in this folder should likewise be straightforward. Generally there should be only pure functions in this folder since if a utility function has side effects then it is most likely not just a simple utility function. There are exceptions to this rule, though.

### `sections`
In this file there is sections of the website that separated visually and by functionality.

### `services`
his folder contains all your code for interfacing with an external API.

### `context`
The context folder stores all of the React context files that are used across the project.

### `data`
The data folder is for storing data assets such as JSON files that contain information used in the code (store items, theme information, etc). This folder also store a file that contains global constant variables.
