import { Typography, Stepper, Step,StepLabel } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({onSubmit}) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});
  useEffect(() => {
    if(etapaAtual  === formulario.length){
      onSubmit(dadosColetados);
    }
  })
  const formulario = [
  <DadosUsuario onSubmit={coletarDados}/>,
  <DadosPessoais onSubmit={coletarDados}/>,
  <DadosEntrega onSubmit={coletarDados}/>,
  <Typography variant="h5">Obrigado pelo cadastro!</Typography>
];
  function coletarDados(dados){
    setDados({...dadosColetados, ...dados});
    next();
  }
  function next(){
    setEtapaAtual(etapaAtual+1);
  }
  
  return (
    <>
      <Stepper activeStep={etapaAtual}>
      <Step><StepLabel>Login</StepLabel></Step>
      <Step><StepLabel>Pessoal</StepLabel></Step>
      <Step><StepLabel>Entrega</StepLabel></Step>
      </Stepper>
      {formulario[etapaAtual]}
    </>
  );
}



export default FormularioCadastro;
