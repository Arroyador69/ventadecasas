# Costa Prime Collection — Venta Exclusiva Fuengirola

Web de lujo para la venta exclusiva de un apartamento en primera línea en Castillo Sohail, Fuengirola (600.000 €).

## Stack

- **Next.js 15** (App Router)
- **Tailwind CSS 4**
- **TypeScript**
- **5 idiomas**: ES, EN, DE, FR, NL
- **Deploy**: Vercel + GitHub Actions (CI)

## Desarrollo local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abre [http://localhost:3000/es](http://localhost:3000/es)

## Variables de entorno

| Variable | Descripción |
|----------|-------------|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Teléfono WhatsApp sin + |
| `NEXT_PUBLIC_VIDEO_YOUTUBE_ID` | ID del vídeo YouTube (no listado) |
| `NEXT_PUBLIC_VIDEO_MP4` | Ruta alternativa a MP4 local |
| `WEB3FORMS_ACCESS_KEY` | Clave de [Web3Forms](https://web3forms.com) para recibir leads |
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio |

## Vídeo: ¿YouTube o self-hosted?

**Recomendado: YouTube no listado**

1. Sube el vídeo a YouTube como **No listado**
2. Copia el ID (ej: `dQw4w9WgXcQ` de `youtube.com/watch?v=dQw4w9WgXcQ`)
3. Ponlo en `NEXT_PUBLIC_VIDEO_YOUTUBE_ID`

Ventajas: gratis, CDN rápido, no consume ancho de banda de Vercel.

**Alternativa: MP4 en el repo**

1. Coloca el archivo en `public/video/tour.mp4`
2. Configura `NEXT_PUBLIC_VIDEO_MP4=/video/tour.mp4`

## Deploy en Vercel

### Opción A — Desde la web (recomendada)

1. Sube el código a [github.com/Arroyador69/ventadecasas](https://github.com/Arroyador69/ventadecasas)
2. Entra en [vercel.com](https://vercel.com) → **Add New Project**
3. Importa el repo `Arroyador69/ventadecasas`
4. Añade las variables de entorno
5. Deploy — cada push a `main` despliega automáticamente

### Opción B — CLI

```bash
npm i -g vercel
vercel
```

## GitHub Actions

En cada push a `main`, se ejecuta:

- `npm ci`
- `npm run lint`
- `npm run build`

Vercel despliega en paralelo si el repo está conectado.

## Estructura

```
src/
├── app/[locale]/     # Páginas por idioma
├── app/api/contact/  # API de leads
├── components/       # UI
├── data/property.ts  # Datos de la propiedad (añade más aquí)
└── i18n/             # Traducciones
```

## Añadir más propiedades en el futuro

Edita `src/data/property.ts` → array `listings` y crea páginas dinámicas `[slug]`.

## Personalizar

- **Marca**: `siteConfig.brand` en `src/data/property.ts`
- **Fotos**: `public/images/`
- **Textos**: `src/i18n/translations.ts`
- **Metros cuadrados**: `property.area` en `src/data/property.ts`
