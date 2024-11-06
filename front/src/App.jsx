import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/layout/Header";
import NavBar from "./components/layout/NavBar";
import Rodape from "./components/layout/Rodape";
import Images from "./components/layout/Images";
import Container from "./components/layout/Container";

// Pages
import Home from "./components/pages/Home";
import Login from "./components/pages/auth/Login";
import Cadastro from "./components/pages/auth/Cadastro";
import ForgotPassword from "./components/form/ForgotPassword";
import ProdutoLeilao from "./components/pages/ProdutoLeilao";
import CadastrarLote from "./components/pages/CadastrarLote";
import CadastroEmpresa from "./components/Empresarial/CadastroEmpresa";
import HomeEmpresarial from "./components/Empresarial/HomeEmpresarial";
import AdicionarProdutoEmpresa from "./components/Empresarial/AdicionarProdutoEmpresa";

import Musicas from "./components/pages/Musicas";
import Filmes from "./components/pages/Filmes";
import Jogos from "./components/pages/Jogos";

import Planos from "./components/pages/Planos";
import Cupons from "./components/pages/Cupons";
import Leiloes from "./components/pages/Leiloes";

import Suporte from "./components/pages/Suporte";
import Carrinho from "./components/pages/Carrinho";
import Favoritos from "./components/pages/Favoritos";
import Produto from "./components/pages/Produto";

import EscolherFormaEntrega from "./components/pages/EscolherFormaEntrega";
import EscolherFormaPagamento from "./components/pages/EscolherFormaPagamento";

// Context
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "react-use-cart";
import { useState } from "react";

import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <UserProvider>
        <CartProvider>
          <Header isAuthenticated={isAuthenticated} />
          <NavBar />
          <Container>
            <Routes>
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/cadastroEmpresa" element={<CadastroEmpresa />} />
              <Route path="/homeEmpresarial" element={<HomeEmpresarial />} />
              <Route path="/adicionarProdutoEmpresarial" element={<AdicionarProdutoEmpresa />} />

              <Route
                path="/forgotPassword"
                element={<ForgotPassword />}
              ></Route>
              <Route path="/musicas" element={<Musicas />}></Route>
              <Route path="/filmes" element={<Filmes />}></Route>
              <Route path="/jogos" element={<Jogos />}></Route>
              <Route path="/planos" element={<Planos />}></Route>
              <Route path="/cupons" element={<Cupons />}></Route>
              <Route path="/leiloes" element={<Leiloes />}></Route>
              <Route path="/suporte" element={<Suporte />}></Route>
              <Route path="/carrinho" element={<Carrinho />}></Route>
              <Route path="/favoritos" element={<Favoritos />} />
              <Route path="/" element={<Home />}></Route>
              <Route path="/produto/:id" element={<Produto />} />
              <Route path="/produtoLeilao/:id" element={<ProdutoLeilao />} />
              <Route path="/cadastrarLote" element={<CadastrarLote />} />
              <Route
                path="EscolherFormaEntrega"
                element={<EscolherFormaEntrega />}
              ></Route>
              <Route
                path="/finalizarCompra"
                element={<EscolherFormaPagamento />}
              ></Route>
            </Routes>
          </Container>
          <Images />
          <Rodape />
        </CartProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
