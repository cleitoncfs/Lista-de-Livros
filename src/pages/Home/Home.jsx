import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Footer from "./footer";

function Home({ livros, setLivros }) {
    const handleDelete = (id) => {
        const novaLista = livros.filter((livro) => livro.id !== id);
        setLivros(novaLista);
    };

    return (
        <div id="container" className="container">
            <h1>Lista de Livros</h1>
            <Link to="/create" className="add-button">
                Adicionar Novo Livro
            </Link>
            <ul>
                {livros.map((livro) => (
                    <li key={livro.id}>
                        <div>
                            {livro.titulo} - {livro.autor} ({livro.ano})
                        </div>
                        <div className="button-group">
                            <Link
                                to={`/edit/${livro.id}`}
                                className="edit-button"
                            >
                                Editar
                            </Link>
                            <button
                                onClick={() => handleDelete(livro.id)}
                                className="delete"
                            >
                                Excluir
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <Footer />
        </div>
    );
}

// Adicionando validação de propriedades
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
