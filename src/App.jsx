import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/login';
import Register from  './components/register/register'
import Todo from './components/todo/todo';

// import User from'./components/users/user'
// import Footer from './components/footer'
// import About from './components/about';
// import './components/portfolio'
// import Portfolio from './components/portfolio';
// import Contact from './components/contact';
// import Step from './components/skills'
function App() {
  
  return <>
    {/* <About/> */}
    {/* <Contact/>
    <Portfolio color='lightblue' name='info 1'/>
    <Portfolio color='lightgreen' name='info 2'/>
    <div className='container d-flex flex-row '>
    <Step name='programming'/>
    <Step name='swimming'/>
    <Step name='drawing'/>
    </div> */}
    {/* <User/> */}
    {/* <Footer/> */}

    
    {/* <div className='col-md-4 offset-md-4 mt-5'> */}
    {/* <Register/> */}
    {/* </div> */}

    <div className='container'>
    <Todo/>
    </div>
    
    {/* <div className='col-md-4 offset-md-4 mt-5'>
    <Login/>
    </div> */}
    


    </>
  
}

export default App
