import './App.css';
import Main from './component/main/Main';
// import Video from './component/video/Video';
import Client from './component/client/Client';
import Price from './component/price/Price';
import Contact from './component/contact/Contact';
import FullPageImg from './component/fullPageImg/FullPageImg';

function App() {
  return (
    <div className="App">
      <Main />
      {/* <Video /> */}
      <Price />
      <Contact />
      <Client />
      <FullPageImg />
    </div>
  );
}

export default App;
