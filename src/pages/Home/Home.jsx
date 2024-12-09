import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Home({ livros, setLivros }) {
    const handleDelete = (id) => {
        const novosLivros = livros.filter((livro) => livro.id !== id);
        setLivros(novosLivros);
    };

    return (
        <div>
            <h1>Lista de Livros</h1>
            <Link to="/create" className="add">
                Adicionar Novo Livro
            </Link>
            <ul>
                {livros.map((livro) => (
                    <li key={livro.id}>
                        <Link to={`/view/${livro.id}`}>
                            {livro.titulo} - {livro.autor} ({livro.ano})
                        </Link>{" "}
                        <button
                            className="delete"
                            onClick={() => handleDelete(livro.id)}
                        >
                            Excluir
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

Home.propTypes = {
    livros: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            titulo: PropTypes.string.isRequired,
            autor: PropTypes.string.isRequired,
            ano: PropTypes.number.isRequired,
        })
    ).isRequired,
    setLivros: PropTypes.func.isRequired,
};

export default Home;
