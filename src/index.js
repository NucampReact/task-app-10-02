import React from 'react'; // importing from node_modules
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // import entire contents of a file
import Home from './pages/Home'; // importing from a local file
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Container } from 'reactstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from './features/todoList/TodoList';
import TodoItem from './features/todoList/TodoItem';
import SubHeader from './components/SubHeader';
import AddTodoForm from './features/todoList/AddTodoForm';
import { Provider } from 'react-redux';
import MyStore from './redux/Store';
import ActiveItems from './pages/ActiveItems';
import CompletedItems from './pages/CompletedItems';

/*
  Preparing the React Tree into your HTML document
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={MyStore}>
    <BrowserRouter>
      {/*I am trying to get the footer to push to the bottom with bootstrap making the min height of the element 100vh but its not working. */}
      <Navigation />

      <Container className='mt-3'>
        {/* Create Routes (pages) */}
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/active-items'
            element={<ActiveItems />}
          />
          <Route
            path='/completed-items'
            element={<CompletedItems />}
          />

          <Route path="/add-todo" element={<AddTodoForm />} />
          <Route
            path='/todo/:itemName'
            element={<TodoItem />}
          />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  </Provider>
);
