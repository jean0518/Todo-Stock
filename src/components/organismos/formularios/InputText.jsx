import styled from "styled-components";

export function InputText({ children, icono }) {
  return (
    <Container>
      <span className="input-icon">{icono}</span>
      <div className="form__group field">{children}</div>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;

  .input-icon {
    display: flex;
    color: #94A3B8;
    font-size: 1.2rem;
    min-width: 20px;
  }

  p, .field-error {
    color: #DC2626;
    font-size: 0.75rem;
    margin-top: 2px;
  }

  .form__group {
    position: relative;
    padding: 20px 0 0;
    width: 100%;
  }

  .form__field {
    font-family: inherit;
    width: 100%;
    border: none;
    border-bottom: 2px solid #E2E8F0;
    outline: 0;
    font-size: 0.95rem;
    color: #1E293B;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &.disabled {
      color: #94A3B8;
      background: #F1F5F9;
      border-radius: 8px;
      margin-top: 8px;
      padding: 8px 12px;
      border-bottom: 1px dashed #CBD5E1;
    }
  }

  .form__field::placeholder {
    color: transparent;
  }

  .form__field:placeholder-shown ~ .form__label {
    font-size: 0.95rem;
    cursor: text;
    top: 20px;
    color: #94A3B8;
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 0.8rem;
    color: #64748B;
    pointer-events: none;
    font-weight: 500;
  }

  .form__field:focus {
    padding-bottom: 6px;
    border-bottom: 2px solid #4F8CFF;
  }

  .form__field:focus ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 0.8rem;
    color: #4F8CFF;
    font-weight: 600;
  }

  .form__field:required,
  .form__field:invalid {
    box-shadow: none;
  }
`;
