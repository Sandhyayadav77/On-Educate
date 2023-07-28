
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Contact from './components/Contact';
import Header from './components/Header';
import Books from './Category/Books';
import Footer from './components/Footer';
import Nursery from './Books/Nursery/Nursery';
import Lkg from './Books/LKG/Lkg';
import Ukg from './Books/Ukg/Ukg';
import Class1 from './Books/Class1/Class1';
import Class2 from './Books/Class2/Class2';
import Class3 from './Books/Class3/Class3';
import Class4 from './Books/Class4/Class4';
import Class5 from './Books/Class5/Class5';
import Class6 from './Books/Class6/Class6';
import Class7 from './Books/Class7/Class7';
import Class8 from './Books/Class8/Class8';
import Video from './components/ChapterVideo';

function App() {
  return (
    <>
      
      <Header/>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/contact" Component={Contact}/>
        <Route exact path="/category/books" Component={Books}/>
        <Route exact path="/books/nursery" Component={Nursery}/>
        <Route exact path="/books/lkg" Component={Lkg}/>
        <Route exact path="/books/Ukg" Component={Ukg}/>
        <Route exact path="/books/1" Component={Class1}/>        
        <Route exact path="/books/2" Component={Class2}/>
        <Route exact path="/books/3" Component={Class3}/>
        <Route exact path="/books/4" Component={Class4}/>
        <Route exact path="/books/5" Component={Class5}/>
        <Route exact path="/books/6" Component={Class6}/>
        <Route exact path="/books/7" Component={Class7}/>
        <Route exact path="/books/8" Component={Class8}/>
        <Route exact path="/books/video" Component={Video}/>

      </Routes>
      <Contact />
      <Footer/>

    </>

  )
}

export default App;
