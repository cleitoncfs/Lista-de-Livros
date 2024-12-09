import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";

function View({ livros }) {
    const { id } = useParams();
    const livro = livros.find((l) => l.id === parseInt(id, 10));

    if (!livro) {
        return (
            <div>
                Livro não encontrado. <Link to="/">Voltar</Link>
            </div>
        );
    }

    return (
        <div>
            <h1>Detalhes do Livro</h1>
            <p>
                <strong>Título:</strong> {livro.titulo}
            </p>
            <p>
                <strong>Autor:</strong> {livro.autor}
            </p>
            <p>
                <strong>Ano:</strong> {livro.ano}
            </p>
            <Link to="/">Voltar para Lista</Link>
        </div>
    );
}

View.propTypes = {
    livros: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            titulo: PropTypes.string.isRequired,
            autor: PropTypes.string.isRequired,
            ano: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default View;
