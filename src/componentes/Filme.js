import { Link } from "react-router-dom";

export default function Filme() {
  return (
    <main>
      <div className="titulo">
        <p>Selecione o horário</p>
      </div>
      <div className="container-horarios">
        <div className="container-dia">
          <p>Quinta-feira - 24/06/2021</p>
          <Link to="/sessao">
            <button>15:00</button>
          </Link>
          <Link to="/sessao">
            <button>19:00</button>
          </Link>
        </div>
        <div className="container-dia">
          <p>Sexta-feira - 25/06/2021</p>
          <button>15:00</button>
          <button>19:00</button>
        </div>
      </div>
    </main>
  );
}
