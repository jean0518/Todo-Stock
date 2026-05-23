import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import styled from "styled-components";
import { _v,  ContentAccionesTabla, Paginacion, useKardexStore } from "../../../index";
import Swal from "sweetalert2";
import { FaArrowsAltV } from "react-icons/fa";
import { useState } from "react";
import { Device } from "../../../styles/breakpoints";

export function TablaKardex({data, setOpenRegistro, setDataSelect, setAccion}) {
    const [pagina, setPagina] = useState(1);
    const {eliminarkardex} = useKardexStore()
    const editar = (data) => {
        if (data.descripcion==="Generica") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Este registro no se permite modificar ya que es un valor predeterminado"
            });
            return;
        }
        setOpenRegistro(true);
        setDataSelect(data);
        setAccion("Editar");


    };
    const eliminar = (p) => {
        if (p.estado===0) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Este registro ya fue eliminado anteriormente, (Estado inactivo)",
            });
            return;
        }
        Swal.fire({
            title: "¿Estas seguro de eliminar este registro?",
            text: "Una vez aliminado el registro, no se puede recuperar.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar"
        }).then(async(result) => {
            if (result.isConfirmed) {
                await eliminarkardex({id:p.id})
            }
        })
    };
    const columns = [
        {
            accessorKey: "descripcion",
            header:"Producto",
            cell:(info)=>info.getValue(),
            /* cell:(info)=><span>{info.getValue()}</span> */
        },
        {
            accessorKey: "fecha",
            header:"Fecha",
            cell:(info)=>info.getValue(),
            /* cell:(info)=><span>{info.getValue()}</span> */
        },
        {
            accessorKey: "tipo",
            header:"Tipo",
            cell:(info)=> {
                if(info.getValue()=="Salida"){
                    return (
                        <Colorcontent $color="#ed4d4d">
                            {info.getValue()}
                        </Colorcontent>
                    )
                }if(info.getValue()=="Entrada"){
                    return (
                        <Colorcontent $color="#30c85b">
                            {info.getValue()}
                        </Colorcontent>
                    )
                }else{
                    return (
                        <Colorcontent $color="#d5e21f">
                            {info.getValue()}
                        </Colorcontent>
                    )
                }
            }
                
            /* cell:(info)=><span>{info.getValue()}</span> */
        },
        {
            accessorKey: "detalle",
            header:"Motivo (Detalle)",
            cell:(info)=>info.getValue(),
            /* cell:(info)=><span>{info.getValue()}</span> */
        },
        {
            accessorKey: "nombres",
            header:"Usuario",
            cell:(info)=>info.getValue(),
            /* cell:(info)=><span>{info.getValue()}</span> */
        },
        {
            accessorKey: "cantidad",
            header:"Cantidad",
            cell:(info)=>info.getValue(),
            /* cell:(info)=><span>{info.getValue()}</span> */
        },
        {
            accessorKey: "stock",
            header:"Stock",
            cell:(info)=>info.getValue(),
            /* cell:(info)=><span>{info.getValue()}</span> */
        },
        {
            accessorKey: "estado",
            header:"Estado",
            cell:(info)=>info.getValue()==1 ? "Activo" : "Inactivo",
            /* cell:(info)=><span>{info.getValue()}</span> */
        },
        {
            accessorKey: "acciones",
            header: "",
            enableSorting: false,
            cell:(info)=>(
                    <ContentAccionesTabla 
                        /* funcionEditar={() => editar(info.row.original)} */
                        funcionEliminar={() => eliminar(info.row.original)}
                    />
            )
        }
    ]
    const table = useReactTable({
        data: data || [],
        columns,    
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <Container>
            <table className="responsive-table">
                <thead>
                    {
                        table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup}>
                                {headerGroup.headers.map((header)=>(
                                    <th key={header.id}>
                                        {header.column.columnDef.header}
                                        {header.column.getCanSort() && (
                                            <span style={{cursor:"pointer"}} onClick={header.column.getToggleSortingHandler()}>
                                                <FaArrowsAltV /> 
                                            </span>
                                        )}
                                        {
                                            {
                                                asc: " ↑",
                                                desc: " ↓",
                                            }[header.column.getIsSorted()]
                                        }
                                    </th>
                                ))}
                            </tr>
                        ))
                    }
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((item)=>(
                        <tr key={item.id}>
                            {
                                item.getVisibleCells().map((cell)=>(
                                    <td 
                                        key={cell.id}
                                        data-label={cell.column.columnDef.header}
                                    >                              
                                        {
                                        flexRender(cell.column.columnDef.cell,
                                        cell.getContext()
                                        )}
                                    </td>
                                ))
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
            <Paginacion 
                table={table} 
                irinicio={()=>table.setPageIndex(0)}
                pagina={table.getState().pagination.pageIndex+1} 
                setPagina={setPagina}
                maximo={table.getPageCount()}
            />
        </Container>

    );
}
const Container = styled.div`
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    background: ${({ theme }) => theme.bg};
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.bg4};
    padding: 4px;

    table {
        width: 100%;
        border-collapse: collapse;
        min-width: 320px;
    }

    thead {
        background: ${({ theme }) => theme.bg2};
    }
    th, td {
        padding: 0.8rem 0.75rem;
        border-bottom: 1px solid ${({ theme }) => theme.bg4};
        text-align: center;
    }
    th {
        font-weight: 600;
        font-size: 0.85rem;
        color: ${({ theme }) => theme.colorSubtitle};
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    td {
        font-size: 0.9rem;
        color: ${({ theme }) => theme.text};
    }
    tbody tr {
        transition: background 0.15s;
        &:hover {
            background: ${({ theme }) => theme.bgAlpha};
        }
        &:last-child td {
            border-bottom: none;
        }
    }

    .pagination {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        padding: 12px 16px;
        flex-wrap: wrap;
        border-top: 1px solid ${({ theme }) => theme.bg4};
    }
    .pagination .info { display: flex; gap: 8px; align-items: center; font-size: 0.85rem; color: ${({ theme }) => theme.colorSubtitle}; }
    .pagination .controls { display: flex; gap: 6px; align-items: center; }
    .pagination .btn {
        display: inline-flex;
        gap: 6px;
        align-items: center;
        padding: 8px 12px;
        border-radius: 8px;
        border: 1px solid ${({ theme }) => theme.bg4};
        background: ${({ theme }) => theme.bg};
        color: ${({ theme }) => theme.text};
        cursor: pointer;
        font-size: 0.85rem;
        transition: all 0.15s;
        &:hover:not([disabled]) {
            background: ${({ theme }) => theme.bgAlpha};
            border-color: ${({ theme }) => theme.primary};
        }
    }
    .pagination .btn[disabled] { opacity: 0.4; cursor: not-allowed; }
    .pagination .page { font-weight: 600; color: ${({ theme }) => theme.primary}; }

    @media (max-width: 768px) {
        table, thead, tbody, tr { display: block; width: 100%; }
        thead { display: none; }
        tr {
            background: ${({ theme }) => theme.bg};
            margin-bottom: 0.75rem;
            border-radius: 10px;
            border: 1px solid ${({ theme }) => theme.bg4};
            padding: 0.5rem 0;
        }
        td {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.5rem 1rem;
            text-align: right;
            border: none;
            border-bottom: 1px solid ${({ theme }) => theme.bg4};
            &:last-child { border-bottom: none; }
        }
        td::before {
            content: attr(data-label);
            font-weight: 600;
            color: ${({ theme }) => theme.colorSubtitle};
            text-align: left;
            font-size: 0.8rem;
        }
        .pagination { justify-content: center; }
        .pagination .page { display: none; }
    }
`;

const Colorcontent = styled.div`
    color: ${(props) => props.$color};
    border-radius: 8px;
    border: 1px dashed ${(props) => props.$color};
    text-align: center;
    padding: 3px;
    width: 70%;
    font-weight: 700;
    @media ${Device.tablet} {
        width: 100%;
    }
`