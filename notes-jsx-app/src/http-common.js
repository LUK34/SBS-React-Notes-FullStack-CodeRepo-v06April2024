import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8080/api",
    //baseURL: "https://sbs-react-notesapp-backend-production.up.railway.app/api",
    headers:{
        "Content-Type":"application/json"
    }
})


/*
Make sure to add teh url as `enviroment variable` in POSTMAN.



1. How to create enviroment variable in POSTMAN??

Ans:
You need to create an enviroment variable in POSTMAN.
1.1 Open the postman . You will see "No Enviroment" next to that you will see a small tablet with eye.
1.2 Click on that small table with eye and enter the details of the enviroment variable . Give it some name and the url which you want to use in postman.



2. How to use the enviroment variable in POSTMAN??

Ans: 
2.1 After creating the enviroment variable. Select the required enviroment varaiable from the dropdown option.
2.2 To access the enviroment variable use {{url}}. this will fetch the url link specified as the enviroment variable selected
from the dropdown option.

CODE:
{{url}}

2.3 Hover the mouse on the url and you will see the link that you stored in the enviroment variable.



*/