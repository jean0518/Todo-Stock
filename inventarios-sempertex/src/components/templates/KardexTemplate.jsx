import styled from "styled-components";
import { _v, Btnsave, Buscador, ContentFiltro, RegistrarKardex, Tabs, Title, useKardexStore } from "../../index";
import { useState } from "react";
export function KardexTemplate({ data }) {
  const [dataSelect, setDataSelect] = useState([]);
  const [accion, setAccion] = useState("");
  const [openRegistro, setOpenRegistro] = useState(false);
  const [tipo, setTipo] = useState("");
  const nuevaEntrada = () => {
    setOpenRegistro(true)
    setTipo("Entrada")
  }
  const nuevaSalida = () => {
    setOpenRegistro(true)
    setTipo("Salida")
  }
  const { setBuscador } = useKardexStore();
  return (
    <Container>
      {openRegistro && <RegistrarKardex tipo={tipo} dataSelect={dataSelect} accion={accion} onClose={() => setOpenRegistro(!openRegistro)} />}
      <section className="area1">
        <ContentFiltro>
          <Title>Kardex</Title>
          <div className="kardex-actions">
            <Btnsave bgcolor="#00C48A" titulo="Entrada" funcion={nuevaEntrada} />
            <Btnsave bgcolor="#FF6B6B" titulo="Salida" funcion={nuevaSalida} />
          </div>
        </ContentFiltro>
      </section>
      <section className="area2">
        <Buscador setBuscador={setBuscador} />
      </section>
      <section className="main">
        <Tabs data={data} />
      </section>
    </Container>
  )
}
const Container = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  .area1 {
    display: flex;
    align-items: center;
    .kardex-actions {
      display: flex;
      gap: 8px;
    }
  }
  .area2 {
    display: flex;
    align-items: center;
    justify-content: end;
  }
  .main {
    display: flex;
    justify-content: center;
  }
`
