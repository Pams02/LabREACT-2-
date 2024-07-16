import logo from './logo.svg';
import './App.css';

function App() {
  const titulo = "Componentes de React";
  const caracteristicas = ["Reutilizables","Reusables"];

  return (
    <article>
    <h1 className="titulo">{titulo}</h1>
    <ul className="caracteristicas">
        {caracteristicas.map((elemento,index) => (
          <li key={index}>{elemento}</li>
        ))}
    </ul>
</article>

  );
}

export default App;