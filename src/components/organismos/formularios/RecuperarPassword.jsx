import styled, { keyframes } from "styled-components";
import { InputText, Btnsave } from "../../../index";
import { useForm } from "react-hook-form";
import { MdAlternateEmail, MdArrowBack } from "react-icons/md";
import { useState } from "react";

/* ============================================================
   COMPONENTE: RecuperarPassword (UI ÚNICAMENTE)
   ------------------------------------------------------------
   PARA CONECTAR CON SUPABASE (recuperación real de contraseña):
   
   Paso 1: Importa `supabase` desde tu archivo de configuración:
       import { supabase } from "../../../index";
   
   Paso 2: En la función `handleRecovery`, agrega:
       const { data, error } = await supabase.auth.resetPasswordForEmail(
         data.correo,
         { redirectTo: "https://tudominio.com/actualizar-password" }
       );
       if (error) {
         setMensaje("Error al enviar el correo. Verifica que el email esté registrado.");
       } else {
         setMensaje("¡Revisa tu bandeja de entrada! Te enviamos un enlace para restablecer tu contraseña.");
       }
   
   Paso 3 (opcional): Crea una página `/actualizar-password` que llame a:
       await supabase.auth.updateUser({ password: nuevaPassword })
   
   Paso 4: En `supabase.config.jsx` asegúrate de tener configurado:
       VITE_APP_SUPABASE_URL=tu_url
       VITE_APP_SUPABASE_ANON_KEY=tu_anon_key
   
   Paso 5: En el panel de Supabase ve a:
       Authentication > Settings > Email Templates > Reset Password
       y personaliza la plantilla del correo.
   ============================================================ */

export function RecuperarPassword({ setState }) {
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function handleRecovery(data) {
    /* -------------------------------------------------------
       CONEXIÓN CON SUPABASE - PASO 2:
       Descomenta el código de abajo y ajusta el redirectTo
       con la URL de tu aplicación.
       
       import { supabase } from "../../../index";
       
       const { error } = await supabase.auth.resetPasswordForEmail(
         data.correo,
         { redirectTo: "http://localhost:5173/actualizar-password" }
       );
       
       if (error) {
         setMensaje("Error al enviar el correo. Verifica que el email esté registrado.");
         return;
       }
    ------------------------------------------------------- */
    setEnviado(true);
    setMensaje("¡Revisa tu bandeja de entrada! Te enviamos un enlace para restablecer tu contraseña.");
  }

  return (
    <Overlay onClick={() => setState()}>
      <Container onClick={(e) => e.stopPropagation()}>
        <BackBtn onClick={() => setState()}>
          <MdArrowBack />
        </BackBtn>

        <div className="header">
          <div className="icon-lock">&#128274;</div>
          <h1>¿Olvidaste tu contraseña?</h1>
          <p>Ingresa tu correo electrónico y te enviaremos un enlace para restablecerla.</p>
        </div>

        {mensaje && (
          <MensajeBox $success={enviado}>
            {mensaje}
          </MensajeBox>
        )}

        {!enviado && (
          <form onSubmit={handleSubmit(handleRecovery)}>
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

            <div className="btn-wrap">
              <Btnsave titulo="Enviar enlace" bgcolor="#4F8CFF" />
            </div>
          </form>
        )}

        <div className="footer-text">
          <button type="button" onClick={() => setState()}>
            Volver al inicio de sesión
          </button>
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
    .icon-lock {
      font-size: 2.5rem;
      margin-bottom: 8px;
    }
    h1 {
      font-size: 1.3rem;
      font-weight: 700;
      color: #1E293B;
      margin-bottom: 6px;
    }
    p {
      font-size: 0.85rem;
      color: #64748B;
      line-height: 1.5;
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
    button {
      background: none;
      border: none;
      color: #4F8CFF;
      font-weight: 600;
      font-size: 0.85rem;
      cursor: pointer;
      &:hover { text-decoration: underline; }
    }
  }
`;

const BackBtn = styled.button`
  position: absolute;
  top: 16px;
  left: 20px;
  background: none;
  border: none;
  font-size: 22px;
  color: #64748B;
  cursor: pointer;
  display: flex;
  transition: color 0.2s;
  &:hover { color: #4F8CFF; }
`;

const MensajeBox = styled.div`
  background: ${({ $success }) => ($success ? "#E8F5E9" : "#FEE2E2")};
  color: ${({ $success }) => ($success ? "#2E7D32" : "#DC2626")};
  padding: 14px 16px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 16px;
  line-height: 1.5;
`;
