import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom';
import { Autocomplete, TextField, useTheme } from '@material-ui/core';
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

const normalize = (a) => {
    return a.map((e) => { 
        return {
            value: e.value,
            label: `${e.value} - ${ e.label }`
        }
    });
}
  
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

const Orcamento = () => {
    const theme = useTheme();
    const [ nrOrcamento, setNrOrcamento ] = useState("");
    const [ cliente, setCliente ] = useState("");

    return (
            <form>
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
                variant="outlined"
                required
                >
                    N° Orçamento
                </TextField>
                <Autocomplete
                disablePortal
                id="cliente"
                options={names}
                sx={{ m: 2 ,width: 300 }}
                renderInput={(params) => <TextField {...params} label="Cliente" />}
                />
                <Autocomplete
                disablePortal
                id="condicao-pagamento"
                options={normalize(condicoesPag)}
                sx={{ m: 2 ,width: 300 }}
                renderInput={(params) => <TextField {...params} label="Condição de Pagamento" />}
                />
                <Autocomplete
                disablePortal
                id="forma-pagamento"
                options={normalize(formasPag)}
                sx={{ m: 2 ,width: 300 }}
                renderInput={(params) => <TextField {...params} label="Forma de Pagamento" />}
                />
                <Autocomplete
                disablePortal
                id="empresa"
                options={normalize(empresas)}
                sx={{ m: 2 ,width: 300 }}
                renderInput={(params) => <TextField {...params} label="Empresa" />}
                />

            </form>
    );
}

export default Orcamento;
