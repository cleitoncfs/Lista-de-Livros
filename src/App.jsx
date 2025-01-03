import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import View from "./pages/View/View";
import Edit from "./pages/Edit/Edit";
import "./styles/styles.css";

function App() {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        const baseUrl = import.meta.env.BASE_URL; // O valor de base definido em vite.config.js
        fetch(`${baseUrl}assets/livros.json`)
            .then((response) => response.json())
            .then((data) => setLivros(data))
            .catch((error) =>
                console.error("Erro ao carregar os dados:", error)
            );
    }, []);

    return (
        <Router basename="/Lista-de-Livros">
            <div className="container">
                <Routes>
                    <Route
                        path="/"
                        element={<Home livros={livros} setLivros={setLivros} />}
                    />
                    <Route
                        path="/create"
                        element={
                            <Create livros={livros} setLivros={setLivros} />
                        }
                    />
                    <Route
                        path="/view/:id"
                        element={<View livros={livros} />}
                    />
                    <Route
                        path="/edit/:id"
                        element={<Edit livros={livros} setLivros={setLivros} />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
