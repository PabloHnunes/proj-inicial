import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  TextField,
  Grid,
  InputAdornment,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from "@material-ui/core";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
import { ReactComponent as Carrinho } from "../../assets/icons/carrinho.svg";
import { ContainerOrcamento, ContainerTabs } from "./styled";
import { TitlePage } from "../../components/Main";
import "react-datepicker/dist/react-datepicker.css";
import DateAdapter from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import ptBR from "date-fns/locale/pt-BR";
import ListaProdutos from "../../components/ListaProdutos";

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
  const [ativo, setAtivo] = useState("main");
  const [dadosColetados, setDadosColetados] = useState({});
  const [nrOrcamento, setNrOrcamento] = useState(null);
  const [transportadora, setTransportadora] = useState(null);
  const [formaPagamento, setFormaPagamento] = useState(null);
  const [condicaoPagamento, setCondicaoPagamento] = useState(null);
  const [cliente, setCliente] = useState(null);
  const [empresa, setEmpresa] = useState(null);
  const [dataEmissao, setDataEmissao] = useState(new Date());
  const [dataEntrega, setDataEntrega] = useState(new Date());
  const [desconto, setDesconto] = useState(0);
  const [status, setStatus] = useState("");
  const [valorPedido, setValorPedido] = useState(0);
  const [desabilitado, setDesabilitado] = useState(true);
  const [opcoesPedido, setOpcoesPedido] = useState("Novo");
  const [observacao, setObservacao] = useState("");
  const [produto, setProduto] = useState(null);
  const [tamanho, setTamanho] = useState(null);
  const [cor, setCor] = useState(null);
  const [estampa, setEstampa] = useState(null);
  const [bordado, setBordado] = useState(null);
  const [variavel, setVariavel] = useState([]);
  const [itens, setItens] = useState([]);
  const [itemId, setItemId] = useState(null);
  const [item, setItem] = useState({
    id: "",
    nrOrcamento: "",
    cliente: "",
    produto: "",
    estampa: "",
    tamanho: "",
    cor: "",
    bordado: "",
    variavel:[],
  });
  const [editMode, setEditMode] = useState(false);

  const handleChangeDesconto = (e) => {
    setDesconto(e.target.value);
  };
  const gerarNrOrdem = () => {
    setNrOrcamento(Math.floor(Math.random() * 65536));
    setStatus("Novo");
    setDesabilitado(false);
  };

  const resetForms = () => {
    setNrOrcamento("");
    setStatus("");
    setDesabilitado(true);
  };

  const defaultProps = {
    options: transportadoras,
    getOptionsLabel: (options) => options.title,
  };
  const handleChangeOpcoes = (e, opcao) => {
    if (opcao === "Novo") {
      gerarNrOrdem();
    } else {
      resetForms();
    }
    setOpcoesPedido(opcao);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setDadosColetados({
      produto: produto.value,
      transportadora: transportadora.value,
    });
    console.log(
      "Teste de submit :" +
        dadosColetados.produto +
        " " +
        dadosColetados.transportadora
    );
  };
  const addItem = (item) => {
    if (
      item.id === null ||
      item.nrOrcamento === null ||
      item.cliente === null ||
      item.produto === null ||
      item.estampa === null ||
      item.tamanho === null ||
      item.cor === null ||
      item.bordado === null
    ) {
      return;
    }

    const newItens = [item, ...itens];
    setItens(newItens);
    setProduto(null);
    setTamanho(null);
    setEstampa(null);
    setCor(null);
    setBordado(null);
    setVariavel([]);
  };
  const apagarItem = (id) => {
    const removeItem = [...itens].filter((item) => item.id !== id);

    setItens(removeItem);
  };
  const editarItem = (id) => {
    setEditMode(true);
    itens.map((produto) => {
      if(produto.id === id){
        setItem(produto);
        setItemId(produto.id);
        setProduto(produto.produto);
        setTamanho(produto.tamanho);
        setCor(produto.cor);
        setEstampa(produto.estampa);
        setBordado(produto.bordado);
        setVariavel(produto.variavel);
      }
      return produto;
    })
  };
  const updateItem = (id, newItem) => {
    if (editMode) {
      setItem({
        ...item,
        nrOrcamento: nrOrcamento,
        cliente: cliente,
        produto: produto,
        estampa: estampa,
        tamanho: tamanho,
        cor: cor,
        bordado: bordado,
        variavel: variavel
      });
      setItens((itens) => itens.map((item) => (item.id === id ? newItem : item)));
      setItemId(null);
      setProduto(null);
      setTamanho(null);
      setEstampa(null);
      setCor(null);
      setBordado(null);
      setVariavel([]);
      setEditMode(false);
    }else{
      return
    }
  };
  useEffect(() => {
    if(!editMode){
      setItem({
        id: Math.floor(Math.random() * 10000),
        nrOrcamento: nrOrcamento,
        cliente: cliente,
        produto: produto,
        estampa: estampa,
        tamanho: tamanho,
        cor: cor,
        bordado: bordado,
        variavel: variavel
      });
    }else{
      setItem({
        id: itemId,
        nrOrcamento: nrOrcamento,
        cliente: cliente,
        produto: produto,
        estampa: estampa,
        tamanho: tamanho,
        cor: cor,
        bordado: bordado,
        variavel: variavel
      });
    }
  }, [itemId,nrOrcamento, cliente, produto, tamanho, cor, bordado,estampa, variavel, editMode]);


  return (
    <form onSubmit={handleSubmit}>
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
              InputProps={{
                startAdornment: <InputAdornment position="start" />,
              }}
              required
            />
            <ToggleButtonGroup
              color="primary"
              value={opcoesPedido}
              exclusive
              onChange={handleChangeOpcoes}
            >
              <ToggleButton value="Novo" onClick={gerarNrOrdem}>
                Novo Pedido
              </ToggleButton>
              <ToggleButton value="Buscar">Buscar Pedido</ToggleButton>
            </ToggleButtonGroup>
            <Autocomplete
              disabled={desabilitado}
              id="empresa"
              value={empresa}
              options={normalize(empresas)}
              onChange={(_, newEmpresa) => {
                setEmpresa(newEmpresa);
              }}
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
              value={cliente}
              onChange={(_, newCliente) => {
                setCliente(newCliente);
              }}
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
              onChange={(_, newCond) => {
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
              onChange={(_, newForma) => {
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
            <LocalizationProvider dateAdapter={DateAdapter} locale={ptBR}>
              <DesktopDatePicker
                disabled={true}
                label="Data Emissão"
                inputFormat="dd/MM/yyyy"
                value={dataEmissao}
                sx={{ m: 2 }}
                onChange={(data) => {
                  setDataEmissao(data);
                }}
                minDate={new Date()}
                renderInput={(params) => (
                  <TextField sx={{ m: 2 }} variant="standard" {...params} />
                )}
              />
              <DesktopDatePicker
                disabled={desabilitado}
                label="Data Entrega"
                inputFormat="dd/MM/yyyy"
                value={dataEntrega}
                minDate={dataEmissao}
                onChange={(data) => {
                  setDataEntrega(data);
                }}
                renderInput={(params) => (
                  <TextField sx={{ m: 2 }} variant="standard" {...params} />
                )}
              />
            </LocalizationProvider>
            <TextField
              disabled={desabilitado}
              variant="standard"
              label="Desconto"
              id="desconto"
              type="number"
              value={desconto}
              onChange={handleChangeDesconto}
              sx={{
                m: 2,
                width: {
                  xs: 70, // theme.breakpoints.up('xs')
                },
              }}
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
              value={observacao}
              onChange={(_, newObservacao) => {
                setObservacao(newObservacao);
              }}
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
              id="produto"
              value={produto}
              onChange={(_, newProduto) => {
                setProduto(newProduto);
              }}
              options={normalize(produtos)}
              renderInput={(params) => (
                <TextField {...params} variant="standard" label="Produtos" />
              )}
              fullWidth
            />
            <Autocomplete
              disabled={desabilitado}
              id="tamanho"
              value={tamanho}
              onChange={(_, newTamanho) => {
                setTamanho(newTamanho);
              }}
              options={normalize(tamanhos)}
              renderInput={(params) => (
                <TextField {...params} variant="standard" label="Tamanho" />
              )}
              fullWidth
            />
            <Autocomplete
              disabled={desabilitado}
              id="cor"
              value={cor}
              onChange={(_, newCor) => {
                setCor(newCor);
              }}
              options={normalize(cores)}
              renderInput={(params) => (
                <TextField {...params} variant="standard" label="Cor" />
              )}
              fullWidth
            />
            <Autocomplete
              disabled={desabilitado}
              id="estampa"
              value={estampa}
              onChange={(_, newEstampa) => {
                setEstampa(newEstampa);
              }}
              options={normalize(estampas)}
              renderInput={(params) => (
                <TextField {...params} variant="standard" label="Estampa" />
              )}
              fullWidth
            />
            <Autocomplete
              disabled={desabilitado}
              id="bordado"
              value={bordado}
              onChange={(_, newBordado) => {
                setBordado(newBordado);
              }}
              options={normalize(bordados)}
              renderInput={(params) => (
                <TextField {...params} variant="standard" label="Bordado" />
              )}
              fullWidth
            />
            <Autocomplete
              disabled={desabilitado}
              id="variavel"
              value={variavel}
              onChange={(_, newVariavel) => {
                setVariavel(newVariavel);
              }}
              options={normalize(variaveis)}
              renderInput={(params) => (
                <TextField {...params} variant="standard" label="Variavel" />
              )}
              multiple
              fullWidth
            />
            {editMode ? <Button
              disabled={desabilitado}
              sx={{ m: 2 }}
              variant="contained"
              color="success"
              onClick={() => {
                updateItem(item.id, item);
              }}
            >
              Salvar
            </Button>
            :
            <Button
              disabled={desabilitado}
              sx={{ m: 2 }}
              variant="contained"
              color="success"
              onClick={() => {
                addItem(item);
              }}
            >
              Adicionar +
            </Button>
            }
            <ListaProdutos
              itens={itens}
              apagarItem={apagarItem}
              editarItem={editarItem}
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
            <Button variant="contained" color="success" type="submit">
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
    </form>
  );
};

export default Orcamento;
