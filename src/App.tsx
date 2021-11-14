import './styles/App.scss';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="md:container md:mx-auto">
      <Header title='rideaway'/>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
