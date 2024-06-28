# Fiori Elements Problem 1
This repo reproduces a problem or problems in the SAP Fiori Elements Framework. 

My intent is to trigger an external navigation following a successful execution of a bound action. That external navigation should use the return (UUID) of the action as a parameter of the external navigation. 


## Reproduction of the problem
1. Clone the repo
2. Change to the `/sap-fe-bug-1` directory
3. Run `npm start`
4. Navigate to [localhost:4004](http://localhost:4004/def/webapp/index.html)

What you will see is an alert coming up. The code that is creating the alert is in file [/app/def/webapp/ext/controller/T1.controller.js](/app/def//webapp/ext/controller/T1.controller.js)
