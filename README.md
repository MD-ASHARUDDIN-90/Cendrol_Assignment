# Cendrol_Assignment

## There are three question statement 

1. Design the given picture using HTML and CSS 
a. On Click of Button the counter should be increased and background color of button should be
displayed in the circle.
 --> Completed this task with the help of useState hooks , some custom JS function  also using conditional rendering.
 
2. Consider two components A and B, In A component have a variable called cendol = 2and the value of
variable has been passed to component B to display the value. And In B component there is a button
on click of button the value of variable which has been got from A component should increment by
10

--> Created one seperate component A as A.js (consider as Parent component)
--> Created one sepearte component B as B.js (consider as Child component)
--> Intial state is in Component A with variable cendrol = 2.
--> With the help of useState initialize a initial state with cendrol.
--> Now we pass the state as well setter function as prop.
--> After destructuring it in Child Component (B) we simply use that getter variable to show in the UI which is coming from prop.
--> Also on the button event of onClick just use the setter function which is comimg from prop.

3. Consider a variable which holds a Boolean value, there is a button, It needs to be added styling base
done the value of variable
a. ex: if variable is true then add button background color has red if it variable is false the and
button background color has blue.

--> So we initialize the variable with the value true.
--> We use useState hook to just get the setter function to update the state so that we ca change the UI.
--> We are just using condition of true and false  for changing the background color.

