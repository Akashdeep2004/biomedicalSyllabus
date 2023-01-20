import React from 'react'
import Nav from './components/Layout/Nav'
import './index.css'
import './App.css'
import Main from './components/Main/Main'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Anatomy from './components/Anatomy/Anatomy'
import AnatomyBio from './components/Anatomy/AnatomyBio'
import Physiology from './components/Physiology/Physiology'
import Button from './components/UI/Button'
import { Link } from 'react-router-dom'
import Profile from './components/Main/Profile'
import Footer from './components/Layout/Footer'
import Mainpage from './components/Main/Mainpage'
import SubjectSem1 from './components/Semester/Sem1/SubjectSem1'
import PagebuttonSem1 from './components/Semester/Sem1/PagebuttonSem1'
import Backwardbutton from './components/Layout/Backwardbutton'
import SubjectSem2 from './components/Semester/Sem2/SubjectSem2'
import PagebuttonSem2 from './components/Semester/Sem2/PagebuttonSem2'
import PagebuttonSem3 from './components/Semester/Sem3/PagebuttonSem3'
import SubjectSem3 from './components/Semester/Sem3/SubjectSem3'
import PagebuttonSem4 from './components/Semester/Sem4/PagebuttonSem4'
import SubjectSem4 from './components/Semester/Sem4/SubjectSem4'
import PagebuttonSem5 from './components/Semester/Sem5/PagebuttonSem5'
import SubjectSem5 from './components/Semester/Sem5/SubjectSem5'
import Forwardbutton from './components/Layout/Forwardbutton'
import FirstYear from './components/Years/FirstYear'
import SecondYear from './components/Years/SecondYear'
import ThirdYear from './components/Years/ThirdYear'
import FourthYear from './components/Years/FourthYear'


const App = () => {
  
  return (
    <Router>
      <Nav />
      <Backwardbutton />
      <Forwardbutton />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/main' component={Main} />
        <Route path='/anatomy' component={Anatomy} />
        <Route path='/physiology' component={Physiology} />
        <Route path="/profile" component= {Profile} />
        <Route path="/mainpage" component={Mainpage} />
        <Route path="/pagebuttonSem1" component={PagebuttonSem1} />
        <Route path="/subject-sem1" component={SubjectSem1} />
        <Route path="/pagebuttonSem2" component={PagebuttonSem2} />
        <Route path="/subject-sem2" component={SubjectSem2} />
        <Route path="/pagebuttonSem3" component={PagebuttonSem3} />
        <Route path="/subject-sem3" component={SubjectSem3} />
        <Route path="/pagebuttonSem4" component={PagebuttonSem4} />
        <Route path="/subject-sem4" component={SubjectSem4} />
        <Route path="/pagebuttonSem5" component={PagebuttonSem5} />
        <Route path="/subject-sem5" component={SubjectSem5} />

        <Route path="/firstYear" component={FirstYear} />
        <Route path="/secondYear" component={SecondYear} />
        <Route path="/thirdYear" component={ThirdYear} />
        <Route path="/fourthYear" component={FourthYear} />
      </Switch> 
      <Footer  />
    </Router>
    
  )
}

const Home = () => {
    return( 
    <div>
      <header className="app">
            <Link to="/main"><Button size= "lg" className= "buttonW">Start</Button></Link>
        </header>
      </div>
    ) 
  }



export default App
