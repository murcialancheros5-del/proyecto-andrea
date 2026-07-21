import './App.css';
import Tarjeta from './components/Tarjeta';
import Header from './components/Header';
import Footer from './components/Footer';

function App (){
  return(
    <div>
      <Header/>
        <main>
           <Tarjeta />
            <Tarjeta />
           <Tarjeta />
        </main>
      <Footer/>
    </div>

  );

};

export default App;