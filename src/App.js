import './App.css';
import Main from './component/main/Main';
import Video from './component/video/Video';
import Price from './component/price/Price';
import Contact from './component/contact/Contact';

function App() {
  return (
    <div className="App">
      <Main />
      {/* <Video /> */}
      <Price />
      <Contact />
    </div>
  );
}

export default App;
