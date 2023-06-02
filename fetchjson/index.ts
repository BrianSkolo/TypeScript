import axios from "axios";

//url we are making a get request to
const url = 'https://jsonplaceholder.typicode.com/todos/1'

//TypeScript interface (defines the structure of an object ).  In this case we are telling TS what kind of data to expect to get back from this API:  Todo is the TYPE!!  id, title and completed are all properties that we then use below to get the data from the axios response
interface Todo {
  id: number;
  title: string
  completed: boolean;
}


//get request where we receive a promise in return so we want to generate a response when we receive the request.  data property is the "todo" data from the json objects stored at the url ^ ^
//basically gets the url the prints the data from the response from the url in the terminal.
//as Todo says, "hey, we're gonna get this response from this url and that response has a prop called data which gives us data from the url.  This response data is going to be one or those Todos from the Todo TypeScript interface that we wrote above here."
axios.get(url).then(response => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title; 
  const completed  = todo.completed 

  logTodo(id, title, completed);
}); 

//run tsc index.js in terminal to compile the ts to js
//run node index.js to execute the compiled js 

//run ts-node index.ts to do both of those ^ in one step

//type annotation. Tell the object what type of variable it is ex. id: number
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The Todo with ID: ${id}
  Has a title of ${title}
  Is it finished? ${completed}
`);
};