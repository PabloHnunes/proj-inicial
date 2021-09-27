import React, { useState, useContext } from 'react';
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from '../../contexts/Validacoes';
import useErros from '../../hooks/useErros';
import { BtnDefaut } from '../styled';

function DadosPessoais({onSubmit}) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);



  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if(possoEnviar()){
        onSubmit({nome, sobrenome, cpf, promocoes, novidades});
      }
    }}
      >
      <TextField
      value={nome}
      onChange={
        (event) => {
          setNome(event.target.value);       
        }} 
      onBlur={validarCampos}
      error={!erros.nome.valido}
      helperText={erros.nome.texto}
      id="nome" 
      name="nome"
      label="Nome" 
      margin="normal"
      variant="outlined" 
      fullWidth />
      <TextField 
      value={sobrenome}
      onChange={
       (event) =>{
        setSobrenome(event.target.value);       
        }} 
      id="sobrenome" 
      label="Sobrenome" 
      margin="normal" 
      variant="outlined"
      fullWidth />
      <TextField
      value={cpf}
      onChange={
      (event) =>{
      setCpf(event.target.value);       
      }}
      onBlur={validarCampos}
      name="cpf"
      error={!erros.cpf.valido}
      helperText={erros.cpf.texto}  
      id="cpf" 
      label="CPF" 
      margin="normal" 
      variant="outlined"
      fullWidth />
      <FormControlLabel
        label="Promoções"
        checked={promocoes}
        control={<Switch onChange={(event)=> {
          setPromocoes(event.target.checked)
        }} 
        name="Promoções" 
         
        color="primary" />}
      />
      <FormControlLabel
        label="Novidades"
        control={<Switch 
          checked={novidades} 
          onChange={(event)=> {
          setNovidades(event.target.checked)
        }} 
          name="Novidades" 
          
          color="primary" />}
      />
      <BtnDefaut type="submit"> Próximo </BtnDefaut>
    </form>
  );
}

export default DadosPessoais;
