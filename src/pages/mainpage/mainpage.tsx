import Footer from './components/Footer';
import Header from './components/Header';
import VideoSection from './components/VideoSection';
import TechSection from './components/TechSection';

function Mainpage() {
  return (
    <div className="App">
      <Header />
      
      {/* Контент для проверки скролла по якорям */}
        <VideoSection></VideoSection>
        <TechSection/>

      <Footer/>
    </div>
  );
}

export default Mainpage;