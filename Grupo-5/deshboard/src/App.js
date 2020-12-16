import Header from './components/header/header'
import Main from './components/main/main'
import Footer from './components/footer/footer'
import Nav from './components/nav/nav'


function App() {
  return (
    <div id="wrapper">
      < Nav/>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            < Header/>
            < Main/>
          </div>
          < Footer/>
        </div>
    </div>
  );
}

export default App;
