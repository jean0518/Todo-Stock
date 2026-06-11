# TodoStock — Sistema de Gestión de Inventarios

Aplicación web moderna para la administración y control de inventarios empresariales. Permite gestionar productos, categorías, marcas, kardex de movimientos, usuarios y generar reportes de stock en tiempo real, todo respaldado por una arquitectura serverless con Supabase.

---

## Stack Tecnológico

| Capa | Tecnología |
|---|---|
| **Framework** | React 19 + Vite 7 |
| **Lenguaje** | JavaScript (ESM) |
| **Enrutamiento** | React Router v7 |
| **Estado global** | Zustand 5 |
| **Estado servidor** | TanStack Query 5 |
| **Backend & Auth** | Supabase (Auth + PostgreSQL + Storage) |
| **UI / Estilos** | Styled Components 6 |
| **Formularios** | React Hook Form 7 |
| **Tablas** | TanStack Table 8 |
| **PDF** | @react-pdf/renderer |
| **Iconos** | React Icons |
| **Notificaciones** | SweetAlert2 |
| **Linting** | ESLint 9 |

---

## Arquitectura

```
src/
├── components/
│   ├── atomos/          # Componentes base (Input, Botones, Iconos)
│   ├── moleculas/       # Componentes compuestos (Cards, Spinners, Mensajes)
│   ├── organismos/      # Componentes complejos (Sidebar, Tablas, Formularios)
│   └── templates/       # Layouts de cada página (Login, Home, etc.)
├── pages/               # Páginas enrutables
├── store/               # Stores globales con Zustand
├── context/             # Contextos de React (Auth)
├── hooks/               # Hooks personalizados (ProtectedRoute)
├── supabase/            # Capa de datos (CRUDs + cliente Supabase)
├── styles/              # Temas, variables y breakpoints
├── utils/               # Datos estáticos y utilidades
└── routers/             # Configuración de rutas
```

### Principios de diseño

- **Atomic Design** como metodología de organización de componentes
- **Separación de concerns**: lógica de negocio en stores (Zustand), UI en componentes, datos en capa Supabase
- **Rendimiento**: carga diferida de rutas, estado servidor cacheado con TanStack Query
- **Tema claro/oscuro** mediante ThemeProvider de Styled Components

---

## Funcionalidades

- **Autenticación**: login, registro y recuperación de contraseña con Supabase Auth
- **Productos**: CRUD completo con código de barras, stock mínimo y precios
- **Categorías y Marcas**: clasificación jerárquica de productos
- **Kardex**: registro de entradas y salidas con trazabilidad
- **Reportes**: stock actual general y por producto
- **Usuarios**: administración de personal con roles
- **Configuración**: datos de empresa, personalización del sistema

---

## Requisitos

- Node.js >= 18
- Cuenta en [Supabase](https://supabase.com)

## Variables de entorno

Crear un archivo `.env` en la raíz:

```env
VITE_APP_SUPABASE_URL=tu_url_de_supabase
VITE_APP_SUPABASE_ANON_KEY=tu_anon_key
```

## Scripts disponibles

```bash
npm run dev      # Inicia servidor de desarrollo (Vite)
npm run build    # Compila para producción
npm run preview  # Previsualiza build de producción
npm run lint     # Ejecuta ESLint
```

---

## Licencia

Todos los derechos reservados &copy; 2026 TodoStock
