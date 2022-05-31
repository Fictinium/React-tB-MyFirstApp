/**
 * App.js
 */

//importação de recursos
import logo from './logo.svg';
import './App.css';

/**
 * Criação de um componente. Neste caso, chamar-se-á App.
 * Os componentes começam SEMPRE por uma maiúscula.
 * 
 * Os componentes podem ser de dois tipos:
 *   - classes
 *   - funções
 * 
 * Em todos os componentes haverá sempre um RETURN
 * @returns 
 */
function App() {
  return (
    <div className="App">
      {/*Este é um comentário...
         Eles mudam conforme o contexto.
         Neste sítio estamos a escrever JSX, não HTML*/}
      <header className="App-header">
        {/*O termo 'classNAme' existe para não entrar em conflito com o termo 'class'.
           Em 'run time', será convertido em 'class' no browser*/}
        <img src={logo} className="App-logo" alt="logo" />
        {/*O acesso aos dados de um recurso, iremos colocá-lo entre {}*/}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} //fim do componente

// um 'componente' só será acessível a outros componentes se for exportado
export default App;

