import React, { useState } from "react";
import { useContext } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { TextField } from "@material-ui/core";
import FormularioCadastro from "../../components/FormularioCadastro/FormularioCadastro";
import { Typography } from "@material-ui/core";

import Api from "../../Api";

import { AreaLateral, AreaLogin } from "./styled";
import { BtnDefautIcons, BtnDefaut } from "../../components/styled";
import { ReactComponent as BackArrow } from "../../assets/icons/back-arrow.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook-1.svg";
import { ReactComponent as GoogleIcon } from "../../assets/icons/google-1.svg";

import { validarCpf, validarNome, validarSenha } from "../../models/cadastro";
import ValidacoesCadastro from "../../contexts/Validacoes";

function LoginUser({ onReceiveGoogle }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  //const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  const actionLoginGoogle = async () => {
    let result = await Api.googleLogar();

    if (result) {
      onReceiveGoogle(result.user);
    } else {
      alert("Erro");
    }
  };

  return (
    <BrowserRouter>
      <AreaLateral>
        {/* <!-- Backdrop --> */}
        <div class="container__overlay"></div>

        {/* <!-- Sidebar --> */}
        <div class="container__sidebar">
          <Routes>
            <Route
              exact
              path="/registrar"
              element={
                <>
                  <AreaLogin>
                    <h1 className="titulo">
                      <Link to="/">
                        <BackArrow width="10px" />
                      </Link>
                      Crie sua conta
                    </h1>

                    <Typography variant="h3" component="h1" align="center">
                      Formulário de Cadastro
                    </Typography>
                    <ValidacoesCadastro.Provider
                      value={{
                        cpf: validarCpf,
                        senha: validarSenha,
                        nome: validarNome,
                      }}
                    >
                      <FormularioCadastro onSubmit={whySubmit} />
                    </ValidacoesCadastro.Provider>

                    <div className="footerLogin">
                      Já tem um conta ?<Link to="/">Faça login</Link>
                    </div>
                  </AreaLogin>
                </>
              }
            />
            <Route
              exact
              path="*"
              element={
                <>
                  <AreaLogin>
                    <h1> Faça login em sua conta </h1>

                    <form>
                      <TextField
                        value={email}
                        onChange={(evento) => {
                          setEmail(evento.target.value);
                        }}
                        id="email"
                        label="Email"
                        type="email"
                        margin="normal"
                        variant="outlined"
                        required
                        fullWidth
                      />
                      <TextField
                        value={senha}
                        onChange={(evento) => {
                          setSenha(evento.target.value);
                        }}
                        id="senha"
                        name="senha"
                        label="Senha"
                        type="password"
                        margin="normal"
                        required
                        variant="outlined"
                        fullWidth
                      />
                    </form>
                    <BtnDefaut> Entrar </BtnDefaut>
                    <div className="footerLogin">
                      Não tem uma conta ?
                      <Link to="/registrar">Registre-se</Link>
                    </div>

                    <p> OU </p>

                    <BtnDefautIcons>
                      <FacebookIcon width="20px" />
                      <div className="center"> Fazer login com o Facebook </div>
                    </BtnDefautIcons>
                    <BtnDefautIcons onClick={actionLoginGoogle}>
                      <GoogleIcon width="20px" height="20px" />
                      <div className="center"> Fazer login com o Google </div>
                    </BtnDefautIcons>
                  </AreaLogin>
                </>
              }
            />
          </Routes>
        </div>
      </AreaLateral>
    </BrowserRouter>
  );
}
function whySubmit(dados) {
  console.log(dados);
}
export default LoginUser;
