import React, { useState } from "react";
import {
  Autocomplete,
  TextField,
  useTheme,
  Grid,
  InputAdornment,
  OutlinedInput,
  Fab,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from "@material-ui/core";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
import { ReactComponent as Carrinho } from "../../assets/icons/carrinho.svg";
import { ContainerOrcamento, ContainerTabs } from "./styled";
import { TitlePage } from "../../Components/Main";

const produtos = [
  {
    label: "Camisa Polo",
    value: 1,
  },
  {
    label: "Camiseta",
    value: 2,
  },
  {
    label: "Calça",
    value: 3,
  },
];

const tamanhos = [
  {
    label: "PP",
    value: 1,
  },
  {
    label: "P",
    value: 2,
  },
  {
    label: "M",
    value: 3,
  },
  {
    label: "G",
    value: 4,
  },
];

const cores = [
  {
    label: "Azul",
    value: 1,
  },
  {
    label: "Vermelho",
    value: 2,
  },
  {
    label: "Amarelo",
    value: 3,
  },
];

const estampas = [
  {
    label: "Rosario",
    value: 1,
  },
  {
    label: "Militar",
    value: 2,
  },
  {
    label: "Logo Empresa",
    value: 3,
  },
];

const bordados = [
  {
    label: "Brasão escolar",
    value: 1,
  },
  {
    label: "Logo Empresarial",
    value: 2,
  },
];
const variaveis = [
  {
    label: "Rosario",
    value: 1,
  },
  {
    label: "Militar",
    value: 2,
  },
  {
    label: "Logo Empresa",
    value: 3,
  },
];

const names = [
  {
    label: "Oliver Hansen",
    value: 1,
  },
  {
    label: "Van Henry",
    value: 2,
  },
  {
    label: "April Tucker",
    value: 3,
  },
];
const condicoesPag = [
  {
    label: "15 dias",
    value: 1,
  },
  {
    label: "30 dias",
    value: 2,
  },
  {
    label: "30/60 dias",
    value: 3,
  },
  {
    label: "30/60/90 dias",
    value: 4,
  },
];
const formasPag = [
  {
    label: "Dinheiro",
    value: 1,
  },
  {
    label: "Cartão Débito",
    value: 2,
  },
  {
    label: "Cartão Crédito",
    value: 3,
  },
  {
    label: "Boleto",
    value: 4,
  },
];
const empresas = [
  {
    label: "Matriz",
    value: 1,
  },
  {
    label: "Filial 1 - Comercial",
    value: 2,
  },
  {
    label: "Filial 2 - exportação",
    value: 3,
  },
  {
    label: "Filial 3 - Loja fisica",
    value: 4,
  },
];
const transportadoras = [
  {
    label: "Neves transportes",
    cnpj: "62317842000129",
  },
  {
    label: "Auto transporte",
    cnpj: "49129710000105",
  },
];
const statusPedido = [
  "Novo",
  "Agendado",
  "Em Processo",
  "Cancelado",
  "Em Atraso",
];

const normalize = (a) => {
  return a.map((e) => {
    return {
      value: e.value,
      label: `${e.value} - ${e.label}`,
    };
  });
};

const normalizeTransportadora = (t) => {
  return t.map((e) => {
    const cnpj = Number(e.cnpj);
    return {
      value: cnpj,
      label: `${e.cnpj.substring(0, 8)}.${e.cnpj.substring(
        8,
        12
      )}/${e.cnpj.substring(12, 14)} - ${e.label}`,
    };
  });
};

const Orcamento = () => {
  const theme = useTheme();
  const [ativo, setAtivo] = useState("main");
  const [nrOrcamento, setNrOrcamento] = useState(null);
  const [transportadora, setTransportadora] = useState(null);
  const [formaPagamento, setFormaPagamento] = useState(null);
  const [condicaoPagamento, setCondicaoPagamento] = useState(null);
  const [cliente, setCliente] = useState(null);
  const [dataEmissao, setDataEmissao] = useState(new Date());
  const [dataEntrega, setDataEntrega] = useState(new Date());
  const [desconto, setDesconto] = useState(0);
  const [status, setStatus] = useState(null);
  const [valorPedido, setValorPedido] = useState(0);
  const [desabilitado, setDessabilitado] = useState(true);
  const [opcoesPedido, setOpcoesPedido] = useState('Novo');

  const handleChangeDataEmissao = (e) => {
    setDataEmissao(e.target.value);
  };
  const handleChangeDataEntrega = (e) => {
    setDataEntrega(e.target.value);
  };
  const handleChangeDesconto = (e) => {
    setDesconto(e.target.value);
  };
  const gerarNrOrdem = () => {
    setNrOrcamento(Math.floor(Math.random() * 65536));
    setStatus("Novo");
    setDessabilitado(false);
  };

  const resetForms = () =>{
    setNrOrcamento(null);
    setStatus(null);
    setDessabilitado(true);
  }

  const defaultProps = {
    options: transportadoras,
    getOptionsLabel: (options) => options.title,
  };
  const handleChangeOpcoes = (e, opcao) => {
    if(opcao === "Novo"){
      gerarNrOrdem();
    }else{
      resetForms();
    }
    setOpcoesPedido(opcao);
  };

  return (
    <>
      <ContainerTabs>
        <TitlePage>Orçamento de produtos</TitlePage>
        <ContainerOrcamento>
          <input type="radio" name="tabs" id="tabone" defaultChecked />
          <label className="tabs-label" for="tabone">
            Capa do Pedido
          </label>
          <div className="tab">
            <TextField
              sx={{ m: 2, width: 150 }}
              value={nrOrcamento}
              onChange={(evento) => {
                setNrOrcamento(evento.target.value);
              }}
              disabled={!desabilitado}
              id="nrOrcamento"
              label="N° Orçamento"
              type="nrOrcamento"
              margin="normal"
              variant="standard"
              required
            />
            <ToggleButtonGroup
            color="primary"
            value={opcoesPedido}
            exclusive
            onChange={handleChangeOpcoes}
          >
            <ToggleButton value="Novo">Novo Pedido</ToggleButton>
            <ToggleButton value="Buscar">Buscar Pedido</ToggleButton>
          </ToggleButtonGroup>
            <Autocomplete
              disabled={desabilitado}
              id="empresa"
              options={normalize(empresas)}
              sx={{ m: 2 }}
              renderInput={(params) => (
                <TextField {...params} variant="standard" label="Empresa" />
              )}
              fullWidth
            />
            <Autocomplete
              disabled={desabilitado}
              id="cliente"
              options={names}
              sx={{ m: 2 }}
              renderInput={(params) => (
                <TextField {...params} variant="standard" label="Cliente" />
              )}
              fullWidth
            />
            <Autocomplete
              disabled={desabilitado}
              id="condicao-pagamento"
              value={condicaoPagamento}
              options={normalize(condicoesPag)}
              onChange={(event, newCond)=>{
                setCondicaoPagamento(newCond);
              }}
              sx={{ m: 2 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Condição de Pagamento"
                />
              )}
              fullWidth
            />
            <Autocomplete
              disabled={desabilitado}
              value={formaPagamento}
              id="forma-pagamento"
              sx={{ m: 2 }}
              options={normalize(formasPag)}
              onChange={(event, newForma) => {
                setFormaPagamento(newForma);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Forma de Pagamento"
                />
              )}
              fullWidth
            />
            <DatePickerComponent
              disabled={desabilitado}
              placeholder="Data Emissão"
              value={dataEmissao}
              //onChange={handleChangeDataEmissao}
              format="dd/MM/yyyy"
            />
            <DatePickerComponent
              disabled={desabilitado}
              placeholder="Data Entrega"
              value={dataEntrega}
              //onChange={handleChangeDataEntrega}
              format="dd/MM/yyyy"
            />
            <TextField
              disabled={desabilitado}
              variant="standard"
              label="Desconto"
              id="desconto"
              type="number"
              value={desconto}
              onChange={handleChangeDesconto}
              sx={{ m: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">%</InputAdornment>
                ),
              }}
            />
            <Autocomplete
              {...defaultProps}
              disabled={desabilitado}
              value={transportadora}
              id="transportadora"
              onChange={(event, newTrans) => {
                setTransportadora(newTrans);
              }}
              sx={{ m: 2 }}
              options={normalizeTransportadora(transportadoras)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Transportadora"
                />
              )}
              fullWidth
            />
            <Autocomplete
              disabled={status === "Novo" ? true : false || desabilitado}
              value={status}
              id="status-pedido"
              onChange={(event, newStatus) => {
                setStatus(newStatus);
              }}
              sx={{ m: 2 }}
              options={statusPedido}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Status do Pedido"
                />
              )}
              fullWidth
            />
            <TextField
              disabled={desabilitado}
              id="observacoes"
              label="Observação"
              multiline
              rows={4}
              sx={{ m: 2 }}
              InputProps={{
                startAdornment: <InputAdornment position="start" />,
              }}
              fullWidth
            />
          </div>
          <input type="radio" name="tabs" id="tabtwo" />
          <label className="tabs-label" for="tabtwo">
            Pedidos
          </label>
          <div className="tab">
            <Autocomplete
              disabled={desabilitado}
              id="produtos"
              options={normalize(produtos)}
              renderInput={(params) => (
                <TextField {...params} variant="standard" label="Produtos" />
              )}
              fullWidth
            />
            <Autocomplete
              disabled={desabilitado}
              id="tamanhos"
              options={normalize(tamanhos)}
              renderInput={(params) => (
                <TextField {...params} variant="standard" label="Tamanho" />
              )}
              fullWidth
            />
            <Autocomplete
              disabled={desabilitado}
              id="cor"
              options={normalize(cores)}
              renderInput={(params) => (
                <TextField {...params} variant="standard" label="Cor" />
              )}
              fullWidth
            />
            <Autocomplete
              disabled={desabilitado}
              id="estampa"
              options={normalize(estampas)}
              renderInput={(params) => (
                <TextField {...params} variant="standard" label="Estampa" />
              )}
              fullWidth
            />
            <Autocomplete
              disabled={desabilitado}
              id="bordado"
              options={normalize(bordados)}
              renderInput={(params) => (
                <TextField {...params} variant="standard" label="Bordado" />
              )}
              fullWidth
            />
            <Autocomplete
              disabled={desabilitado}
              id="variavel"
              options={normalize(variaveis)}
              renderInput={(params) => (
                <TextField {...params} variant="standard" label="Variavel" />
              )}
              multiple
              fullWidth
            />
          </div>
        </ContainerOrcamento>
        <Grid container spacing={5} sx={{ m: 2 }}>
          <Grid item>
            <TextField
              id="valorPedido"
              label="Valor do Pedido"
              value={valorPedido}
              disabled={true}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Carrinho width="30px" height="30px" />
                    R$
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="success">
              Aprovar
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="error">
              Cancelar
            </Button>
          </Grid>
        </Grid>
      </ContainerTabs>
    </>
  );
};

export default Orcamento;
