import { Footer, Header } from '@components';
import { ProdutosSelecionadosProvider } from './context/ProdutosSelecionados/ProdutosSelecionadosProvider';
import { Router } from './router/Router';
import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <ProdutosSelecionadosProvider>
          <Header />
          <main className={styles.main}>
            <Router />
          </main>
          <Footer />
        </ProdutosSelecionadosProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;