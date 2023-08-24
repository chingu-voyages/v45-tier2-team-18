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

## Workflow

### Branches

* `main` - this branch contains the production build. Updates made to this branch will be deployed to GitHub Pages. You should merge **only `dev` branch** to `main` and only if you want to deploy a new release. This would usually happen at the end of a sprint.

* `dev` - this branch has the last working state of the application. You must create your branches based on the `dev` branch, **NOT `main`**. You must also merge your branches into `dev` branch, **NOT `main`**.

* `feature/*`, `fix/*`, `refactor/*` - branches that you create every time you take a new feature into work. You must create these branches based on `dev` and merge them to `dev`. You should try to merge them back as soon as you have a working feature so that everyone can have an up-to-date version of the project state.

* `gh-pages` - this branch consists of project build. You should never push to this branch directly. It will be updated automatically after  `main` branch is changed.

### Step-by-step workflow

1. Switch to the dev branch and pull the latest changes.
2. Create a new branch for your feature. For example, `feature/landing-page`.
3. Make changes to the created branch, commit them, and push them to GitHub.
4. Go to the repository page on GitHub. Click **Create pull request** at the top. Choose `dev` branch as the branch for your changes to be merged into.
5. Send the pull request link to chat and wait for review.
6. If there are issues highlighted by the reviewer, fix or discuss them.
7. When a pull request has at least one approval, you can click on "Merge branch". Resolve merge conflicts if there are any.
8. Test that your changes didn't break project on the `dev` branch; otherwise, create a new `fix/*` branch and start from the beginning of the workflow.
9. Delete the branch that has been merged.