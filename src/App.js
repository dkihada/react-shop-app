import './App.css';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Main } from './components/main/main';
import { ContextProvider } from './context';

function App() {
  return (
    <div className='App'>
      <Header />
      <ContextProvider>
        <Main />
      </ContextProvider>
      <Footer />
    </div>
  );
}

export default App;
