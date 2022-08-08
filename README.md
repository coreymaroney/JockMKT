# Take home assignment for Jock MKT
First of all, thank you for taking the time to check out my work! I completed this project as a web deployment using React. I have included a separate, short write-up attached as a PDF in the submission email.
# Running this project

## Clone the project to your local system
### `git clone https://github.com/coreymaroney/JockMKT.git`
Navigate into  the project repository using
### `cd JockMKT`
## Install the dependencies

### `npm install`

## Run the web deployment
### `npm start`
After this completes, you will be able to see the project by navigating to `localhost:3000` on your web browser. Please use Google Chrome for the best optimization.

## Write-up attached to submission email
`Welcome to my short explanation of the work completed on this take home assignment. With the given constraints on time to work on the project, as well as the need to display, sort, and search this particular data, I found the best solution would be to integrate with a reliable UI library. I chose Material UI and specifically I used their data table which is a robust and customizable component that I enjoyed using. After figuring out my method for displaying this data, I moved onto working with the data itself.
I kept in mind from my discussion with Sergey that it would be important to use the most recent best practices for writing React, so considering that I used hooks and functional components in my implementation. To start, I call the table component from the primary “App” component. Within my table component I use the state hook to store an array of objects, and each of the objects in the array is a (tradeable) entity. I populate the array located in the state by using the effect hook to fetch the data and build a new object with the data that I’d like to display. Finally, the array is returned from the “getEntities” function with all of the 80 entities. At this point this data is formatted correctly to be displayed within the table.
As to be fair to all candidates, I took the time constraints on this project seriously. I believe that this project can be further improved by, for example,changing the table's accent color to the correct “Jock MKT” green, optimizing the appearance of the data table through its configurable properties, and improving the overall appearance of the static page it’s displayed on. One note I’d like to make about the code itself is that create-react-app uses camelCase in its file structure, but in the past I’ve found that many people use snake case in module names. All of the modules I created are using snake case, but due to the structure of create-react-app their own camelCase modules are present. Ordinarily I would not mix these two structures.
I’d like to thank you again for your time reading and running this project, as well as your time interviewing me during this past week.`
