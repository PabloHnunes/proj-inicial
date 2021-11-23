import React, { useState } from "react";
import { Autocomplete, TextField, useTheme, Grid, InputAdornment, OutlinedInput, Fab } from '@material-ui/core';
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { ReactComponent as Carrinho } from '../../assets/icons/carrinho.svg';
import { ContainerOrcamento } from "./styled";
import { TitlePage } from "../../Components/Main";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
    {
        label:'Oliver Hansen',
        value: 1
    },
    {
        label:'Van Henry',
        value: 2
    },
    {
        label:'April Tucker',
        value: 3
    }
  ];
const condicoesPag = [
    {
        label:'15 dias',
        value: 1
    },
    {
        label:'30 dias',
        value: 2
    },
    {
        label:'30/60 dias',
        value: 3
    },
    {
        label:'30/60/90 dias',
        value: 4
    }
];
const formasPag = [
    {
        label:'Dinheiro',
        value: 1
    },
    {
        label:'Cartão Débito',
        value: 2
    },
    {
        label:'Cartão Crédito',
        value: 3
    },
    {
        label:'Boleto',
        value: 4
    }
];
const empresas = [
    {
        label:'Matriz',
        value: 1
    },
    {
        label:'Filial 1 - Comercial',
        value: 2
    },
    {
        label:'Filial 2 - exportação',
        value: 3
    },
    {
        label:'Filial 3 - Loja fisica',
        value: 4
    }
];
const transportadoras = [ 
    {
        label:'Neves transportes',
        cnpj:'62317842000129'
    },
    {
        label:'Auto transporte',
        cnpj:'49129710000105'
    }
]
const statusPedido = [ 
    'Novo',
    'Agendado',
    'Em Processo',
    'Cancelado',
    'Em Atraso'
];

const normalize = (a) => {
    return a.map((e) => { 
        return {
            value: e.value,
            label: `${e.value} - ${ e.label }`
        }
    });
};

const normalizeTransportadora = ( t ) => {
    return t.map((e) => {
        const cnpj = Number(e.cnpj);
        return {
            value: cnpj,
            label: `${e.cnpj.substring(0,8)}.${e.cnpj.substring(8,12)}/${e.cnpj.substring(12,14)} - ${e.label}`
        }
    })
};

const Orcamento = () => {
    const theme = useTheme();
    const [ nrOrcamento, setNrOrcamento ] = useState("");
    const [ transportadora, setTransportadora ] = useState();
    const [ cliente, setCliente ] = useState("");
    const [ dataEmissao, setDataEmissao ] = useState(new Date());
    const [ dataEntrega, setDataEntrega ] = useState(new Date());
    const [ desconto, setDesconto ] = useState(0);
    const [ status, setStatus ] = useState("");
    const [ valorPedido, setValorPedido ] = useState(0);
    const [ editavel, setEditavel ] = useState(true);

    const handleChangeDataEmissao = (e) => {
        setDataEmissao(e.target.value);
      };
    const handleChangeDataEntrega = (e) => {
        setDataEntrega(e.target.value);
    }
    const handleChangeDesconto = (e) =>{
        setDesconto(e.target.value);
    }
    const handlesChangeTransportadora = (e) =>{
        setTransportadora(e.target.value);
    }
    const gerarNrOrdem = () =>{
        setNrOrcamento(Math.floor(Math.random() * 65536));
        setStatus('Novo');
        setEditavel(false);
    }

    const defaultProps = {
        options: transportadoras,
        getOptionsLabel: (options) => options.title
    };

    return (
        <ContainerOrcamento className="container-orcamento">
            <TitlePage>Orçamento de produtos</TitlePage>
            
            <TextField
            sx={{ m: 2, width: 150 }}
            value={nrOrcamento}
            onChange={(evento) =>{
            setNrOrcamento(evento.target.value);
            }}
            id="nrOrcamento" 
            label="N° Orçamento" 
            type="nrOrcamento" 
            margin="normal"
            variant="standard"
            required
            />
            <Fab size="small" aria-label="add" onClick={gerarNrOrdem} sx={{ m:2 }}>
                <Plus />
            </Fab>
            <Autocomplete
            disabled={editavel}
            id="empresa"
            options={normalize(empresas)}
            renderInput={(params) => <TextField {...params} variant="standard" label="Empresa" />}
            fullWidth
            />
            <Autocomplete
            disabled={editavel}
            id="cliente"
            options={names}
            renderInput={(params) => <TextField {...params} variant="standard" label="Cliente" />}
            fullWidth
            />
            <Autocomplete
            disabled={editavel}
            id="condicao-pagamento"
            options={normalize(condicoesPag)}
            renderInput={(params) => <TextField {...params} variant="standard" label="Condição de Pagamento" />}
            fullWidth
            />
            <Autocomplete
            disabled={editavel}
            id="forma-pagamento"
            options={normalize(formasPag)}
            renderInput={(params) => <TextField {...params} variant="standard" label="Forma de Pagamento" />}
            fullWidth
            />
            <DatePickerComponent 
            disabled={editavel}
            placeholder="Data Emissão"
            value={dataEmissao}
            //onChange={handleChangeDataEmissao}
            format="dd/MM/yyyy"
            />
            <DatePickerComponent 
            disabled={editavel}
            placeholder="Data Entrega"
            value={dataEntrega}
            //onChange={handleChangeDataEntrega}
            format="dd/MM/yyyy"
            />
            <TextField
            disabled={editavel}
            variant="standard"
            label="Desconto"
            id="desconto"
            type="number"
            value={desconto}
            onChange={handleChangeDesconto}
            InputProps={{
                startAdornment: <InputAdornment position="start">%</InputAdornment>,
            }}
            />
            <Autocomplete
            {...defaultProps}
            disabled={editavel}
            value={transportadora}
            id="transportadora"
            onChange={(event, newTrans) =>{
                setTransportadora(newTrans);
            }}
            options={normalizeTransportadora(transportadoras)}
            renderInput={(params) => <TextField {...params} variant="standard" label="Transportadora" />}
            fullWidth
            />
            <Autocomplete
            disabled={status == 'Novo' ? true : false}
            value={status}
            id="status-pedido"
            onChange={(event, newStatus) =>{
                setStatus(newStatus);
            }}
            options={statusPedido}
            renderInput={(params) => <TextField {...params} variant="standard" label="Status do Pedido" />}
            fullWidth
            />
            <TextField
            disabled={editavel}
            id="observacoes"
            label="Observação"
            multiline
            rows={4}
            sx={{ m:2 }}
            //variant="standard"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start"/>
                )
                }}
            fullWidth
            />
            <Grid container spacing={2} sx={{ m:2 }}>
                <Grid item >
                        <TextField
                        id="valorPedido"
                        label="Valor do Pedido"
                        value={valorPedido}
                        disabled={true}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Carrinho width='30px' height='30px'/>
                                R$
                            </InputAdornment>
                        ),
                        }}
                        variant="standard"
                    />
                </Grid>
            </Grid>
        </ContainerOrcamento>
    );
}

export default Orcamento;
