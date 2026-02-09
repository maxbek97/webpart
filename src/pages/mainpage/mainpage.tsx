import Footer from './components/Footer';
import Header from './components/Header';
import VideoSection from './components/VideoSection';

function Mainpage() {
  return (
    <div className="App">
      <Header />
      
      {/* Контент для проверки скролла по якорям */}
        <VideoSection></VideoSection>

      <section id="maps" style={{ height: '100vh', background: '#0f1923', paddingTop: '100px' }}>
        <h1 style={{ color: 'white' }}>Секция Карт</h1>
      </section>
      <Footer/>
    </div>
  );
}

export default Mainpage;