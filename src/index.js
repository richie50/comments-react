import './index.css';

//import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider, useDispatch, useSelector } from 'react-redux'
import React ,{ useState } from 'react';

import ApprovalCard from './ApprovalCard';
import CommentDetails from './CommentDetails';
import ReactDOM from 'react-dom';
import { addTodo } from './redux/todoSlice';
import faker from 'faker';
import store from './redux/store';

const App = () => {
  
  const todos = useSelector((state) => state.todos);

  const listItems = todos.map((todo) => 
    <li key={todo?.id}>
         <div className="ui container comments">
            <CommentDetails avatar={todo?.avatar} author={todo?.author}  lastUpdated={todo?.lastUpdated}>
              <ApprovalCard></ApprovalCard>
            </CommentDetails>
        </div>
    </li>
  );
  
  const dispacther = useDispatch();
  const [value , setValue] = useState('');

  const onSubmit = (event) => {
    // event.preventDefault();
    console.log(event , this);
    if (event) {
      event.author = value;
      console.log(event);
      dispacther(addTodo(event));
    }
  }
    return ( 
      <div>
        <header className="header">
          <h1 className="heading"> COMMENTS </h1>
        </header>
        
        <div className="add">
        <div className="comment">
          <button className="ui button" onClick={(e) => onSubmit({avatar:faker.internet.avatar() , lastUpdated: "Today"}, e)}>Add a comment</button>
        </div>
          <div className="name">
            <label className="ui label">Name: </label>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
          </div>
          
        </div>
        
        <ul>
            {listItems}
        </ul>
      </div>
    );
}

ReactDOM.render( <Provider store={store}><App/></Provider> , document.querySelector("#root"));



        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA
        serviceWorker.unregister();