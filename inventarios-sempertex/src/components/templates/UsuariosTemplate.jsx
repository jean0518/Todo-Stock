import styled from "styled-components";
import { _v, Btnfiltro, Buscador, ContentFiltro, RegistrarUsuarios, TablaUsuarios, Title, useUsuariosStore } from "../../index";
import { useState } from "react";
export function UsuariosTemplate({ data }) {
  const [dataSelect, setDataSelect] = useState([]);
  const [accion, setAccion] = useState("");
  const [openRegistro, setOpenRegistro] = useState(false)
  const nuevoRegistro = () => {
    setOpenRegistro(!openRegistro);
    setAccion("Nuevo")
    setDataSelect([])
  }
  const { setBuscador } = useUsuariosStore();
  return (
    <Container>
      {openRegistro && <RegistrarUsuarios dataSelect={dataSelect} accion={accion} onClose={() => setOpenRegistro(!openRegistro)} />}
      <section className="area1">
        <ContentFiltro>
          <Title>Personal</Title>
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
        <TablaUsuarios data={data}
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
