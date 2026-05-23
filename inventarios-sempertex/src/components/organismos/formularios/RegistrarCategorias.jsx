import { useEffect, useState } from "react";
import styled from "styled-components";
import { _v } from "../../../styles/variables";
import { InputText, Btnsave, convertirMayusculas, useCategoriasStore, InsertarCategorias, EditarCategorias } from "../../../index";
import { useForm } from "react-hook-form";
import { useEmpresaStore } from "../../../store/EmpresaStore";
import { CirclePicker } from "react-color";
export function RegistrarCategorias({ onClose, dataSelect, accion }) {
  const [currentColor, setCurrentColor] = useState("F44336");
  const { insertarcategorias, editarcategorias } = useCategoriasStore();
  const { dataempresa } = useEmpresaStore();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const elegirColor = (color) => {
    setCurrentColor(color.hex);
  }

  async function insertar(data) {
    if (accion === "Editar") {
      const p = {
        id: dataSelect.id,
        descripcion: convertirMayusculas(data.nombre),
        color: currentColor
      };
      await editarcategorias(p);
      onClose();
    } else {
      const p = {
        _descripcion: convertirMayusculas(data.nombre),
        _idempresa: dataempresa.id,
        _color: currentColor
      };
      await insertarcategorias(p);
      onClose();
    }
  }
  useEffect(() => {
    if (accion === "Editar") {
      setCurrentColor(dataSelect.color)
    }
}, []);
  return (
    <Container>
      <div className="sub-contenedor">
        <div className="headers">
          <section>
            <h1>
              {accion == "Editar" ? "Editar categorias" : "Registrar nueva categoria"}
            </h1>
          </section>

          <section>
            <span onClick={onClose}>x</span>
          </section>
        </div>

        <form className="formulario" onSubmit={handleSubmit(insertar)}>
          <section>
            <article>
              <InputText icono={<_v.iconomarca />}>
                <input
                  className="form__field"
                  defaultValue={dataSelect.descripcion}
                  type="text"
                  placeholder=""
                  {...register("nombre", {
                    required: true,
                  })}
                />
                <label className="form__label">categorias</label>
                {errors.nombre?.type === "required" && <p>Campo requerido</p>}
              </InputText>
            </article>
            <article className="colorContainer">
                  <CirclePicker onChange={elegirColor} color={currentColor}/>
            </article>
            <div className="btnguardarContent">
              <Btnsave
                icono={<_v.iconoguardar />}
                titulo="Guardar"
                bgcolor="#ef552b"
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
    width: 500px;
    max-width: 92%;
    border-radius: 20px;
    background: ${({ theme }) => theme.bg};
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    padding: 24px 32px 28px;
    z-index: 100;
    border: 1px solid ${({ theme }) => theme.bg4};

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