import styled, { keyframes } from "styled-components";
import { InputText, Btnsave } from "../../../index";
import { useForm } from "react-hook-form";
import { MdAlternateEmail, MdPersonOutline } from "react-icons/md";
import { RiLockPasswordLine, RiLockPasswordFill } from "react-icons/ri";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUsuariosStore } from "../../../index";

export function RegistrarAdmin({ setState }) {
  const { insertarUsuarioAdmin } = useUsuariosStore();
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const mutation = useMutation({
    mutationFn: async (data) => {
      setErrorMsg("");
      const p = {
        correo: data.correo,
        pass: data.pass,
      };
      const dt = await insertarUsuarioAdmin(p);
      if (dt) {
        navigate("/");
      } else {
        setErrorMsg("El correo ya está registrado o los datos son inválidos");
      }
    },
  });

  return (
    <Overlay onClick={() => setState()}>
      <Container onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={() => setState()}>&times;</CloseBtn>
        <div className="header">
          <h1>Crear cuenta nueva</h1>
          <p>Regístrate para comenzar a usar TodoStock</p>
        </div>

        {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}

        <form onSubmit={handleSubmit(mutation.mutateAsync)}>
          <InputText icono={<MdPersonOutline />}>
            <input
              className="form__field"
              type="text"
              placeholder="Nombre completo"
              {...register("nombre", { required: true })}
            />
            <label className="form__label">Nombre completo</label>
            {errors.nombre && <span className="field-error">Campo requerido</span>}
          </InputText>

          <InputText icono={<MdAlternateEmail />}>
            <input
              className="form__field"
              style={{ textTransform: "lowercase" }}
              type="email"
              placeholder="correo@ejemplo.com"
              {...register("correo", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              })}
            />
            <label className="form__label">Correo electrónico</label>
            {errors.correo?.type === "pattern" && (
              <span className="field-error">Formato de email incorrecto</span>
            )}
            {errors.correo?.type === "required" && (
              <span className="field-error">Campo requerido</span>
            )}
          </InputText>

          <InputText icono={<RiLockPasswordLine />}>
            <input
              className="form__field"
              type="password"
              placeholder="Contraseña (mín. 6 caracteres)"
              {...register("pass", {
                required: true,
                minLength: 6,
              })}
            />
            <label className="form__label">Contraseña</label>
            {errors.pass?.type === "required" && (
              <span className="field-error">Campo requerido</span>
            )}
            {errors.pass?.type === "minLength" && (
              <span className="field-error">Mínimo 6 caracteres</span>
            )}
          </InputText>

          <InputText icono={<RiLockPasswordFill />}>
            <input
              className="form__field"
              type="password"
              placeholder="Repite la contraseña"
              {...register("confirmPass", {
                required: true,
                validate: (val) => val === watch("pass"),
              })}
            />
            <label className="form__label">Confirmar contraseña</label>
            {errors.confirmPass?.type === "required" && (
              <span className="field-error">Campo requerido</span>
            )}
            {errors.confirmPass?.type === "validate" && (
              <span className="field-error">Las contraseñas no coinciden</span>
            )}
          </InputText>

          <div className="btn-wrap">
            <Btnsave
              titulo="Crear cuenta"
              bgcolor="#4F8CFF"
            />
          </div>
        </form>

        <div className="footer-text">
          ¿Ya tienes cuenta? <button type="button" onClick={() => setState()}>Inicia sesión</button>
        </div>
      </Container>
    </Overlay>
  );
}

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const Container = styled.div`
  background: #fff;
  border-radius: 24px;
  padding: 36px 32px 28px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 0.3s ease;
  position: relative;

  .header {
    text-align: center;
    margin-bottom: 24px;
    h1 {
      font-size: 1.4rem;
      font-weight: 700;
      color: #1E293B;
      margin-bottom: 4px;
    }
    p {
      font-size: 0.85rem;
      color: #64748B;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .btn-wrap {
    margin-top: 16px;
    display: flex;
    justify-content: center;
  }

  .footer-text {
    margin-top: 20px;
    text-align: center;
    font-size: 0.85rem;
    color: #64748B;
    button {
      background: none;
      border: none;
      color: #4F8CFF;
      font-weight: 600;
      cursor: pointer;
      &:hover { text-decoration: underline; }
    }
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 20px;
  background: none;
  border: none;
  font-size: 28px;
  color: #94A3B8;
  cursor: pointer;
  line-height: 1;
  transition: color 0.2s;
  &:hover { color: #DC2626; }
`;

const ErrorMsg = styled.div`
  background: #FEE2E2;
  color: #DC2626;
  padding: 10px 16px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 16px;
`;
