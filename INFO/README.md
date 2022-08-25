**JSON PORT: 8299**

**What do they want? What is being asked of you?**

- Create html reprsentations for all elected officials
- Create html reprsentations for all companies that are politically influential (all companies in list)
- Create html reprsentations for all donations that have been made to Political Action Committees.
- Create html reprsentations for all donations that PACs have made to political campaigns.
- Create html representation that lists all politicians along with the following information: bills sponsored by politician, PAC's that have donated to the politicians campaign,

ERD Diagram: picture in folder.

**Which modules should you create?**
What functions should be in which modules?
What should each function return? What is the specific algorithm for each function?
Does the function need parameters?

Modules:
DataAccess.js 
    - functions: 
        - Http Get Request Functions to get all data from database. 
            - Getter functions to export data from dataAccess.js to other modules.
main.js 
    - functions: 
        - render all html on the page. 
Politicians.js 
    - functions: 
        - function to create html reprsentation for all politicians.
companies.js 
    - functions: 
        - function to create html reprsentation for all companies that are influential.
corpToPacdonations.js 
    - functions: 
        - function to create html reprsentation for all donations to PAC's
PacToPoldonations.js 
    - functions: 
        - function to create html reprsentation for all donations to politicians.
finalList.js

**What should the html structure be?**

**Do you need to create a wireframe?**

- I do not need a wireframe.
