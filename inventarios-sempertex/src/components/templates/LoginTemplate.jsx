import styled, { keyframes } from "styled-components";
import { Btnsave, _v, useAuthStore, InputText, FooterLogin } from "../../index";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from "../../assets/inventarioslogo.png";
import { MdOutlineInfo } from "react-icons/md";
import { ThemeContext } from "../../App";
import { RegistrarAdmin } from "../organismos/formularios/RegistrarAdmin";
import { RecuperarPassword } from "../organismos/formularios/RecuperarPassword";

export function LoginTemplate() {
  const { setTheme } = useContext(ThemeContext);
  setTheme("light");
  const { signInWithEmail } = useAuthStore();
  const [showRegistro, setShowRegistro] = useState(false);
  const [showRecuperar, setShowRecuperar] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  async function iniciar(data) {
    setErrorMsg(false);
    const response = await signInWithEmail({
      correo: data.correo,
      pass: data.pass,
    });
    if (response) {
      navigate("/");
    } else {
      setErrorMsg(true);
    }
  }

  return (
    <Container>
      {showRegistro && <RegistrarAdmin setState={() => setShowRegistro(false)} />}
      {showRecuperar && <RecuperarPassword setState={() => setShowRecuperar(false)} />}

      <div className="bg-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
        <div className="shape shape-4" />
      </div>

      <div className="login-wrapper">
        <Card>
          <div className="card-header">
            <img src={logo} alt="logo" />
            <h1>TodoStock</h1>
            <p>Controla tu inventario de forma inteligente</p>
          </div>

          {errorMsg && <ErrorMsg>Credenciales incorrectas</ErrorMsg>}

          <form onSubmit={handleSubmit(iniciar)}>
            <InputText icono={<_v.iconoemail />}>
              <input
                className="form__field"
                type="text"
                placeholder="correo"
                {...register("correo", { required: true })}
              />
              <label className="form__label">Correo electrónico</label>
              {errors.correo && <span className="field-error">Campo requerido</span>}
            </InputText>

            <InputText icono={<_v.iconopass />}>
              <input
                className="form__field"
                type="password"
                placeholder="contraseña"
                {...register("pass", { required: true })}
              />
              <label className="form__label">Contraseña</label>
              {errors.pass && <span className="field-error">Campo requerido</span>}
            </InputText>

            <div className="forgot-link">
              <button type="button" onClick={() => setShowRecuperar(true)}>
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            <div className="card-actions">
              <Btnsave titulo="Iniciar sesión" bgcolor="#4F8CFF" />
              <button type="button" className="btn-link" onClick={() => setShowRegistro(true)}>
                Crear cuenta nueva
              </button>
            </div>
          </form>

          <div className="card-footer-info">
            <MdOutlineInfo />
            <span>Puedes crear una cuenta nueva o solicitar una a tu empleador</span>
          </div>
        </Card>
        <FooterLogin />
      </div>
    </Container>
  );
}

const float = keyframes`
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-20px) scale(1.05); }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0B1120 0%, #1A2335 50%, #0B1120 100%);
  position: relative;
  overflow: hidden;
  padding: 20px;

  .bg-shapes {
    position: absolute;
    inset: 0;
    pointer-events: none;
    .shape {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.15;
    }
    .shape-1 {
      width: 400px;
      height: 400px;
      background: #4F8CFF;
      top: -100px;
      right: -100px;
      animation: ${float} 6s ease-in-out infinite;
    }
    .shape-2 {
      width: 300px;
      height: 300px;
      background: #6C63FF;
      bottom: -50px;
      left: -50px;
      animation: ${float} 8s ease-in-out infinite reverse;
    }
    .shape-3 {
      width: 200px;
      height: 200px;
      background: #00C48A;
      top: 40%;
      left: 10%;
      animation: ${float} 7s ease-in-out infinite 1s;
    }
    .shape-4 {
      width: 250px;
      height: 250px;
      background: #4F8CFF;
      bottom: 20%;
      right: 15%;
      animation: ${float} 9s ease-in-out infinite 0.5s;
    }
  }

  .login-wrapper {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    max-width: 440px;
  }
`;

const Card = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 40px 36px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(79, 140, 255, 0.1);
  animation: fadeUp 0.5s ease;

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .card-header {
    text-align: center;
    margin-bottom: 32px;
    img {
      width: 64px;
      margin: 0 auto 16px;
    }
    h1 {
      font-size: 1.75rem;
      font-weight: 700;
      color: #1E293B;
      margin-bottom: 6px;
    }
    p {
      color: #64748B;
      font-size: 0.9rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .forgot-link {
    text-align: right;
    margin-top: 2px;
    button {
      background: none;
      border: none;
      color: #4F8CFF;
      font-size: 0.82rem;
      font-weight: 500;
      cursor: pointer;
      padding: 4px 0;
      transition: opacity 0.2s;
      &:hover {
        opacity: 0.75;
        text-decoration: underline;
      }
    }
  }

  .card-actions {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 16px;
    align-items: stretch;
    button, .btn {
      width: 100%;
    }
    .btn-link {
      background: none;
      border: none;
      color: #4F8CFF;
      font-weight: 600;
      font-size: 0.9rem;
      cursor: pointer;
      padding: 8px;
      transition: opacity 0.2s;
      &:hover {
        opacity: 0.8;
        text-decoration: underline;
      }
    }
  }

  .card-footer-info {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 24px;
    padding-top: 16px;
    border-top: 1px solid #E2E8F0;
    color: #94A3B8;
    font-size: 0.8rem;
    svg {
      font-size: 1rem;
      min-width: 16px;
    }
  }
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
