import styled from "styled-components";

export const CartStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  main.wrapper {

  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100%;

  border-radius: 5px;

  background-color: rgba(255, 255, 255, 0.93);
  }

//* Scroll Bar  ############################################

  *::-webkit-scrollbar,
  *::-webkit-scrollbar-thumb {
    width: 26px;
    border-radius: 13px;
    background-clip: padding-box;
    border: 10px solid transparent;
    overflow-y: scroll;
  }

  *::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0 10px;
  }

//* Header ############################################

  #title{
    position: absolute;
    margin-top: 30px;

    color: green;
    font-size: 22px;
  }
  
  img.logo {
    height: 140px;
    width: 189px;
  }

//* Icone Do Carrinho de Compras  ############################################

    #icon{
    height: 80px;
    width: 90px;
    margin: 0;
    padding: 0;
  }

  #carrinhoicon {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    z-index: 100;
    position:absolute;
    top: -4%;
    right: 0%;
    cursor: pointer;
    border-radius:15px;
    margin: 40px 15px;

    h2{
      position: absolute;
      top: -11%;
      right: -7%;
      background-color: red;
      padding: 3px;
      padding-inline: 9px;
      color: white;
      border-radius: 100%;
      font-size: 16px;
    }

  }

  #carrinhoicon:active{
    box-shadow: inset rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

//* Tabela Lista de Produtos ############################################

  img.info {
    width: auto;
    height: auto;

    padding-left: 10px;
  }


  table {
    width: 50%;

    padding-left: 15px;
    margin-left: 50px;
    margin-top: -10px;

    text-align: center;
  }

  div.tablefruits {
    width: 400px;
    height: 500px;

    overflow: auto;
    -webkit-text-fill-color: black;
    
    color: rgba(0, 0, 0, 0);
   
    p {
        text-align: center;

        padding-left: 20px;
      }

    th {
      color: #999;
      text-align: center;
      padding: 0;
      font-size: 20px;
    }

    :hover {
      color: rgba(0, 0, 0, 0.3);
    }
  }

  tbody.fruitscard {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    
    width: 280px;

    margin-top: 30px;
    margin-bottom: 30px;

    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border-radius: 10px;
    background-color: white;

    td {
      padding: 5px;
      padding-bottom: 10px;

      justify-content: center;
    }

    tr {
      display: flex;
      flex-direction: column;

      width: 200px;
    }

    input {
      width: 15px;
      text-align: center;
      border: none;
    }
    button {
      border: none;
      background-color: white;
      color: darkgreen;
    }

    #balance {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  
//* Tabela do Carrinho de Compras  ############################################

  div.CarrinhoGeral {
    display: none;
    background-color: white;
    position: absolute;
    top: 13%;
    right: 5%;
    flex-direction: column;
    align-items: center;
    width: 25%;
    height: 500px;
    overflow: auto;
    color: rgba(0, 0, 0, 0);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius:20px;
    color: black;
    padding: 20px;

    img {
    height: 70px;
    width: 120px;
    padding-right: 20px;
  }

    div.cleanall {
      justify-content: end;
      bottom: 15%;
    }

  }

  table.Carrinho {
    border-collapse: collapse;
    text-align: center;
    margin: 0;

   tbody {
      background-color: white;
      text-align: center;

      
    }
    
    tr {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 12px 0px;
      background-color: #9cde8e88;
    }
    
    td {
      text-align: left;
      padding: 12px;
      padding-right: 0;
    }
    
    td.deletebutton {
    justify-content: center;
    text-align: center;
  
    button {
      border: none;
      color: purple;
      background-color: transparent;
    }
  }


  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  th.removeproduct {
    text-align: center;
  }

  }

  button.purchase {
        width: 130px;
        height: 50px;
        border: none;
        color: white;
        background-color: red;
        
     }

  button.cleanall {
    width: 130px;
    height: 50px;
    border: none;
    color: white;
    background-color: green;
    transition: 0.3s;

      :active {
          background-color: #5dbb5d;
        }
     }
 
  div.aparecer{
    display:flex;
  }

//* Cartao de informações	Nutricionais
  
    div.nutricao{
    text-align: left;
    align-self: center;
    font-size: 20px;
    height: 360px;
    width: 400px;
    padding-left: 30px;

    div.nutritional {
        background-color: #88C440;
        border-radius: 0;
        height: auto;
        margin: 0;
        padding-bottom: 10px;
        h2{
          color: white;
        }
     }

    button {
          width: 100%;
          background-color: transparent;
          border: none;
          color: white;
          font-weight: 700;
          text-align: end;
          padding-right: 5px;
        }


      div {
        padding-bottom: 20px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
        border-radius: 20px;
      }
      h2 {
        font-size: 20px;
        font-weight: 600;
        margin: 0;
        text-align: center;

        img {
        width: 10px;
        height: 10px;
        }
      }

      p {
        font-size:14px;
        padding-top: 10px;
        padding-left: 20px;
      }

    }

//* Imagem Healthy Food e Aviso sobre o botao de informacao nutricional

     #womanShop{
      position: absolute;
      top: 30%;
      right: 8%;
      height: 300px;
      width:300px;
     }
     #healthy{
      position: absolute;
      top: 56%;
      right: 20%;
      height: 200px;
      width: 200px;
     }

     div.aviso {
      position: absolute;
      bottom: 0%;
      right: 44%;
      height: 50px;
      padding: 10px;
      }

     img.informando-botao-de-informacoes-nutricionais {
 
      width: auto;
      height: auto;
      padding: 0 5px;
      }

`;
