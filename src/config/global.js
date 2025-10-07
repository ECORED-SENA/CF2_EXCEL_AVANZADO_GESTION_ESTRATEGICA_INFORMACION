export default {
  global: {
    Name:
      'Generación de macros para la automatización de tareas en procesos empresariales',
    Description:
      'Este componente formativo brinda al aprendiz el conocimiento necesario para automatizar procesos en Excel usando macros y VBA, con foco en escenarios reales de analítica de datos y <em>reporting</em>. Asimismo, se busca desarrollar habilidades que le permita importar datos de múltiples fuentes, transformarlos para análisis, cargarlos en estructuras fiables (tablas/modelos) y automatizar todo el flujo de trabajo con un clic.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Transformar datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Carga',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Automatización',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tarea',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Definición de requisitos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Cálculos personalizados ',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Macros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Creación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Ejecución',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Interfaces',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/Excel_Avanzado_GEI_CF02_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Macros',
      referencia:
        'A2 Capacitación: Excel. (2020). Aprende macros en Excel en menos de 11 minutos [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PvebpkrMG4o ',
    },
    {
      tema: 'Macros',
      referencia:
        'SmartPro Academy. (2022). Aprende a crear macros en Excel desde cero [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=jjoeK6rzQDA ',
    },
    {
      tema: 'Macros',
      referencia:
        'A2 Capacitación: Excel. (2020). Macros que necesitas en tu trabajo [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=D-zMyoEfiR8 ',
    },
    {
      tema: 'Macros',
      referencia: 'Deivis Eduard Ramirez Martinez (2025). Dataset empleados. ',
      tipo: 'Archivo Excel',
      descarga: '/downloads/empleados.csv',
    },
    {
      tema: 'Macros',
      referencia:
        'Deivis Eduard Ramirez Martinez (2025). Dataset empleados_ejemplo. ',
      tipo: 'Archivo Excel',
      descarga: '/downloads/empleados_ejemplo.csv',
    },
    {
      tema: 'Macros',
      referencia:
        'Deivis Eduard Ramirez Martinez (2025). Dataset Practica interfaz. ',
      tipo: 'Archivo Excel ',
      descarga: '/downloads/PracticaInterfaz.xlsm',
    },
  ],
  glosario: [
    {
      termino: 'Automatización',
      significado:
        'uso de macros o herramientas como <em>Power Query</em> para ejecutar tareas repetitivas sin intervención manual.',
    },
    {
      termino: 'Carga de datos',
      significado:
        'inserción de la información transformada en la hoja de cálculo para su análisis final.',
    },
    {
      termino: 'Importación de datos',
      significado:
        'incorporación de información desde diversas fuentes externas a Excel para su posterior análisis.',
    },
    {
      termino: 'Limpieza de datos',
      significado: 'eliminación de errores, inconsistencias y duplicados.',
    },
    {
      termino: 'Macro',
      significado:
        'secuencia de instrucciones en VBA que permite automatizar tareas repetitivas dentro de Excel.',
    },
    {
      termino: 'Normalización',
      significado:
        'estandarización de formatos y unidades que mejora la consistencia y elimina redundancias.',
    },
    {
      termino: 'Pivotear datos',
      significado:
        'reorganización que convierte filas en columnas para facilitar el análisis comparativo.',
    },
    {
      termino: 'Tarea',
      significado:
        'unidad de trabajo sistemática, repetible y medible que transforma entradas en salidas siguiendo reglas de negocio.',
    },
    {
      termino: 'Transformar datos',
      significado:
        'conjunto de operaciones necesarias para hacer que los datos sean utilizables: consistentes, limpios, con tipos correctos y estructura apta para análisis y visualización.',
    },
    {
      termino: '<em>UserForm</em>',
      significado:
        'formulario personalizado creado en VBA que permite interacción con el usuario mediante controles visuales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alexander, M., Kusleika, R., & Walkenbach, J. (2018). Excel 2019 bible. John Wiley & Sons.',
      link: '',
    },
    {
      referencia:
        'Alexander, M., & Kusleika, D. (2019). Excel 2019 power programming with VBA. John Wiley & Sons.',
      link: '',
    },
    {
      referencia:
        'Bernal-García, J. J., Dolores, S. M. M. M., & Bernal-Soto, P. (2011). Representación automática de funciones en Excel y su aplicación docente. Revista Electrónica de Comunicaciones y Trabajos de ASEPUMA, 12(1), 141-157.',
      link: '',
    },
    {
      referencia:
        'González, F. J. P., & Llamas, M. D. C. G. (2017). Análisis y representación gráfica de funciones matemáticas con Excel. Anales de ASEPUMA, (25), 1.',
      link: '',
    },
    {
      referencia:
        'Winston, W. (2016). Microsoft Excel data analysis and business modeling. Microsoft press.',
      link: '',
    },
    {
      referencia:
        'Winston, W. (2021). Microsoft Excel data analysis and business modeling (Office 2021 and Microsoft 365). Microsoft Press.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Deivis Eduard Ramírez Martínez',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jose Eduardo Solano  Rivero',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
