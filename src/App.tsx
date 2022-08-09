import {CartProvider} from './hooks/compras/useCart'
import GlobalStyle from './style/global'

function App() {

  return (
    <>
    <GlobalStyle />
    <CartProvider />
    </>
  );
}

export default App;
