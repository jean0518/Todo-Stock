import styled from 'styled-components';
import { useUsuariosStore } from '../../store/UsuariosStore';
import { useEffect, useState } from 'react';
export function ListaModulos({checkboxs, setCheckBoxs, accion}) {
    const {datamodulos, datapermisosEdit} = useUsuariosStore();
    useEffect(()=> {
        if (accion =="Editar"){
            let allDoc = [];
            datamodulos.map((element)=> {
                const statePermiso = datapermisosEdit?.some((objeto) => objeto.modulos.nombre.includes(element.nombre))
                if(statePermiso){
                  allDoc.push({...element, check: true})
                }else{
                  allDoc.push({...element, check: false})
                }
            })
            setCheckBoxs(allDoc)
        }
        else{
            setCheckBoxs(datamodulos);
        }
    },[datapermisosEdit]);
    const handlecheckbox=(id)=>{
        setCheckBoxs((prev)=>{
            return prev?.map((item)=>{
                if (item.id===id) {
                    return{...item,check:!item.check}
                }
                else{
                    return{...item}
                }
            })
        })
        console.log(checkboxs)
    }
    
    return (
        <Container>
        {
            checkboxs?.map((item, index)=>{
                return(
                    <div key={index}>
                        <label className="container">
                            <input
                            checked={item.check}
                            type="checkbox" 
                            onChange={()=>handlecheckbox(item.id)}/>
                            <div className="checkmark"></div>
                            <span>{item.nombre}</span>
                        </label>
                        
                        
                    </div>
                )
            })
        }
        </Container>
    )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  border: 2px dashed ${({ theme }) => theme.bg4};
  border-radius: 12px;
  padding: 16px;

  > div {
    padding: 8px 10px;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.15s;
  }

  > div:hover {
    background: ${({ theme }) => theme.bgAlpha};
  }

  .container {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    font-size: 0.9rem;
    user-select: none;
    gap: 10px;
    color: ${({ theme }) => theme.text};
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
  }

  .container .checkmark {
    position: relative;
    flex-shrink: 0;
    height: 1.3em;
    width: 1.3em;
    background: ${({ theme }) => theme.bg};
    border: 2px solid ${({ theme }) => theme.bg4};
    border-radius: 6px;
    transition: all 0.2s;
  }

  .container:hover .checkmark {
    border-color: ${({ theme }) => theme.primary};
  }

  .container input:checked ~ .checkmark {
    background: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
  }

  .container .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    left: 50%;
    top: 45%;
    width: 0.25em;
    height: 0.5em;
    transform: translate(-50%, -50%) rotate(40deg);
    border: solid #fff;
    border-width: 0 0.15em 0.15em 0;
    border-radius: 1px;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  span {
    display: inline-block;
    vertical-align: middle;
    font-size: 0.9rem;
    line-height: 1.3;
    max-width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  @media (max-width: 600px) {
    > div { padding: 6px 8px; }
    span {
      white-space: normal;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
`;