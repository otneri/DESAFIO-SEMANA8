import { Footer, Header, Secao } from '@components';
import {useState } from 'react';
import produtos from '@services/produtos.json';
import styles from './App.module.css';

function App() {
  const subSecoesEntradas = new Set(produtos.entradas.map((p) => p.subSecao));
  const subSecoesPrincipais = new Set(produtos.principais.map((p) => p.subSecao));
  console.log(produtos.principais);

  const [contador, setContador] = useState(0);
  const handleContador = () => {
    setContador((pCont) => pCont+1);
    console.log(contador);
  };

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Secao
          nome='Entradas'
          produtos={produtos.entradas}
          subSecoes={Array.from(subSecoesEntradas)}
        />

        <Secao
          nome='Principais'
          produtos={produtos.principais}
          subSecoes={Array.from(subSecoesPrincipais)}
        />

        <Secao nome='Sobremesas' produtos={produtos.sobremesas} />
      </main>
      <Footer />

      <div >
      <h1>Aula 01 - Semana 08</h1>
      <button onClick={handleContador}>Clique em mim</button>;
      </div>


    </div>
  );
}

export default App;
