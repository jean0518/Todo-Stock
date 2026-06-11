import { _v } from "../styles/variables";
import {
  AiOutlineHome,
  AiOutlineSetting,
} from "react-icons/ai";

export const DesplegableUser = [
  {
    text: "Mi perfil",
    icono: <_v.iconoUser/>,
    tipo: "miperfil",
  },
  {
    text: "Configuracion",
    icono: <_v.iconoSettings/>,
    tipo: "configuracion",
  },
  {
    text: "Cerrar sesión",
    icono: <_v.iconoCerrarSesion/>,
    tipo: "cerrarsesion",
  },
];



//data SIDEBAR
export const LinksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Kardex",
    icon: <_v.iconocategorias />,
    to: "/kardex",
  },
  {
    label: "Reportes",
    icon: <_v.iconoreportes />,
    to: "/reportes",
  },
 
];
export const SecondarylinksArray = [
  {
    label: "Configuración",
    icon: <AiOutlineSetting />,
    to: "/configurar",
  },

];

//data configuracion
export const DataModulosConfiguracion =[
  {
    title:"Productos",
    subtitle:"Registra tus productos",
    icono:"https://images.icon-icons.com/20/PNG/256/businesspackage_additionalpackage_box_add_insert_negoci_2335.png",
    link:"/configurar/productos",
   
  },
  {
    title:"Personal",
    subtitle:"Ten el control de tu personal",
    icono:"https://images.icon-icons.com/20/PNG/256/business_application_addmale_useradd_insert_add_user_client_2312.png",
    link:"/configurar/personal",
   
  },

  {
    title:"Tu empresa",
    subtitle:"Configura tus opciones básicas",
    icono:"https://images.icon-icons.com/20/PNG/256/businessregistration_signpen_negocio_inscripcio_2358.png",
    link:"/configurar/empresa",
    
  },
  {
    title:"Categoria de productos",
    subtitle:"Asigna categorias a tus productos",
    icono:"https://images.icon-icons.com/20/PNG/256/business_library_books_book_file_2328.png",
    link:"/configurar/categorias",
    
  },
  {
    title:"Marca de productos",
    subtitle:"Gestiona tus marcas",
    icono:"https://images.icon-icons.com/20/PNG/256/Business_packingboxes_negocio_2338.png",
    link:"/configurar/marca",
   
  },

]
//tipo usuario
export const TipouserData = [
  {
    descripcion: "empleado",
  },
  {
    descripcion: "administrador",
  },
];
//tipodoc
export const TipoDocData = [
  {
    descripcion: "Dni",
  },
  {
    descripcion: "Libreta electoral",
  },
  {
    descripcion: "Otros",
  },
];