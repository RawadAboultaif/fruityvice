import {
  useEffect,
  useState,
} from "react";
import { api } from "../../services/api";
import { CartStyle } from "./style";

import imageCarrinho from "../../assets/imagens/carrinho-compras.png";
import shoppingCart from "../../assets/imagens/carrinho.png";
import logo from "../../assets/imagens/logo.png";
import information from "../../assets/imagens/information.png"
import woman from "../../assets/imagens/woman.png"
import healthy from "../../assets/imagens/healthy.webp"

import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";

//* INTERFACE

interface Fruits {
  id: number;
  name: string;
  available: boolean
  nutritions: {
    carbohydrates: string;
    protein: string;
    fat: string;
    calories: string;
    sugar: string;
  };
}

interface ProductFormatted extends Fruits {
  amount: number;
}

export function CartProvider(): JSX.Element {
  const [cart, setCart] = useState<ProductFormatted[]>([]);
  const [aparecer, setAparecer] = useState<string>("apa");
  const [totalItems,setTotalItems] = useState(0);

//* Adicionando as propriedades "Amount, Available" ao servidor.

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<Fruits[]>("stock");
      const data = response.data.map((Fruits) => ({
        ...Fruits,
        amount: 0,
        available: false,
      }));
      setCart(data);
    }

    loadProducts();
  }, []);

//* Adicionar +1 a lista de produtos

  function imcrementProduct(ids: number) {
    let currentNumber = totalItems
    currentNumber += 1 
    setTotalItems (currentNumber)
    const newData = cart.map((Fruits) => {
      if (Fruits.id === ids) {
        return { ...Fruits, amount: Fruits.amount + 1 };
      }
      return Fruits;
    });

    setCart(newData);
  }

//* Adicionar -1 a lista de produtos

  function decrementProduct(ids: number) {
    let currentNumber = totalItems
    currentNumber -= 1 
    setTotalItems (currentNumber)
    const newData = cart.map((Fruits) => {
      if (Fruits.id === ids) {
        return { ...Fruits, amount: Fruits.amount - 1 };
      }
      return Fruits;
    });
    setCart(newData);
  }

//* Abrir janela de informações nutricionais     

  function showNutris (ids :number){  
    cart.map((Fruits) => {
      if ( Fruits.available == true){
        Fruits.available = false
      }
    })
  
    const toggle = cart.map((Fruits) => {
      if (Fruits.id == ids) {
        return {...Fruits, available: true}
      }
      return Fruits
    }) 
    setCart(toggle)
  }

//* Fechar janela de informacoes nutricionais 

  function closeNutriInfo (ids :number){  
    const newData = cart.map((Fruits) => {
      if (Fruits.id === ids) {
        return { ...Fruits, available: false };
      }
      return Fruits;
    });
    setCart(newData);
  }

//* Mostrar Carirnho

  function showCart() {
    if (document.getElementById("carrinnho")?.classList.contains("aparecer")) {
      setAparecer("apa");
    } else {
      document.getElementById("carrinnho")?.classList.add("aparecer");
      setAparecer("aparecer");
    }
  }

//* Remover Produto do carrinho

  function removeProduct(ids: number) {
    let amountOfDeletedItems:number ;
    let currentNumber = totalItems

    cart.map((Fruits)=>
    { if (Fruits.id === ids){
      amountOfDeletedItems = Fruits.amount
      currentNumber -= amountOfDeletedItems
    }
    })   
    setTotalItems(currentNumber)

    const newData = cart.map((Fruits) => {
      if (Fruits.id === ids) {
        return { ...Fruits, amount: 0 };
      }
      return Fruits;
    });
    setCart(newData);
  }

//* Botao de remover todos os produtos do carrinho

  function cleanall() {
      let currentNumber = totalItems
      currentNumber = 0
      setTotalItems (currentNumber)
    const newData = cart.map((Fruits) => {
        return { ...Fruits, amount: 0 };
    
    });
    setCart(newData);
    }

  return (
    <CartStyle>

      <header id="title">
        <h1>Your local fruit store.</h1>
      </header>

      <nav>
        <section id="carrinhoicon">
          <img id="icon" src={shoppingCart} onClick={showCart}></img>
          <h2>{totalItems}</h2>
        </section>
      </nav>

      <main className="wrapper">

        <section>
          <div>
            <img className='logo'src={logo} alt="" />
          </div>
          <div className="tablefruits">
            <table>
              <thead>
                <tr>
                  <th>Product List</th>
                </tr>
              </thead>
              {cart.map((Fruits) => (
                  <tbody id="Frutas" key={Fruits.id} className="fruitscard">
                    <tr data-testid="product">
                      <td>
                        <p>{Fruits.name}
                          <button type="button">
                            <img className="info" src={information} onClick={()=>showNutris(Fruits.id)}>

                            </img>
                          </button>
                        </p>
                      </td>
                      <td>

                          <button
                            type="button"
                            disabled={Fruits.amount <= 0}
                            onClick={() => decrementProduct(Fruits.id)}
                          >
                            <MdRemoveCircleOutline size={20} />
                          </button>
                          <input type="text" value={Fruits.amount} readOnly={true} />
                          <button
                            type="button"
                            onClick={() => imcrementProduct(Fruits.id)}
                          >
                            <MdAddCircleOutline size={20} />
                          </button>

                      </td>
                    </tr>
                  </tbody>
              ))}
            </table>
          </div>
        </section>


        {cart.map((Fruits) => {
            if (Fruits.available == true) {
              return (
              <div className = 'nutricao' key={Fruits.id}>
               <div id="nutris">
                <div className="nutritional">
                  <button onClick={() => closeNutriInfo(Fruits.id)}>X</button>
                  <h2>Nutritional Information of {Fruits.name}</h2>
                </div>
                <p>Carbohydrates: {Fruits.nutritions.carbohydrates}</p>
                <p>Protein: {Fruits.nutritions.protein}</p>
                <p>Fat: {Fruits.nutritions.fat}</p>
                <p>Calories: {Fruits.nutritions.calories}</p>
                <p>Sugar: {Fruits.nutritions.sugar}</p>
                </div>
              </div>
          )}
          })}

        <div className="aviso">
            <p>
            Check<img className="informando-botao-de-informacoes-nutricionais" src={information} alt="" />to see nutritional information.
            </p>
        </div>

        <section>
          <img id="womanShop" src={woman} alt="" />
          <img id="healthy" src={healthy} alt="" />
        </section>

        <div className={`CarrinhoGeral , ${aparecer}`} id="carrinnho">

          <div>
            <img src={imageCarrinho}></img>
          </div>

          <table className="Carrinho">
            <thead>
              <tr>
                <th>Product</th>
                <th>Amount</th>
                <th className="removeproduct">Remove</th>
              </tr>
            </thead>
            {cart.map((Fruits) => {
              if (Fruits.amount > 0) {
                return (
                  <tbody key={Fruits.id}>
                    <tr>
                      <td>
                        <strong>{Fruits.name}</strong>
                      </td>
                      <td>
                        <strong>{Fruits.amount}</strong>
                      </td>
                      <td className="deletebutton">
                        <button
                          type="button"
                          onClick={() => removeProduct(Fruits.id)}
                        >
                          <MdDelete size={20} />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              }
            })}


          </table>

          <div>
            <button className="purchase">Purchase</button>
            <button className="cleanall" onClick={() => cleanall()}>CleanAll</button>
          </div>

        </div>
      </main>
    </CartStyle>
  );
}
