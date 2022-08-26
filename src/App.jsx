import { Footer, Header, Secao, FiltroSecao } from '@components';
import produtos from '@services/produtos.json';
import { useState } from 'react';
import styles from './App.module.css';



const subSecoesEntradas = new Set(produtos.entradas.map((p) => p.subSecao));
const subSecoesPrincipais = new Set(produtos.principais.map((p) => p.subSecao));
console.log(subSecoesEntradas, subSecoesPrincipais);
console.log(Array.from(subSecoesPrincipais))


let secoes = [
  {
    nome: 'Entradas',
    produtos: produtos.entradas,
    subSecoes: Array.from(subSecoesEntradas)
  },

  {
    nome: 'Principais',
    produtos: produtos.principais,
    subSecoes: Array.from(subSecoesPrincipais)
  },

  {
    nome: 'Sobremesas',
    produtos: produtos.sobremesas,
    subSecoes: null,
  },
];
function App() {

  const [secaoSelecionada, setSecaoselecionada] = useState(null);


  const handleSelecionarSecao = (nomeSelecionado) => {
    if (nomeSelecionado === secaoSelecionada) {
      setSecaoselecionada(null);
    } else {
      setSecaoselecionada(nomeSelecionado);
    }

  };

  const secoesFiltradas = 
  secaoSelecionada ? secoes.filter(
    secao => secao.nome === secaoSelecionada) : secoes

  return (
    <div className={styles.app}>
      <Header />
      <FiltroSecao secoes={secoes} onSelecionarSecao={handleSelecionarSecao}/>
      <main className={styles.main}>
        {secoes.map((sec) =>(
          <Secao
            key={sec.nome}
            nome= {sec.nome}
            produtos={sec.produtos}
            subSecoes={sec.subSecoes && Array.from(sec.subSecoes)}
            
          />

        ))}
        

      </main>
      <Footer />

    </div>
  );
}

export default App;
