import styled from "styled-components";
import { _v, Btnfiltro, Buscador, ContentFiltro, RegistrarMarca, TablaMarca, Title, useMarcaStore } from "../../index";
import { useState } from "react";
export function MarcaTemplate({ data }) {
  const [dataSelect, setDataSelect] = useState([]);
  const [accion, setAccion] = useState("");
  const [openRegistro, setOpenRegistro] = useState(false)
  const nuevoRegistro = () => {
    setOpenRegistro(!openRegistro);
    setAccion("Nuevo")
    setDataSelect([])
  }
  const { setBuscador } = useMarcaStore();
  return (
    <Container>
      {openRegistro && <RegistrarMarca dataSelect={dataSelect} accion={accion} onClose={() => setOpenRegistro(!openRegistro)} />}
      <section className="area1">
        <ContentFiltro>
          <Title>Marca</Title>
          <Btnfiltro
            funcion={nuevoRegistro}
            bgcolor="#4F8CFF"
            textcolor="#ffffff"
            icono={<_v.agregar />}
          />
        </ContentFiltro>
      </section>
      <section className="area2">
        <Buscador setBuscador={setBuscador} />
      </section>
      <section className="main">
        <TablaMarca data={data}
          setOpenRegistro={setOpenRegistro}
          setDataSelect={setDataSelect}
          setAccion={setAccion}
        />
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
