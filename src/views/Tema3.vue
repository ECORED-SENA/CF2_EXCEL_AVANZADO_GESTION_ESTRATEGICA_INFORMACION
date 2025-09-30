<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Macros

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img69.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Permiten automatizar procesos repetitivos en Excel mediante código. Aunque Excel ofrece potentes funciones nativas (tablas, validación, Power Query, entre otros), la <strong>automatización con macros</strong> aporta <strong>velocidad</strong>, <strong>consistencia y reducción de errores</strong>, elementos críticos para el <strong><em>Business Intelligence</em> (BI)</strong> y la toma de decisiones. Las <strong>macros</strong> son secuencias de <strong><em>scripts</em> y funciones</strong> que automatizan tareas repetitivas en Excel. Estas instrucciones están escritas en el lenguaje <strong>VBA (<em>Visual Basic for Applications</em>)</strong>.

    <!-- BLOQUE 1 -->
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Creación
    
    p.mb-4 La creación de macros en Excel puede realizarse de dos maneras principales. Cada una ofrece diferentes niveles de control, flexibilidad y complejidad según las necesidades del usuario. Existen dos formas principales de crear macros en Excel:

    .row.align-items-center.mb-5
      .col-xl
        TabsA.color-acento-botones(data-aos="zoom-in")
          .tarjeta.color-acento-botones--borde.p-4(titulo="Grabadora de macros")
            h4 Grabadora de macros
            p.mb-0 Funciona como una cámara que registra cada clic y acción del teclado. Es ideal como punto de partida para procesos simples y repetitivos.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Editor VBA (VBE)")
            h4 Editor VBA (VBE)
            p.mb-0 Permite escribir y editar código de forma manual. Ofrece control total sobre la lógica, lo que permite desarrollar soluciones más potentes y flexibles.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img70.png", alt="").m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Grabadora de macros
    
    p.mb-5 Este método permite generar código automáticamente sin necesidad de conocimientos de programación. Es una excelente herramienta para usuarios que desean automatizar tareas repetitivas de forma sencilla.

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Ventajas
                <ul class="fa-ul estilo___ul_2 mb-0">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>No requiere conocimientos de programación.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Captura acciones exactas del usuario.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Ideal para procesos simples y lineales.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Generación automática de código.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img71.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Limitaciones
                <ul class="fa-ul estilo___ul_2 mb-0">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>El código generado no está optimizado.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Dificulta el mantenimiento.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>No maneja lógica condicional compleja.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Utiliza referencias absolutas por defecto.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img72.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Proceso paso a paso
                <ul class="fa-ul estilo___ul_2 mb-0">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Ir a Desarrollador grabar macro.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Asignar nombre y ubicación.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Realizar las acciones a automatizar.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Detener la grabación.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Revisar y optimizar el código generado.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img73.png', alt='' style="max-width: 500px").m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Editor VBA (<em>Visual Basic for Applications</em>)
    
    p.mb-5 El uso del editor VBA permite crear instrucciones personalizadas desde cero. Es ideal para usuarios avanzados que requieren soluciones flexibles, robustas y escalables. Las ventajas son:

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0
          .col-xl-6.style___box_4.ajuste___box_4_1(data-aos="fade-right")
            <ul class="fa-ul estilo___ul_1 mb-0">
              <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Control total sobre la lógica.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Código más limpio, optimizado y eficiente.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Capacidad para manejar excepciones y condiciones.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Reutilización y modularidad del código.</li>
            </ul>
          .col-xl-6(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img74.png", alt="").m-auto
    
    p.mb-5 Normalmente, las macros siguen una estructura común compuesta por distintos elementos esenciales:

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0
          .col-xl-6(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img75.png", alt="").m-auto
          .col-xl-6.style___box_1.ajuste___box_1(data-aos="fade-left")
            <ul class="fa-ul estilo___ul_1 mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Subrutinas (Sub) y funciones (<em>Function</em>).</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Variables y constantes.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Estructuras de control, como <em>If-Then, Select Case, bucles For, Do While</em>.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Objetos y propiedades de Excel.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Manejo de errores (<em>On Error</em>).</li>
            </ul>
    
    p.mb-4 Se recomienda seguir buenas prácticas al momento de crear macros, tanto para mantener la claridad del código como para facilitar su mantenimiento y reutilización:

    .row.align-items-center.mb-5
      .col-xl
        TabsA.color-acento-botones(data-aos="zoom-in")
          .tarjeta.color-acento-botones--borde.p-4(titulo="Convenciones de nomenclatura")
            h4 Convenciones de nomenclatura
            <ul class="fa-ul estilo___ul_1 mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Usar nombres descriptivos y significativos.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Aplicar <em>camelCase</em> o <em>snake_case</em>.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Utilizar prefijos para identificar objetos.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Documentar propósito y parámetros.</li>
            </ul>
          .tarjeta.color-acento-botones--borde.p-4(titulo="Estructura del código")
            h4 Estructura del código
            <ul class="fa-ul estilo___ul_1 mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Declarar variables al inicio.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Agrupar operaciones relacionadas.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Comentar la lógica compleja.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Implementar manejo de errores.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Optimizar para rendimiento.</li>
            </ul>
            
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img76.png", alt="").m-auto
    
    p.mb-5 En el siguiente video se explica cómo habilitar la opción de desarrollador y, posteriormente, cómo crear y ejecutar una macro: 
    
    figure(data-aos="zoom-in")
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/TJ2eirgTeOQ" title="Creación de MACROS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") <strong>Video</strong>: Creación de MACROS.

    <!-- BLOQUE 2 -->
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Ejecución 
    
    p.mb-5 Las macros se pueden ejecutar de <strong>tres formas principales: manual, automática y programada</strong>. A continuación, se explica cómo realizar cada tipo de ejecución:

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Ejecución manual
    
    p.mb-5 Esta es la forma más común y directa de ejecutar una macro. Es ideal cuando el usuario desea tener control total sobre el momento de activación.

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0
          .col-xl-6.style___box_1.ajuste___box_1_1(data-aos="fade-right")
            p.mb-3 La ejecución manual se puede realizar mediante:
            <ul class="fa-ul estilo___ul_1 mb-0">
              <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>El menú <strong>Desarrollador</strong>.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>El atajo de teclado <strong>Alt + F8</strong> (abre la ventana de macros).</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>El <strong>Editor VBA,</strong> presionando <strong>F5</strong>.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong>Botones personalizados</strong> en la cinta de opciones.</li>
            </ul>
          .col-xl-6(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img77.png", alt="").m-auto

    p.mb-5 En el siguiente video se explica cómo grabar una macro en Excel, utilizando una tabla de ejemplo para aplicar formatos y automatizar el proceso, de modo que pueda repetirse fácilmente con un solo comando.
    
    .fondo___color_3
      .px-5 

        figure(data-aos="zoom-in").mb-5
          .video.mb-1
            iframe(width="560" height="315" src="https://www.youtube.com/embed/l5_bHi74YfA" title="Grabación de MACROS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption(data-aos="zoom-in") <strong>Video</strong>: Grabación de MACROS.

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
          .col
            h3 Ejecución automática
        
        p.mb-5 Este tipo de ejecución se activa como respuesta a eventos dentro del libro o la hoja de Excel, sin intervención directa del usuario.

        .row.justify-content-center.mb-5
          .col-xl-10
            .row.align-items-center.m-0
              .col-xl.style___box_1.ajuste___box_1_2(data-aos="fade-right")
                p.mb-4 La ejecución automática se puede activar mediante:
                <ul class="fa-ul estilo___ul_1 mb-0">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Eventos de libro, como <em>Open, Close, Save</em>.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Eventos de hoja, como <em>Change, Activate, Calculate</em>.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Temporizadores usando la función <em>OnTime</em>.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Combinaciones de teclas personalizadas, asignadas a macros específicas.</li>
                </ul>
              .col-xl-auto(data-aos="fade-left")
                figure.d-none.d-xl-block
                  img(src="@/assets/curso/temas/img79.svg", alt="").m-auto
        
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
          .col
            h3 Ejecución programada
        
        p.mb-5 Esta modalidad permite ejecutar macros de forma planificada, incluso sin abrir Excel directamente, lo que es útil para tareas rutinarias o de mantenimiento.

        .row.justify-content-center
          .col-xl-10
            .row.align-items-center.m-0
              .col-xl-auto(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src="@/assets/curso/temas/img81.svg", alt="").m-auto
              .col-xl.style___box_2(data-aos="fade-left")
                p.mb-3 La ejecución programada puede realizarse a través de:
                <ul class="fa-ul estilo___ul_1 mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>El <strong><em>Scheduler</em> del sistema operativo</strong> (como el programador de tareas de Windows).</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong><em>Power Automate</em></strong>, para flujos automatizados.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong>Aplicaciones de terceros</strong> que permiten lanzar macros.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong><em>Scripts</em> de inicio</strong> configurados para activarse al encender el sistema o abrir archivos específicos.</li>
                </ul>
              
        <!-- BLOQUE 3 -->
        Separador
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Interfaces

        p.mb-5 Las interfaces en macros de Excel corresponden a los elementos visuales y a los métodos de interacción que permiten a los usuarios relacionarse con ellas de manera intuitiva y dinámica.

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
          .col
            h3 Tipos de interfaces para macros en Excel
        
        p.mb-5 Uno de los tipos más utilizados de interfaces personalizadas en VBA son los <em>UserForms</em> (formularios de usuario). Los <em>UserForms</em> son v<strong>entanas personalizadas</strong> que se pueden crear en el Editor de VBA para solicitar o mostrar información al usuario. Dentro de estos formularios es posible incluir diversos <strong>controles</strong> interactivos, tales como:

        .row.justify-content-center.mb-5
          .col-xl-10
            .row.align-items-center.m-0
              .col-xl-5.style___box_1.ajuste___box_1_3(data-aos="fade-right")
                <ul class="fa-ul estilo___ul_1 mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Cuadros de texto para entrada de datos.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Botones de comando.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Listas desplegables.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Casillas de verificación.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Etiquetas informativas.</li>
                </ul>
              .col-xl-7(data-aos="fade-left")
                figure.d-none.d-xl-block
                  img(src="@/assets/curso/temas/img82.png", alt="").m-auto

    .fondo___color_4
      .px-5

        p.mb-5 A continuación, se presenta una tabla con las etiquetas necesarias que se utilizarán como ejercicio práctico. El objetivo es crear un <em>UserForm</em> utilizando los datos del archivo empleados_ejemplo.csv, agregando las siguientes etiquetas en las posiciones indicadas:

        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 9.
              span Etiquetas del <em>UserForm</em>
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla Control
                    th.ajuste-border-tabla Posición (aprox.)
                    th <em>Caption</em>
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla <em>Label</em>1
                    td.ajuste-border-tabla <em>Top</em>: 12, <em>Left</em>: 12
                    td ID:
                  tr
                    td.ajuste-border-tabla <em>Label</em>2
                    td.ajuste-border-tabla <em>Top</em>: 42, <em>Left</em>: 12
                    td Nombre:
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla <em>Label</em>3
                    td.ajuste-border-tabla <em>Top</em>: 72, <em>Left</em>: 12
                    td Apellido:
                  tr
                    td.ajuste-border-tabla <em>Label</em>4
                    td.ajuste-border-tabla <em>Top</em>: 102, <em>Left</em>: 12
                    td Email:
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla <em>Label</em>5
                    td.ajuste-border-tabla <em>Top</em>: 132, <em>Left</em>: 12
                    td Teléfono:
                  tr
                    td.ajuste-border-tabla <em>Label</em>6
                    td.ajuste-border-tabla <em>Top</em>: 162, <em>Left</em>: 12
                    td Departamento:
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla <em>Label</em>7
                    td.ajuste-border-tabla <em>Top</em>: 192, <em>Left</em>: 12
                    td Cargo:
                  tr
                    td.ajuste-border-tabla <em>Label</em>8
                    td.ajuste-border-tabla <em>Top</em>: 222, <em>Left</em>: 12
                    td Salario:
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla <em>Label</em>9
                    td.ajuste-border-tabla <em>Top</em>: 252, <em>Left</em>: 12
                    td Fecha Ingreso:
                  tr
                    td.ajuste-border-tabla <em>Label</em>10
                    td.ajuste-border-tabla <em>Top</em>: 282, <em>Left</em>: 12
                    td Estado:

        p.mb-5 Después de crear las etiquetas de la tabla 9, el <em>UserForm</em> debe presentarse como se presenta en la siguiente figura.

        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 3.
          span Sistema de gestión de empleados
        figure(data-aos="zoom-in").mb-5
          img(src='@/assets/curso/temas/img83.png', alt='Captura del editor de VBA en Excel con un formulario (UserForm) titulado “Sistema de Gestión de Empleados”. Incluye etiquetas para campos como ID, Nombre, Apellido, Email, Teléfono, Departamento, Cargo, Salario, Fecha de Ingreso y Estado. ').m-auto
    
    p.mb-5 En el siguiente  video se explica cómo iniciar la creación de un sistema de gestión de empleados en Excel, utilizando formularios y macros para estructurar la interfaz y permitir la inserción automatizada de datos.

    figure(data-aos="zoom-in").mb-5
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/himXWhAmycY" title="Creación de MACRO para un sistema de gestión de empleados" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") <strong>Video</strong>: Creación de MACRO para un sistema de gestión de empleados.
    
    p.mb-1 Además de los <em>UserForms</em>, Excel permite insertar controles directamente sobre la hoja de cálculo.

    p.mb-4 Esto resulta útil para usuarios que prefieren trabajar con interfaces integradas dentro del libro. Los controles disponibles en las hojas de cálculo incluyen:

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0
          .col-xl-7(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img84.png", alt="").m-auto
          .col-xl-5.style___box_4.ajuste___box_4_2(data-aos="fade-left")
            <ul class="fa-ul estilo___ul_1 mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Botones de comando.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Cuadros combinados.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Controles de formulario.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Controles ActiveX.</li>
            </ul>
    
    .fondo___color_2
      .px-5
        
        p.mb-5 A continuación, se debe complementar el <em>UserForm</em> con los controles restantes según las configuraciones establecidas:

        .row.justify-content-center.mb-5
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 10.
              span Configuración de <em>TextBoxes</em>
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla Control
                    th.ajuste-border-tabla <em>Name</em>
                    th.ajuste-border-tabla Posición
                    th Ancho
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla <em>TextBox</em>
                    td.ajuste-border-tabla txtID
                    td.ajuste-border-tabla <em>Top</em>: 12, <em>Left</em>: 100
                    td <em>Width</em>: 80
                  tr
                    td.ajuste-border-tabla <em>TextBox</em>
                    td.ajuste-border-tabla txtNombre
                    td.ajuste-border-tabla <em>Top</em>: 42, <em>Left</em>: 100
                    td <em>Width</em>: 150
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla <em>TextBox</em>
                    td.ajuste-border-tabla txtApellido
                    td.ajuste-border-tabla <em>Top</em>: 72, <em>Left</em>: 100
                    td <em>Width</em>: 150
                  tr
                    td.ajuste-border-tabla <em>TextBox</em>
                    td.ajuste-border-tabla txtEmail
                    td.ajuste-border-tabla <em>Top</em>: 102, <em>Left</em>: 100
                    td <em>Width</em>: 200
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla <em>TextBox</em>
                    td.ajuste-border-tabla txtTelefono
                    td.ajuste-border-tabla <em>Top</em>: 132, <em>Left</em>: 100
                    td <em>Width</em>: 120
                  tr
                    td.ajuste-border-tabla <em>TextBox</em>
                    td.ajuste-border-tabla txtSalario
                    td.ajuste-border-tabla <em>Top</em>: 222, <em>Left</em>: 100
                    td <em>Width</em>: 100
        
        p.mb-5 Para seleccionar valores predefinidos como departamento o cargo, se usarán listas desplegables (<em>ComboBoxes</em>).

        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 11.
              span Configuración de <em>ComboBoxes</em>
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla Control
                    th.ajuste-border-tabla <em>Name</em>
                    th Posición
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla <em>ComboBox</em>
                    td.ajuste-border-tabla cboDepartamento
                    td <em>Top</em>: 162, <em>Left</em>: 100
                  tr
                    td.ajuste-border-tabla <em>ComboBox</em>
                    td.ajuste-border-tabla cboCargo
                    td <em>Top</em>: 192, <em>Left</em>: 100

        p.mb-5 La fecha de ingreso será capturada inicialmente mediante un cuadro de texto. Más adelante puede reemplazarse por un control de calendario si se desea mayor validación.

        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 12.
              span Configuración de Fecha de Ingreso (<em>TextBox</em> temporal)
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla Control
                    th.ajuste-border-tabla <em>Name</em>
                    th Posición
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla <em>TextBox</em>
                    td.ajuste-border-tabla txtFechaIngreso
                    td <em>Top</em>: 252, <em>Left</em>: 100
    
    p.mb-5 Para indicar el estado del empleado (activo o inactivo), se empleará un grupo de botones de opción (<em>OptionButtons</em>), contenidos dentro de un marco (<em>Frame</em>). 

    .bg--img_03.mb-5
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img85.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="<em>Frame</em> (contenedor de los botones)").ajuste-cajaAcordion
              <ul class="fa-ul estilo___ul_2 mb-0">
                <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><em>Name</em>: fraEstado.</li>
                <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><em>Caption</em>: Estado.</li>
                <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Posición: <em>Top</em>: 282, <em>Left</em>: 100.</li>
                <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Tamaño: <em>Width</em>: 150, <em>Height</em>: 50.</li>
              </ul>
            .row(titulo="Dentro del <em>Frame</em>").ajuste-cajaAcordion
              p.mb-3 OptionButton1:
              <ul class="fa-ul estilo___ul_2 mb-4">
                <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><em>Name</em>: optActivo.</li>
                <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><em>Caption</em>: Activo.</li>
                <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Posición: <em>Top</em>: 15, <em>Left</em>: 10.</li>
              </ul>
              p.mb-3 OptionButton2:
              <ul class="fa-ul estilo___ul_2 mb-3">
                <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><em>Name</em>: optInactivo.</li>
                <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><em>Caption</em>: Inactivo.</li>
                <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Posición: <em>Top</em>: 15, <em>Left</em>: 80.</li>
              </ul>

    p.mb-5 Finalmente, se deben agregar los botones de acción en la parte inferior del formulario. Estos permitirán ejecutar las funciones básicas del sistema: agregar, modificar, eliminar, buscar y cerrar.

    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 13.
          span Configuración de <em>CommandButtons</em>
        .tabla-a.ajuste___tabla_13(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla <em>Button</em>
                th.ajuste-border-tabla <em>Name</em>
                th.ajuste-border-tabla <em>Caption</em>
                th Posición
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla <em>CommandButton</em>
                td.ajuste-border-tabla btnAgregar
                td.ajuste-border-tabla Agregar
                td <em>Top</em>: 350, <em>Left</em>: 12
              tr
                td.ajuste-border-tabla <em>CommandButton</em>
                td.ajuste-border-tabla btnModificar
                td.ajuste-border-tabla Modificar
                td <em>Top</em>: 350, <em>Left</em>: 92
              tr.ajuste-color-tabla
                td.ajuste-border-tabla <em>CommandButton</em>
                td.ajuste-border-tabla btnEliminar
                td.ajuste-border-tabla Eliminar
                td <em>Top</em>: 350, <em>Left</em>: 172
              tr
                td.ajuste-border-tabla <em>CommandButton</em>
                td.ajuste-border-tabla btnBuscar
                td.ajuste-border-tabla Buscar
                td <em>Top</em>: 350, <em>Left</em>: 252
              tr.ajuste-color-tabla
                td.ajuste-border-tabla <em>CommandButton</em>
                td.ajuste-border-tabla btnCerrar
                td.ajuste-border-tabla Cerrar
                td <em>Top</em>: 350, <em>Left</em>: 332
    
    p.mb-5 Ingrese y gestione la información de los empleados de manera rápida y organizada:

    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Figura 4.
      span <em>UserForm</em> completo del sistema de gestión de empleados
    figure(data-aos="zoom-in").mb-5
      img(src='@/assets/curso/temas/img86.png', alt='Formulario completo del sistema de gestión de empleados creado en el editor de VBA. Incluye campos de texto, listas desplegables, botones de opción para el estado del empleado y cinco botones de acción: Agregar, Modificar, Eliminar, Buscar y Cerrar. ').m-auto

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0.style___box_12(data-aos="zoom-in")
          .col-xl-auto  
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img87.svg", alt="").m-auto  
          .col-xl
            p.mb-0 Después de haber agregado y configurado todos los elementos visuales en el <em>UserForm</em>, es necesario <strong>cargar los datos en los <em>ComboBoxes</em></strong> para que el formulario esté completamente funcional al momento de iniciarse.
    
    .fondo___color_3
      .px-5

        p.mb-5 A continuación, se presenta el código que debe agregarse en el evento <em>UserForm_Initialize</em>: Para ello, se debe hacer doble clic sobre el <em>UserForm</em> en el Editor de VBA para abrir su módulo de código y copiar el siguiente bloque:

        .row.justify-content-center.mb-5(data-aos="zoom-in")
          .col-xl-6
            figure
              img(src="@/assets/curso/temas/img89.svg", alt="").m-auto  
        
        p.mb-5 Este procedimiento asegura que los valores de <strong>Departamento, Cargo y Estado</strong> estén disponibles y configurados por defecto al momento de abrir el formulario.
        
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
          .col
            h3 Prueba del formulario en Excel

        p.mb-5 Una vez finalizado el desarrollo del formulario, es necesario probar su funcionamiento. Para ello, se deben realizar los siguientes pasos:

        .row.justify-content-center.mb-5
          .col-xl-10
            .row.align-items-center.m-0
              .col-xl-7.style___box_1.ajuste___box_1_4(data-aos="fade-right")
                <ul class="fa-ul estilo___ul_1 mb-0">
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Guardar el proyecto <strong>(Ctrl + S)</strong>.</li>
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Cerrar el <strong>Editor de VBA</strong>.</li>
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>En Excel, presionar <strong>Alt + F8</strong>.</li>
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Si no aparece ninguna macro, regresar al Editor de VBA.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Presionar <strong>F5</strong> mientras tienes seleccionado el <em>UserForm</em> para probarlo.</li>
                </ul>
              .col-xl-5(data-aos="fade-left")
                figure.d-none.d-xl-block
                  img(src="@/assets/curso/temas/img90.svg", alt="").m-auto

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
          .col
            h3 Crear una macro para abrir el formulario

        p.mb-5 Terminado todo el desarrollo del formulario, se debe crear la macro que permitirá abrirlo. En el Editor de VBA, seguir estos pasos:

        .row.justify-content-center.mb-5.m-0
          .col-xl-10
            .row.align-items-center
              .col-xl-5.style___box_4.ajuste___box_4_3(data-aos="fade-right")
                ol.lista-ol--cuadro
                  li
                    .lista-ol--cuadro__vineta
                      span a
                    | Insertar un módulo.
                  li 
                    .lista-ol--cuadro__vineta
                      span b
                    | Agregar el siguiente código:
                figure
                  img(src='@/assets/curso/temas/img91.svg', alt='').m-auto
              .col-xl-7(data-aos="fade-left")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img92.png', alt='').m-auto
    
    p.mb-5 En el Editor de VBA, se inserta un módulo donde se escribe la macro que permite abrir el formulario <strong>frmEmpleados</strong> mediante el método <em>UserForm.Show</em>.

    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Figura 5.
      span Macro para abrir el formulario de empleados en Excel VBA
    figure(data-aos="zoom-in").mb-5
      img(src='@/assets/curso/temas/img93.png', alt='Editor de VBA con una macro que abre el formulario de empleados usando el comando frmEmpleados.Show. A la izquierda se ven el explorador de proyectos y las propiedades del módulo.').m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Ejecución de la macro

    p.mb-5 En el siguiente video se explica detalladamente cómo ejecutar la macro, junto con el formulario que automatiza la captura de los datos.

    figure(data-aos="zoom-in").mb-5
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/bklyZ8FIvts" title="Complemento MACRO gestión de empleados" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") <strong>Video</strong>: Complemento MACRO gestión de empleados.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Confirmación del registro agregado

    p.mb-5 Una vez creado el formulario y grabada la macro, se puede ejecutar esta última para automatizar el ingreso de datos a un archivo en formato <strong>.csv</strong>. Si el procedimiento es correcto, se mostrará un mensaje confirmando el registro agregado.

    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 6.
          span Confirmación de registro de empleado en el sistema de gestión
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img94.png', alt='Formulario de gestión de empleados en Excel con campos completados y mensaje emergente que confirma el registro exitoso de un nuevo empleado.').m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Cuadros de diálogo integrados en VBA

    p.mb-5 VBA permite interactuar con el usuario mediante funciones simples como:

    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img95.png", alt="").m-auto
      .col-xl
        .row.mb-3
          .col-xl-6(data-aos="zoom-in")
            .style___box_5.h-100.ajuste___box_5_2
              h4.mb-0.text-center <em>InputBox</em>
              p.mb-0 Solicita información al usuario.
          .col-xl-6(data-aos="zoom-in").espacio___movil_3
            .style___box_5.h-100.ajuste___box_5_2
              h4.mb-0.text-center <em>MsgBox</em>
              p.mb-0 Muestra mensajes o confirmaciones.
        p.mb-0 Estas funciones son útiles para formularios básicos o mensajes rápidos.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Ventajas de usar interfaces en macros
    
    p.mb-5 Las interfaces gráficas dentro de macros de Excel ofrecen una serie de beneficios tanto para usuarios avanzados como para quienes no conocen programación.

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Facilidad de uso
                p.mb-3 Los usuarios no necesitan conocer VBA para ejecutar macros complejas.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img96.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Entrada de datos controlada
                p.mb-3 Permite validar y dar formato a la información antes de procesarla.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img97.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Experiencia profesional
                p.mb-3 Una interfaz bien diseñada mejora la presentación de tus herramientas.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img98.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Reducción de errores
                p.mb-3 Al guiar al usuario por medio de formularios, se minimizan errores de ingreso.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img99.png', alt='' style="max-width: 500px").m-auto

    .row.justify-content-center
      .col-xl-10
        .row.align-items-center.m-0.style___box_12(data-aos="zoom-in")
          .col-xl-auto  
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img100.svg", alt="").m-auto  
          .col-xl
            p.mb-0 Estas interfaces son especialmente útiles cuando se desarrollan herramientas de Excel que serán utilizadas por personas <strong>no familiarizadas con macros o programación</strong>, ya que <strong>facilitan la interacción y reducen errores operativos</strong>.
            
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
