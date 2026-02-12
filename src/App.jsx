import './App.css'
import Header from './components/Header';
import ResourceGrid from './components/ResourceGrid';
import StepsSection from './components/StepsSection';
import UpsellSection from './components/UpsellSection';

function App() {
  return (
    <div className="app-container">
      <div className="content-wrapper">
        <Header />
        <main>
          <ResourceGrid />
          <hr className="divider" />
          <StepsSection />
          <hr className="divider" />
          <UpsellSection />
        </main>
      </div>
    </div>
  )
}

export default App
