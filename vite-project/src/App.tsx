import { CreaturesProvider } from './context/CreaturesContext';
import CreatureForm from './components/CreatureForm';
import CreatureList from './components/CreatureList';
import './App.css';

export default function App() {
  return (
    <CreaturesProvider>
      <div className='sanctuary-container'>
        <h1 className='title'>🐉 Santuario de Criaturas Míticas</h1>
        
        <CreatureForm />
        <hr style={{ margin: '30px 0', opacity: 0.3 }} />
        <CreatureList />
        
      </div>
    </CreaturesProvider>
  );
}