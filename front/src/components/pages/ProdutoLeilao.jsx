import { useParams } from "react-router-dom";
import data from "../../data";
import TabelaLicitantes from "../leilao/TabelaLicitantes";
import DescricaoItem from "../leilao/DescricaoItem";
import DadosLeilao from "../leilao/DadosLeilao";
import styles from "./ProdutoLeilao.module.css";

import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import DadosVendedor from "../leilao/DadosVendedor";

function ProdutoLeilao() {
  const { id } = useParams();
  const idNumber = Number(id);

  function buscarProdutoPorId(idNumber) {
    for (const categoria in data) {
      const produto = data[categoria].filter((item) => item.id === idNumber)[0];
      if (produto) {
        return produto;
      }
    }
    return null;
  }

  const numeroLote = Math.round(Math.random() * 100, 1);

  const produto = buscarProdutoPorId(parseInt(idNumber));
  if (!produto) {
    return <p>Produto não encontrado!</p>;
  }

  return (
    <main className={styles.generalContainer}>
      <aside id={styles.asideContainer}>
        <div className={styles.imageArea}>
          <img src={produto.imagem} alt={produto.titulo} />

          <div>
            <TabelaLicitantes
              numeroOferta="1"
              dataOferta="17/09 14:34"
              valorOferta={produto.price}
              licitante="Aquiles"
            />
          </div>
        </div>

        <section>
          <DescricaoItem
            titulo={produto.titulo}
            formato={produto.formato}
            dataLancamento="16/11/2020"
            producao="Feito por seres humanos."
            critica="Muito bem aclamado pela crítica."
            tematica="Tema refletido pelo imaginário, realizado na ação."
          />
        </section>
      </aside>

      <aside className={styles.valoresInfoContainer}>
        <div className={styles.valoresArea}>
          <span className={styles.titulo}>{produto.titulo}</span>
          <p>Lote: ({numeroLote})</p>
          <p>
            Valor: <span className={styles.preco}>R$ {produto.price}</span>
          </p>
        </div>

        <div className={styles.row}></div>

        <section>
          <span>Escolha sua oferta:</span>

          <article>
            <section className={styles.primeirosValores}>
              <button>R$370</button>
              <button>R$450</button>
            </section>
            <section className={styles.escolherValorArea}>
              <button>R$400</button>
              <section className={styles.iconesArea}>
                <IoMdArrowDropup className={styles.icones} />
                <IoMdArrowDropdown className={styles.icones} />
              </section>
              <button>Confirmar</button>
            </section>
            <section className={styles.programarOfertaArea}>
              <span>Programar oferta:</span>
              <section className={styles.programarOfertaContent}>
                <button>R$400</button>

                <section className={styles.iconesArea}>
                  <IoMdArrowDropup className={styles.icones} />
                  <IoMdArrowDropdown className={styles.icones} />
                </section>

                <button>Programar</button>
              </section>
            </section>
          </article>

          <article className={styles.passarProdutosArea}>
            <section className={styles.secaoIcones}>
              <div className={styles.iconeBox}>
                <BsArrowLeftCircle className={styles.icone} />
              </div>
              <div className={styles.iconeBox}>
                <IoMdArrowDropleft className={styles.icone} />
              </div>
              <div className={styles.iconeBox}>
                <IoMdArrowDropright className={styles.icone} />
              </div>
              <div className={styles.iconeBox}>
                <BsArrowRightCircle className={styles.icone} />
              </div>
            </section>
            <section className={styles.iconeBox}>
              <span>1/150</span>
            </section>
          </article>
        </section>

        <div>
          <DadosLeilao
            status={produto.status}
            leilaoUnico="07/10/2024 09:00"
            local="de 17/09/2024 até 07/10/2024: ONLINE (Internet)"
            data="07/10/2024 09:00"
            valor={produto.price}
          />
        </div>

        <div>
          <DadosVendedor
            nomeVendedor="Departamento de discos e CDs do estado de Santa Catarina"
            depositorio="São Bento do Sul - Calico - DISCOS - CONSERVADOS"
            contato="(47) 3635 0455 / 9 9986 6523"
            cidade="São Bento do Sul/SC"
            endereco="Rua Agudos do Sul, Nº 180/Cruzeiro"
            visitacao="Os discos CONSERVADOS encontram-se a disposição para serem examinados mediante agendamento junto aos pátios de depósito do dia 30 de setembro a 04 de outubro de 2024, no horário das 09:00h às 12:00h e das 13:00h às 17:00h."
            retirada="A retirada dos lotes de discos CONSERVADOS poderá ser realizada, mediante agendamento junto aos Pátios de depósito, a partir do dia 14 de outubro de 2024, para Motos, e a partir do dia 16 de outubro 2024 para os discos."
          />
        </div>
      </aside>
    </main>
  );
}

export default ProdutoLeilao;
