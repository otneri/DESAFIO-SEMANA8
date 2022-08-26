import React from "react";
import PropTypes from "prop-types";


export const FiltroSecao = ({titulo, onSelecionarSecao}) => {
  return (
    <div>
      {titulo.map((secao,id) => (
        <button key={id} onClick={() => onSelecionarSecao(secao.nome)}>{secao.nome}</button>
      ))}
    </div>
  );
};

FiltroSecao.propTypes = {
  titulo: PropTypes.array.isRequired,
  onSelecionarSecao: PropTypes.func.isRequired,
};

