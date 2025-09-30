<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Transformar datos

    .fondo___color_1
      .px-5
        .fondo___img
          .px-5
            p.mb-4 La <strong>transformación de datos</strong> es el conjunto de operaciones necesarias para hacer que los datos sean <strong>utilizables</strong>: consistentes, limpios, con tipos correctos y estructura apta para análisis y visualización. Este proceso convierte datos brutos en <strong>información útil y accionable</strong>. Entre los pasos fundamentales se incluyen:
            .row.align-items-center.mb-5
              .col-xl-4(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img2.png', alt='' style="max-width: 350px").m-auto
              .col-xl-8(data-aos="fade-left")
                SlyderF(columnas="col-lg-6 col-xl-6")
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img3.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Limpieza de datos
                    p.mb-0 Eliminación de errores, inconsistencias y duplicados.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img4.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Normalización
                    p.mb-0 Estandarización de formatos y unidades.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img5.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Conversión de tipos de datos
                    p.mb-0 Asegura que cada variable tenga el formato adecuado (ej. fechas como fechas, números como números).
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img6.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Estructuración de datos
                    p.mb-0 Adaptación del formato para que sea compatible con herramientas de análisis y visualización.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img7.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Agregación de datos
                    p.mb-0 Combinación de datos provenientes de múltiples fuentes.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img8.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Creación de nuevas variables derivadas
                    p.mb-0 Generación de variables a partir de otras existentes.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img9.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Codificación de variables categóricas
                    p.mb-0 Transformación de categorías en códigos numéricos o etiquetas.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img10.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Imputación de valores faltantes
                    p.mb-0 Sustitución o estimación de datos ausentes.

        p.mb-5 Estas operaciones no solo preparan los datos para su análisis inmediato, sino que también <strong>mejoran su calidad y confiabilidad a largo plazo</strong>. Una transformación efectiva es crucial para garantizar la <strong>integridad de los análisis</strong> y para facilitar la <strong>extracción de <em>insights</em> valiosos</strong> que informen la toma de decisiones basada en datos.

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
          .col
            h3 Transformaciones en Excel
        
        .row.align-items-center.mb-4
          .col-xl
            p.mb-3 En el dinámico mundo de los negocios y la analítica de datos, <strong>Excel</strong> se posiciona como una herramienta clave y predominante. Este <em>software</em> actúa como un <strong>puente entre los datos masivos y las decisiones estratégicas</strong>, gracias a sus capacidades de transformación y automatización. En Excel, las transformaciones pueden realizarse mediante:
            .row.align-items-center.m-0.style___box_3(data-aos="fade-right")
              .col-xl-auto
                figure.d-none.d-xl-block(data-aos="zoom-in")
                  img(src="@/assets/curso/temas/img13.svg", alt="" style="max-width: 180px").m-auto
              .col-xl
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Métodos <strong>manuales</strong> (filtros, fórmulas, tablas dinámicas, etc.).</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong><em>Power Query</em></strong>, que permite aplicar transformaciones complejas de manera visual y reproducible.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong>Macros o VBA</strong>, que automatizan procesos y optimizan flujos de trabajo, ahorrando tiempo valioso.</li>
                </ul>
          .col-xl-auto
            figure.d-none.d-xl-block(data-aos="fade-left")
              img(src="@/assets/curso/temas/img14.png", alt="").m-auto
        
        p.mb-0 Vamos a sumergirnos en el fascinante universo de las <strong>macros en Excel</strong>, una habilidad poderosa que te permitirá llevar tu productividad al siguiente nivel.

        <!-- BLOQUE 1 -->
        Separador
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Tipos
    
    p.mb-5 En <strong>Excel</strong>, la transformación de datos implica convertir información en bruto en un formato adecuado para su <strong>análisis, visualización o presentación</strong>. Este proceso puede adoptar diversas formas, entre ellas:

    .row.align-items-center.mb-5.m-0.espacio___movil_1
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img15.png", alt="").m-auto
      .col-xl
        .style___box_4.mb-4(data-aos="fade-left")
          <ul class="fa-ul estilo___ul_1 mb-0">
            <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong>Conversión de formatos</strong>: cambiar tipos de datos, como números a texto, fechas o moneda.</li>
            <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong>Limpieza</strong>: eliminar espacios innecesarios, duplicados o caracteres no válidos.</li>
            <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong>Agrupación y resumen:</strong> uso de tablas dinámicas para condensar y analizar información.</li>
            <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong>Normalización</strong>: ajustar escalas y unidades para permitir comparaciones consistentes.</li>
          </ul>
        p.mb-4 Estas transformaciones se pueden clasificar en dos grandes categorías:
        .row
          .col-xl-6(data-aos="zoom-in")
            .style___box_5.h-100
              h4.mb-0.text-center Transformaciones estructurales
              p.mb-0 Modifican la organización o forma de los datos para hacerlos más analizables o visualizables.
          .col-xl-6(data-aos="zoom-in").espacio___movil_3
            .style___box_5.h-100.ajuste___box_5
              h4.mb-0.text-center Transformaciones de formato
              p.mb-0 Cambian el tipo o presentación de los datos sin alterar su estructura general.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Pivotear datos

    p.mb-5 El pivoteo convierte filas en columnas para reorganizar los datos y facilitar su análisis.

    .fondo___color_2
      .px-5

        .row.justify-content-center.mb-5
          .col-xl-10
            .row.align-items-center
              .col-xl-8
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Tabla 1.
                  span Datos sin pivotear 
                .tabla-a(data-aos="zoom-in")
                  table
                    thead
                      tr
                        th.ajuste-border-tabla Vendedor
                        th.ajuste-border-tabla Trimestre
                        th Ventas
                    tbody
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla Ana García
                        td.ajuste-border-tabla Q1
                        td $ 15.000
                      tr
                        td.ajuste-border-tabla Ana García
                        td.ajuste-border-tabla Q2
                        td $ 18.500
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla Carlos López
                        td.ajuste-border-tabla Q1
                        td $ 12.300
                      tr
                        td.ajuste-border-tabla Carlos López
                        td.ajuste-border-tabla Q2
                        td $ 16.800
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla María Silva
                        td.ajuste-border-tabla Q1
                        td $ 14.700
                      tr
                        td.ajuste-border-tabla María Silva
                        td.ajuste-border-tabla Q2
                        td $ 19.200
              .col-xl-4(data-aos="fade-left")
                figure.d-none.d-xl-block
                  img(src="@/assets/curso/temas/img17.png", alt="").m-auto      
        
        p.mb-5 En esta tabla, cada fila representa una venta realizada por un vendedor en un trimestre específico. A continuación, los mismos datos se presentan en formato horizontal.

        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 2.
              span Datos pivoteados 
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla Vendedor
                    th.ajuste-border-tabla Q1
                    th Q2
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Ana García
                    td.ajuste-border-tabla $ 15.000
                    td $ 18.500
                  tr
                    td.ajuste-border-tabla Carlos López
                    td.ajuste-border-tabla $ 12.300
                    td $ 16.800
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla María Silva
                    td.ajuste-border-tabla $ 14.700
                    td $ 19.200
        
        h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") ¿Qué cambió en la transformación?

        p.mb-5 A continuación, se detallan las diferencias estructurales entre los datos sin pivotear y los pivoteados.

        .row.mb-5
          .col-lg-4(data-aos="zoom-in")
            .tarjeta--boton.p-5.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.d-none.d-xl-block
                    img(src='@/assets/curso/temas/img18.svg', alt="" style="max-width: 90px").m-auto
              h3.text-center Antes del pivoteo
              <ul class="fa-ul estilo___ul mb-0">
                <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>6 filas de datos (una por cada combinación vendedor - trimestre).</li>
                <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>3 columnas: <strong>vendedor, trimestre, ventas</strong>.</li>
                <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Formato <strong>largo</strong> o vertical.</li>
                <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Cada venta ocupa una fila completa.</li>
              </ul>
          .col-lg-4(data-aos="zoom-in").espacio___movil_3
            .tarjeta--boton.p-5.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.d-none.d-xl-block
                    img(src='@/assets/curso/temas/img19.svg', alt="" style="max-width: 90px").m-auto
              h3.text-center Después del pivoteo
              <ul class="fa-ul estilo___ul mb-0">
                <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>3 filas de datos (una por vendedor).</li>
                <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>3 columnas: <strong>vendedor, Q1, Q2</strong>.</li>
                <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Formato <strong>ancho</strong> u horizontal.</li>
                <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Los trimestres se convirtieron en columnas.</li>
                <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Se facilita la comparación entre trimestres.</li>
              </ul>
          .col-lg-4(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img20.png', alt="" ).m-auto
    
    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Ventajas del pivoteo

    p.mb-5 El formato pivotado ofrece beneficios clave para el análisis, visualización y presentación de datos.

    .row.align-items-center.mb-5.m-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img21.png", alt="").m-auto
      .col-xl.style___box_6(data-aos="fade-left")
        <ul class="fa-ul estilo___ul mb-0">
          <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong>Comparación visual más clara</strong>: se puede ver rápidamente el rendimiento de cada vendedor en diferentes trimestres.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong>Reducción de filas</strong>: los datos ocupan menos espacio y son más compactos.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong>Mejor para gráficos</strong>: Excel puede generar gráficos comparativos con mayor facilidad.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong>Análisis horizontal</strong>: permite aplicar cálculos como diferencias entre trimestres o totales por fila.</li>
        </ul>
    
    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") ¿Cuándo usar cada formato?

    p.mb-5 La elección del formato dependerá del objetivo: entrada, análisis o presentación de los datos.

    .row.align-items-center.mb-5.m-0
      .col-xl
        .row
          .col-xl-6(data-aos="zoom-in")
            .style___box_7.h-100
              h4.mb-0.text-center Sin pivotear
              p.mb-0 Ideal para la <strong>entrada de datos, bases de datos o filtros complejos</strong>.
          .col-xl-6(data-aos="zoom-in").espacio___movil_3
            .style___box_7.h-100
              h4.mb-0.text-center Pivoteado
              p.mb-0 Adecuado para <strong>reportes, presentaciones o análisis comparativo</strong>.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img22.png", alt="").m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Normalizar y desnormalizar
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img23.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este proceso busca estructurar y organizar la información de manera eficiente y consistente. La <strong>normalización</strong> consiste en dividir datos complejos en <strong>tablas más simples</strong>, eliminando redundancias. En contraste, la <strong>desnormalización</strong> une tablas para facilitar el análisis directo. Estas prácticas son especialmente importantes al trabajar con <strong>bases de datos relacionales</strong>.
    
    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Principios básicos de la normalización

    p.mb-5 A continuación, se presentan los fundamentos que guían una estructura de datos normalizada:

    .row.align-items-center.mb-5.m-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img24.png", alt="").m-auto
      .col-xl.style___box_6(data-aos="fade-left")
        <ul class="fa-ul estilo___ul mb-0">
          <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong>Una fila por registro</strong>: cada fila debe representar una única entidad o evento.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong>Una columna por atributo</strong>: cada columna debe contener un solo tipo de información.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong>Eliminar redundancia</strong>: evitar duplicar información innecesariamente.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong>Consistencia en formatos</strong>: usar formatos uniformes para fechas, números y texto.</li>
        </ul>
    
    p.mb-5 Veamos un ejemplo concreto de normalización; se parte de una tabla con información duplicada y poco estructurada.
    
    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Tabla 3.
      span Datos sin transformar
    .tabla-a.ajuste___tabla_3(data-aos="zoom-in").mb-5
      table
        thead
          tr
            th.ajuste-border-tabla ID_Empleado
            th.ajuste-border-tabla Nombre_Empleado
            th.ajuste-border-tabla Departamento
            th.ajuste-border-tabla Jefe_Departamento
            th.ajuste-border-tabla Telefono_Jefe
            th.ajuste-border-tabla Proyecto
            th Fecha_Inicio
        tbody
          tr.ajuste-color-tabla
            td.ajuste-border-tabla E001
            td.ajuste-border-tabla Juan Pérez
            td.ajuste-border-tabla Marketing
            td.ajuste-border-tabla Ana Rodríguez
            td.ajuste-border-tabla 555-0101
            td.ajuste-border-tabla Campaña Digital
            td 15/01/2024
          tr
            td.ajuste-border-tabla E002
            td.ajuste-border-tabla María Gonzalez
            td.ajuste-border-tabla Marketing
            td.ajuste-border-tabla Ana Rodríguez
            td.ajuste-border-tabla 555-0101
            td.ajuste-border-tabla Rediseño Web
            td 1/02/2024
          tr.ajuste-color-tabla
            td.ajuste-border-tabla E003
            td.ajuste-border-tabla Carlos Silva
            td.ajuste-border-tabla Ventas
            td.ajuste-border-tabla Roberto Martín
            td.ajuste-border-tabla 555-0102
            td.ajuste-border-tabla Expansión Norte
            td 20/01/2024
          tr
            td.ajuste-border-tabla E004
            td.ajuste-border-tabla Laura Torres
            td.ajuste-border-tabla Ventas
            td.ajuste-border-tabla Roberto Martín
            td.ajuste-border-tabla 555-0102
            td.ajuste-border-tabla Clientes Premium
            td 1/03/2024
          tr.ajuste-color-tabla
            td.ajuste-border-tabla E005
            td.ajuste-border-tabla Diego López
            td.ajuste-border-tabla IT
            td.ajuste-border-tabla Carmen Ruiz
            td.ajuste-border-tabla 555-0103
            td.ajuste-border-tabla Migración Cloud
            td 1/02/2024
    
    p.mb-5 Esta tabla contiene <strong>información redundante</strong>, especialmente en los campos relacionados con el departamento y sus responsables. Ahora, observemos cómo queda tras la normalización. Se crean tres tablas separadas y relacionadas por identificadores únicos.

    .row.mb-2
      .col-xl-5
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 4.
          span <strong>Empleados</strong> (información básica individual)
        .tabla-a.ajuste___tabla_4(data-aos="zoom-in").mb-5
          table
            thead
              tr
                th.ajuste-border-tabla ID_Empleado
                th.ajuste-border-tabla Nombre_Empleado
                th ID_Departamento
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla E001
                td.ajuste-border-tabla Juan Pérez
                td D01
              tr
                td.ajuste-border-tabla E002
                td.ajuste-border-tabla María Gonzalez
                td D01
              tr.ajuste-color-tabla
                td.ajuste-border-tabla E003
                td.ajuste-border-tabla Carlos Silva
                td D02
              tr
                td.ajuste-border-tabla E004
                td.ajuste-border-tabla Laura Torres
                td D02
              tr.ajuste-color-tabla
                td.ajuste-border-tabla E005
                td.ajuste-border-tabla Diego López
                td D03
      .col-xl-7
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 5.
          span <strong>Departamentos</strong> (información única por departamento)
        .tabla-a.ajuste___tabla_5(data-aos="zoom-in").mb-5
          table
            thead
              tr
                th.ajuste-border-tabla ID_Departamento
                th.ajuste-border-tabla Nombre_Departamento
                th.ajuste-border-tabla Jefe_Departamento
                th Telefono_Jefe
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla D01
                td.ajuste-border-tabla Marketing
                td.ajuste-border-tabla Ana Rodríguez
                td 555-0101
              tr
                td.ajuste-border-tabla D02
                td.ajuste-border-tabla Ventas
                td.ajuste-border-tabla Roberto Martín
                td 555-0102
              tr.ajuste-color-tabla
                td.ajuste-border-tabla D03
                td.ajuste-border-tabla IT
                td.ajuste-border-tabla Carmen Ruiz
                td 555-0103
    
    .row.justify-content-center.mb-5
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 6.
          span <strong>Proyectos</strong> (relación entre empleados y proyectos)
        .tabla-a(data-aos="zoom-in").mb-5
          table
            thead
              tr
                th.ajuste-border-tabla ID_Empleado
                th.ajuste-border-tabla Proyecto
                th Fecha_Inicio
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla E001
                td.ajuste-border-tabla Campaña Digital
                td 15/01/2024
              tr
                td.ajuste-border-tabla E002
                td.ajuste-border-tabla Rediseño Web
                td 1/02/2024
              tr.ajuste-color-tabla
                td.ajuste-border-tabla E003
                td.ajuste-border-tabla Expansión Norte
                td 20/01/2024
              tr
                td.ajuste-border-tabla E004
                td.ajuste-border-tabla Clientes Premium
                td 1/03/2024
              tr.ajuste-color-tabla
                td.ajuste-border-tabla E005
                td.ajuste-border-tabla Migración Cloud
                td 1/02/2024
    
    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") ¿Cómo aplicar esto en Excel?

    p.mb-4 En Excel, los datos normalizados pueden gestionarse de varias maneras:

    .row.align-items-center.mb-5.m-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img25.png", alt="").m-auto
      .col-xl.style___box_6(data-aos="fade-left")
        <ul class="fa-ul estilo___ul mb-0">
          <li class="mb-3"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Usar <strong>múltiples hojas</strong> para representar cada tabla.</li>
          <li class="mb-3"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Relacionarlas con funciones como <strong><em>BUSCARV o XLOOKUP</em></strong>.</li>
          <li class="mb-3"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Utilizar <strong><em>Power Query</em></strong> para crear relaciones y mantener consistencia.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Crear <strong>tablas dinámicas</strong> para análisis a partir de datos vinculados.</li>
        </ul>
    
    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") ¿Qué problemas existían antes de normalizar?

    p.mb-4 La tabla original presentaba varios inconvenientes:

    .row.align-items-center.mb-5
      .col-xl
        .row.mb-2
          .col-xl-6(data-aos="zoom-in")
            .style___box_5.h-100
              h4.mb-0.text-center Redundancia
              p.mb-0 La información del departamento se repite varias veces.
          .col-xl-6(data-aos="zoom-in").espacio___movil_3
            .style___box_5.h-100
              h4.mb-0.text-center Inconsistencias
              p.mb-0 Si cambia el número del jefe, hay que actualizar múltiples registros.
        .row
          .col-xl-6(data-aos="zoom-in")
            .style___box_5.h-100.ajuste___box_5_1
              h4.mb-0.text-center Desperdicio de espacio
              p.mb-0 Datos duplicados ocupan más memoria.
          .col-xl-6(data-aos="zoom-in").espacio___movil_3
            .style___box_5.h-100
              h4.mb-0.text-center Errores
              p.mb-0 Mayor posibilidad de equivocarse al modificar datos repetidos.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img26.png", alt="").m-auto

    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Beneficios de la normalización

    p.mb-4 Después del proceso, los datos mejoran significativamente en calidad y estructura:

    .fondo___color_1
      .px-5

        .row.align-items-center.mb-5.m-0
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img27.png", alt="").m-auto
          .col-xl.style___box_6.ajuste___box_6(data-aos="fade-left")
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong>Eliminación de redundancia:</strong> cada dato aparece una sola vez.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong>Consistencia</strong>: un único lugar para modificar información repetida.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong>Integridad</strong>: relaciones claras entre entidades mediante identificadores.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong>Eficiencia</strong>: menor uso de almacenamiento y mayor facilidad de mantenimiento.</li>
            </ul>

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
          .col
            h3 Transponer
        
        p.mb-5 Esta transformación permite intercambiar filas por columnas y viceversa. En Excel, <strong>transponer</strong> significa convertir filas en columnas y columnas en filas. Es útil para reorganizar datos cuando el diseño original no facilita el análisis o la presentación.

        h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Ejemplo de transposición

        p.mb-4 A continuación, se muestran los datos antes y después de aplicar la transformación.

        .row.mb-2
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 7.
              span <strong>Datos originales (formato horizontal)</strong>
            .tabla-a.ajuste___tabla_7(data-aos="zoom-in").mb-5
              table
                thead
                  tr
                    th.ajuste-border-tabla Dato 
                    th.ajuste-border-tabla Ene
                    th.ajuste-border-tabla Feb
                    th.ajuste-border-tabla Mar
                    th Abr
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Ventas
                    td.ajuste-border-tabla $ 100.000,00
                    td.ajuste-border-tabla $ 150.000,00
                    td.ajuste-border-tabla $ 120.000,00
                    td $ 180.000,00
                  tr
                    td.ajuste-border-tabla Costos
                    td.ajuste-border-tabla $ 60.000,00
                    td.ajuste-border-tabla $ 90.000,00
                    td.ajuste-border-tabla $ 70.000,00
                    td $ 110.000,00
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 8.
              span <strong>Datos transpuestos (formato vertical)</strong>
            .tabla-a(data-aos="zoom-in").mb-5
              table
                thead
                  tr
                    th.ajuste-border-tabla Mes
                    th.ajuste-border-tabla Ventas
                    th Costos
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Ene
                    td.ajuste-border-tabla $ 100.000,00
                    td $ 60.000,00
                  tr
                    td.ajuste-border-tabla Feb
                    td.ajuste-border-tabla $ 150.000,00
                    td $ 90.000,00
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Mar
                    td.ajuste-border-tabla $ 120.000,00
                    td $ 70.000,00
                  tr
                    td.ajuste-border-tabla Abr
                    td.ajuste-border-tabla $ 180.000,00
                    td $ 110.000,00

        h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") ¿Cómo transponer datos en Excel?

    p.mb-4 Existen tres métodos principales para realizar esta transformación:   
    
    .bg--img_03
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img28.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Pegado especial").ajuste-cajaAcordion
              p.mb-3 Copia los datos → clic derecho → Pegado especial → marcar "Transponer".
            .row(titulo="Función transponer").ajuste-cajaAcordion
              p.mb-3  =TRANSPONER(A1:D3) en un rango del mismo tamaño. Requiere Ctrl+Shift+Enter.
            .row(titulo="<em>Power Query</em>").ajuste-cajaAcordion
              p.mb-3 Usar obtener datos → permite transposición dinámica con actualización.
        
    <!-- BLOQUE 2 -->
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Importación de datos
    
    p.mb-5 Este proceso permite incorporar información desde diversas fuentes externas a Excel. La <strong>importación de datos</strong> consiste en traer información desde archivos, bases de datos o servicios web hacia una hoja de cálculo, para su posterior análisis. Excel admite múltiples formatos y fuentes.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 ¿Desde dónde se pueden importar datos?
    
    p.mb-5 A continuación, se clasifican las fuentes más comunes:

    .row.mb-5
      .col-xl-4(data-aos="zoom-in")
        .style___box_8.h-100.shadow
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img29.svg', alt="" style="max-width: 100px").m-auto
            h3.text-center Archivos locales
            p.mb-0 <em>CSV, TXT, XML, JSON, Excel (.xlsx/.xls), Access (.mdb/.accdb)</em>.
      .col-xl-4(data-aos="zoom-in").espacio___movil_3
        .style___box_8.h-100.shadow
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img30.svg', alt="" style="max-width: 100px").m-auto
            h3.text-center Bases de datos
            p.mb-0 <em>SQL Server, MySQL, Oracle, PostgreSQL, SQLite</em>.
      .col-xl-4(data-aos="zoom-in").espacio___movil_3
        .style___box_8.h-100.shadow
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img31.svg', alt="" style="max-width: 100px").m-auto
            h3.text-center Fuentes <em>web</em>
            p.mb-0 <em>APIs REST</em>, servicios <em>web</em>, páginas <em>web</em> (<em>web scraping</em>), archivos en la nube (<em>OneDrive, SharePoint</em>).
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Importar un archivo CSV paso a paso

    .fondo___color_2
      .px-5
    
        .row.align-items-center.mb-4
          .col-xl
            p.mb-3 A continuación, se explica el procedimiento para importar archivos CSV a Excel. Los archivos <strong>CSV (<em>Comma-Separated Values</em>)</strong> son archivos de texto plano que almacenan datos en forma de tabla. Cada línea representa una fila, y los valores están separados por comas o punto y coma, dependiendo de la configuración regional. Este tipo de archivo tiene propiedades específicas que lo hacen ideal para el intercambio de datos:
            .style___box_9(data-aos="fade-right")
              <ul class="fa-ul estilo___ul mb-0">
                <li class="mb-3"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong>Formato simple</strong>: no contiene fórmulas, estilos ni estructuras complejas como los archivos de Excel (.xlsx).</li>
                <li class="mb-3"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong>Separadores</strong>: los valores se separan por comas (,) o punto y coma (;), dependiendo de la configuración regional.</li>
                <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong>Portabilidad</strong>: es ampliamente utilizado en plataformas de bases de datos y servicios web.</li>
              </ul>
          .col-xl-auto
            figure.d-none.d-xl-block(data-aos="fade-left")
              img(src="@/assets/curso/temas/img32.png", alt="").m-auto

        p.mb-5 Después de importar el archivo CSV, el registro de empleados debe visualizarse como se presenta en la figura.

        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 1.
              span Registro de empleados
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img33.png', alt='Captura de pantalla de una hoja de cálculo en Excel con un registro de empleados. Contiene encabezados como ID, Nombre, Apellido, Email, Departamento, Fecha y Contratación, además de cinco filas con datos correspondientes.').m-auto
        
        p.mb-5 Excel genera una advertencia cuando se intenta abrir un archivo de este formato con un doble clic. La forma correcta es hacerlo desde la opción <strong>datos</strong> del menú contextual. Las instrucciones son: inicio → libro en blanco → datos → desde un archivo → desde texto/CSV. En el siguiente video se detalla el paso a paso:
    
    figure(data-aos="zoom-in")
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/5i0C9o3lC6w" title="Importar archivos en excel formato separado csv" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") <strong>Video</strong>: Importar archivos en excel formato separado csv.

    <!-- BLOQUE 3 -->
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Carga

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img34.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este paso consiste en incorporar los datos transformados en una hoja de cálculo para su análisis final. La <strong>carga de datos</strong> es la etapa en la que la información, previamente importada y transformada, se inserta en Excel para su visualización y uso práctico. Para ilustrar este proceso, se utiliza un ejemplo con un <strong><em>dataset</em> en formato JSON</strong>.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 ¿Qué es un archivo JSON?

    p.mb-5 Es un formato ligero y estructurado para el intercambio de datos. <strong>JSON (<em>javascript object notation</em>)</strong> es un formato de texto plano ampliamente utilizado en aplicaciones <em>web</em> y servicios API. Aunque tiene su origen en <em>javascript</em>, es <strong>independiente del lenguaje</strong> y está diseñado para ser legible tanto por humanos como por máquinas. Su estructura se basa en <strong>pares clave-valor</strong>, muy similar a objetos en <em>javascript</em> o diccionarios en otros lenguajes. A continuación, se presenta un fragmento de datos con distintos tipos de información:

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center
          .col-xl-6(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img35.svg', alt='').m-auto
          .col-xl-6(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img36.png', alt='').m-auto

    p.mb-5 En color rojo se han señalado las claves de este registro de ejemplo, mientras que en color verde se identifican los valores asignados a cada una de ellas.

    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img37.png", alt="").m-auto
      .col-xl
        p.mb-3 En el siguiente video se explica cómo cargar un archivo en formato JSON en Excel. La información corresponde a empleados de una empresa e incluye datos anidados como departamentos, arreglos de habilidades y diferentes tipos de datos (números, fechas, booleanos y texto).
        .style___box_4.mb-3(data-aos="fade-left")
          p.mb-3 El <em>dataset</em> contiene 15 registros. Para importarlo en Excel se deben seguir los siguientes pasos:
          ol.lista-ol--cuadro
            li
              .lista-ol--cuadro__vineta
                span a
              | Datos > obtener datos > desde archivo > desde JSON.
            li 
              .lista-ol--cuadro__vineta
                span b
              | Seleccionar el archivo JSON.
            li 
              .lista-ol--cuadro__vineta
                span c
              | Expandir la tabla "vehículos".
            li 
              .lista-ol--cuadro__vineta
                span d
              | Cargar en la hoja de cálculo.
        .style___box_9.ajuste___box_9(data-aos="fade-left")
          h5.mb-3 Puntos clave del proceso:
          <ul class="fa-ul estilo___ul mb-0">
            <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Usar la función Obtener datos en la pestaña Datos.</li>
            <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Expandir correctamente los datos anidados.</li>
            <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Configurar los tipos de datos adecuados.</li>
            <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Gestionar arrays y estructuras complejas.</li>
          </ul>

    p.mb-5 En el siguiente video se explica paso a paso cómo importar un archivo en formato JSON a Excel, transformando su estructura de claves y valores en una tabla organizada que permite trabajar con los datos de manera más clara y práctica.
    
    .fondo___color_1
      .px-5

        figure(data-aos="zoom-in")
          .video.mb-1
            iframe(width="560" height="315" src="https://www.youtube.com/embed/8yk-4hSLq6Q" title="Importar archivos en excel formato JSON" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption(data-aos="zoom-in") <strong>Video</strong>: Importar archivos en excel formato JSON.

        <!-- BLOQUE 4 -->
        Separador
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.4 Automatización

        .row.align-items-center.mb-5
          .col-xl
            p.mb-3 Este es el puente hacia las macros. Aunque, como se ha visto en los numerales previos, <em>Power Query</em> automatiza la importación de datos en diferentes formatos, hay muchas otras tareas que necesitan automatización: <strong>aplicar formatos condicionales complejos, crear gráficos, generar archivos PDF, mover datos entre hojas</strong>, entre otras. La <strong>automatización con macros</strong> toma el control donde otras herramientas se detienen, permitiendo <strong>orquestar un flujo de trabajo completo con un solo comando</strong>.
            .row.align-items-center.m-0
              .col-xl-auto(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src="@/assets/curso/temas/img38.svg", alt="").m-auto 
              .col-xl.style___box_10(data-aos="zoom-in")
                h5.mb-0 Una analogía útil
                p.mb-0 La automatización se puede presentar como <strong>un <em>iceberg</em></strong>: lo visible son tareas simples, pero debajo hay una gran cantidad de procesos que pueden automatizarse para ganar eficiencia.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img39.svg", alt="").m-auto
        
        h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Beneficios de la automatización

    p.mb-4 Entre las ventajas que se pueden obtener, se encuentran:

    .row.align-items-center
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img40.png", alt="").m-auto
      .col-xl
        .row.mb-3
          .col-xl-6(data-aos="zoom-in")
            .style___box_5.h-100.ajuste___box_5_2_desktop
              h4.mb-0.text-center Reducción de errores
              p.mb-0 Minimiza errores manuales en tareas repetitivas.
          .col-xl-6(data-aos="zoom-in").espacio___movil_3
            .style___box_5.h-100.ajuste___box_5_2
              h4.mb-0.text-center Ahorro de tiempo
              p.mb-0 Disminuye el tiempo dedicado a procesos rutinarios.
        .row
          .col-xl-6(data-aos="zoom-in")
            .style___box_5.h-100.ajuste___box_5_2
              h4.mb-0.text-center Consistencia en procesos
              p.mb-0 Asegura que las tareas se ejecuten de forma uniforme.
          .col-xl-6(data-aos="zoom-in").espacio___movil_3
            .style___box_5.h-100.ajuste___box_5_2
              h4.mb-0.text-center Mejora en la calidad de datos
              p.mb-0 Aumenta la precisión y confiabilidad de la información.
          
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
