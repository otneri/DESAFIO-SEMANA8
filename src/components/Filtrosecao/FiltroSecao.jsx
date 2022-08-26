import PropTypes from 'prop-types';

export const FiltroSecao = ({ secoes =   [], onSelecionarSecao}) => {
  return (
   <div>
        <ul style={{
            display: "flex",
            gap: "10px",
        }}>
            {secoes.map((secao, id) => {
                <li>
                    <button key={id} onClick={() => onSelecionarSecao(secao.nome)}>{secao.nome}</button>
                </li>
            })}   
        </ul>
       
   </div>
  )
};


FiltroSecao.Proptypes = {
    onSelecionarSecao : PropTypes.func.isRequired,
    secoes : PropTypes.arrayOf(
        PropTypes.shape({
            nome: PropTypes.string,
        })
    )
};
