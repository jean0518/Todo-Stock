import { useState } from "react";
import styled from "styled-components";
import { _v } from "../../../styles/variables";
import { InputText, Btnsave, Buscador, ListaGenerica, useProductosStore, CardProductoSelect, useKardexStore, useUsuariosStore } from "../../../index";
import { useForm } from "react-hook-form";
import { useEmpresaStore } from "../../../store/EmpresaStore";
import BuscadorConLista from "../BuscadorConLista";
export function RegistrarKardex({ onClose, dataSelect, tipo }) {
  const {selectproductos, productosItemSelect, mostrarproductos} = useProductosStore();
  const {idusuario} = useUsuariosStore();
  const [isLoading, setIsLoading] = useState(false);
  const { insertarkardex} = useKardexStore();
  const { dataempresa } = useEmpresaStore();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleProductSelected = (product) => {
    selectproductos(product);
  };

  async function insertar(data) { 

      if (!productosItemSelect?.id) {
        console.error("❌ Error: Debe seleccionar un producto");
        return;
      }
    
      const p = {
        fecha: new Date(),
        tipo: tipo,
        id_usuario: idusuario,
        cantidad: parseFloat(data.cantidad),
        detalle: data.detalle,
        id_empresa: dataempresa.id,
        id_producto: productosItemSelect.id
      };

      try {
        setIsLoading(true);
        
        // 🔑 VALIDACIÓN: Asegurar que dataempresa existe
        if (!dataempresa?.id) {
            console.error("❌ Error: No hay empresa seleccionada");
            setIsLoading(false);
            return;
        }
        
        await insertarkardex(p);
        await mostrarproductos({ _id_empresa: dataempresa.id});
        onClose();
      }catch (error){
        console.error("Error al guardar kardex:", error);
      }finally {
        setIsLoading(false);
      }
  }
  return (
    <Container>
      <div className="sub-contenedor">
        <div className="headers">
          <section>
            <h1>
              Nueva {tipo == "Entrada" ? "entrada de productos" : "salida de productos"}
            </h1>
          </section>

          <section>
            <span onClick={onClose}>x</span>
          </section>
        </div>
        <div className="contentBuscador"> 
          <BuscadorConLista onSelectProduct={handleProductSelected} dataempresa={dataempresa} />
        </div>
        <CardProductoSelect key={productosItemSelect?.id} text1={productosItemSelect?.descripcion} text2={productosItemSelect?.stock}/>

        <form className="formulario" onSubmit={handleSubmit(insertar)}>
          <section>
            <article>
              <InputText icono={<_v.iconotodos />}>
                <input
                  className="form__field"
                  defaultValue={dataSelect.descripcion}
                  type="text"
                  placeholder=""
                  {...register("detalle", {
                    required: true,
                  })}
                />
                <label className="form__label">Motivo (Detalle)</label>
                {errors.detalle?.type === "required" && <p>Campo requerido</p>}
              </InputText>
            </article>

            <article>
              <InputText icono={<_v.iconocalculadora />}>
                <input
                  className="form__field"
                  defaultValue={dataSelect.descripcion}
                  type="number"
                  placeholder=""
                  {...register("cantidad", {
                    required: true,
                  })}
                />
                <label className="form__label">Cantidad</label>
                {errors.cantidad?.type === "required" && <p>Campo requerido</p>}
              </InputText>
            </article>

            <div className="btnguardarContent">
              <Btnsave
                icono={<_v.iconoguardar />}
                titulo={isLoading ? "Guardando..." : "Guardar"}
                bgcolor="#ef552b"
                disabled={isLoading}
              />
            </div>
          </section>
        </form>
      </div>
    </Container>
  );
}
const Container = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .sub-contenedor {
    width: 520px;
    max-width: 92%;
    border-radius: 20px;
    background: ${({ theme }) => theme.bg};
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    padding: 24px 32px 28px;
    z-index: 100;
    border: 1px solid ${({ theme }) => theme.bg4};

    .contentBuscador {
      position: relative;
    }

    .headers {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;

      h1 {
        font-size: 1.15rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colortitlecard};
      }
      span {
        font-size: 24px;
        cursor: pointer;
        color: ${({ theme }) => theme.colorSubtitle};
        transition: color 0.2s;
        line-height: 1;
        &:hover { color: #DC2626; }
      }
    }

    .formulario {
      section {
        gap: 16px;
        display: flex;
        flex-direction: column;
        .colorContainer {
          .colorPickerContent {
            padding-top: 15px;
            min-height: 50px;
          }
        }
      }
    }

    .btnguardarContent {
      margin-top: 8px;
    }
  }
`;

const ContentTitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  svg {
    font-size: 25px;
  }
  input {
    border: none;
    outline: none;
    background: transparent;
    padding: 2px;
    width: 40px;
    font-size: 28px;
  }
`;
const ContainerEmojiPicker = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;