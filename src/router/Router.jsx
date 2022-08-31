import { Navigate, Route, Routes } from 'react-router-dom';

import { Produtos } from '../pages/Produtos/Produtos';
import { ProdutosSelecionados } from '../pages/ProdutosSelecionados/ProdutosSelecionados';
export const Router = () => {
  return (
    <Routes>
      <Route path='/produtos' element={<Produtos />} />
      <Route path='/produtos-selecionados' element={<ProdutosSelecionados />} />
      <Route path='*' element={<Navigate to={'/produtos'} replace={true} />} />
    </Routes>
  );
};