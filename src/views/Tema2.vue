<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Tarea
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img41.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 No se trata solo de crear macros, sino de resolver un problema de negocio real. Una <strong>tarea</strong> no es simplemente “hacer una macro”. La tarea es el <strong>problema de negocio</strong> que se busca resolver mediante una solución automatizada. Por ejemplo: “<strong>generar el reporte de ventas diario</strong>”.
      
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 El paso más crítico: definir los requisitos

    .row.justify-content-center.mb-5.m-0
      .col-xl-10
        .row.align-items-center.style___box_11(data-aos="zoom-in")
          .col-xl
            p.mb-0 Esto implica traducir el problema en un lenguaje técnico y estructurado. Antes de comenzar a automatizar, es fundamental <strong>comprender con precisión qué se necesita</strong>. Para ello, se utiliza el modelo <strong>IPO (<em>Input - Process - Output</em>)</strong>, que permite descomponer una tarea en tres componentes esenciales.
          .col-xl-auto  
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img42.svg", alt="").m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Modelo IPO (<em>Input - Process - Output</em>)

    p.mb-5 Este modelo ayuda a estructurar cada tarea de manera clara y lógica.

    .bg--img_03
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img43.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="<em>Input</em> (Entrada)").ajuste-cajaAcordion
              p.mb-3 ¿Con qué datos se empieza? ¿En qué formato están? ¿Dónde se encuentran?
            .row(titulo="<em>Process</em> (Proceso)").ajuste-cajaAcordion
              p.mb-3 ¿Qué pasos lógicos y secuenciales se deben aplicar para transformar la entrada en salida? 
              p.mb-2 Ejemplo: 
              ol.lista-ol--cuadro.ajuste___lista-ol.mb-3
                li
                  .lista-ol--cuadro__vineta
                    span 1
                  | Limpiar datos.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Calcular comisión.
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Crear tabla resumen.
            .row(titulo="<em>Output</em> (Salida)").ajuste-cajaAcordion
              p.mb-3 ¿Cuál es el resultado final esperado? ¿Una tabla en una nueva hoja? ¿Un gráfico? ¿Un PDF enviado por correo?

    <!-- BLOQUE 1 -->
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Concepto 
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img44.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una tarea es una unidad de trabajo sistemática, repetible y medible. En el contexto de Excel, una <strong>tarea</strong> se define como una unidad de trabajo que <strong>transforma entradas en salidas</strong> siguiendo reglas de negocio claramente establecidas. Esta transformación ocurre mediante un conjunto de pasos que, bajo condiciones conocidas, produce un resultado esperado sobre datos o estructuras de Excel.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 ¿Qué caracteriza a una tarea en Excel?

    p.mb-5 Debe cumplir ciertos criterios técnicos y de negocio.
    
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img45.png", alt="").m-auto
      .col-xl
        .style___box_4.ajuste___box_4(data-aos="fade-left")
          <ul class="fa-ul estilo___ul_1 mb-0">
            <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong>Repetible</strong>: puede ejecutarse múltiples veces sin intervención manual significativa.</li>
            <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong>Medible y verificable</strong>: permite evaluar su eficacia, precisión y confiabilidad.</li>
            <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong>Adherencia a reglas de negocio</strong>: sigue condiciones previamente definidas.</li>
            <li class="mb-1"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong>Automatizable</strong>: puede implementarse mediante macros o VBA para mejorar la eficiencia.</li>
            <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span><strong>Trazable</strong>: genera evidencias de su ejecución (<em>logs</em>, resultados intermedios, versiones).</li>
          </ul>

    .fondo___color_1
      .px-5
        .fondo___img
          .px-5
            .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
              .col-lg-auto
                figure
                  img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
              .col
                h3 Propiedades clave de una tarea bien definida
            p.mb-5 Estas propiedades aseguran su confiabilidad y consistencia operativa.
            .row.align-items-center.mb-5
              .col-xl-4(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img2.png', alt='' style="max-width: 350px").m-auto
              .col-xl-8(data-aos="fade-left")
                SlyderF(columnas="col-lg-6 col-xl-6")
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img46.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Repetible / Idempotente
                    p.mb-0 Puede ejecutarse varias veces sin alterar el resultado, salvo que se indique lo contrario.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img47.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Determinista
                    p.mb-0 Las mismas entradas siempre producen las mismas salidas (excepto tareas aleatorizadas).
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img48.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Observabilidad
                    p.mb-0 Registro claro de entradas, filas procesadas, tiempos y mensajes de error.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img49.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Trazabilidad
                    p.mb-0 Control de versiones de la tarea y sus reglas de negocio asociadas.

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
          .col
            h3 Tipos comunes de tarea en Excel
        
        p.mb-5 Las tareas pueden clasificarse según su propósito principal.

        .row.mb-5
          .col-xl-4(data-aos="zoom-in")
            .style___box_8.h-100.shadow
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img50.svg', alt="" style="max-width: 100px").m-auto
                h3.text-center Análisis
                p.mb-0 Análisis estadístico, proyecciones financieras, evaluación de tendencias.
          .col-xl-4(data-aos="zoom-in").espacio___movil_3
            .style___box_8.h-100.shadow
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img51.svg', alt="" style="max-width: 100px").m-auto
                h3.text-center Procesamiento
                p.mb-0 Limpieza de datos, transformación de formatos, consolidación, generación de reportes.
          .col-xl-4(data-aos="zoom-in").espacio___movil_3
            .style___box_8.h-100.shadow
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/temas/img52.svg', alt="" style="max-width: 100px").m-auto
                h3.text-center Automatización
                p.mb-0 Macros, formularios, actualizaciones automáticas, validaciones.
        
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
          .col
            h3 Ciclo de vida de una tarea

    p.mb-5 Toda tarea pasa por un conjunto de etapas que garantizan su correcta ejecución.

    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 2.
          span Ciclo de vida de una tarea
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img53.png', alt='Diagrama en forma de flecha que representa el ciclo de vida de una tarea. Incluye seis etapas: Planificación (requisitos y objetivos), Diseño (estructura del modelo), Implementación (fórmulas y funciones), Pruebas (validación de datos), Ejecución (resultados finales) y Evaluación (mejora continua).').m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Buenas prácticas para el diseño de tareas

    p.mb-5 Estas recomendaciones ayudan a construir tareas limpias y sostenibles.
    
    .row.align-items-center.mb-5.m-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img54.png", alt="").m-auto
      .col-xl
        .style___box_4(data-aos="fade-left")
          <ul class="fa-ul estilo___ul_1 mb-0">
            <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Una responsabilidad por tarea. Si realiza muchas funciones distintas, debe dividirse en subtareas.</li>
            <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Usar datos inmutables.</li>
            <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Separar los parámetros del código.</li>
            <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Proporcionar mensajes útiles: errores con contexto (hoja/columna/celda) y sugerencias de solución.</li>
          </ul>
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Ejemplo de encabezado estándar para una tarea en VBA

    p.mb-5 Este tipo de encabezado documenta los aspectos esenciales de la tarea programada.

    .row.justify-content-center
      .col-xl-10
        .row.align-items-center
          .col-xl-7(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img55.svg', alt='').m-auto
          .col-xl-5(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img56.png', alt='').m-auto

    <!-- BLOQUE 2 -->
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Definición de requisitos

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img57.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Consiste en convertir una necesidad en una especificación técnica clara y verificable. La <strong>definición de requisitos</strong> es el proceso sistemático de <strong>identificar, documentar y especificar</strong> todas las condiciones, restricciones y expectativas que una tarea en Excel debe cumplir para ser considerada exitosa. Su objetivo principal es traducir las <strong>necesidades del usuario</strong> en <strong>especificaciones comprobables</strong> que orienten el desarrollo en Excel/VBA.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Estructura mínima de requisitos

    p.mb-5 A continuación, se describen los componentes esenciales que deben incluirse al definir una tarea.

    .bg--img_03.mb-5
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img58.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="RF (Requisitos funcionales)").ajuste-cajaAcordion
              p.mb-3 Qué debe hacer la tarea.
            .row(titulo="RNF (Requisitos no funcionales)").ajuste-cajaAcordion
              p.mb-3 Requisitos de rendimiento, seguridad, usabilidad, mantenibilidad.
            .row(titulo="Datos y diccionario").ajuste-cajaAcordion
              p.mb-3 Nombres de tablas o columnas, tipos de datos, dominios permitidos.
            .row(titulo="Pre/Postcondiciones y reglas").ajuste-cajaAcordion
              p.mb-3 Condiciones antes y después de ejecutar la tarea, y validaciones necesarias.
            .row(titulo="Criterios de aceptación").ajuste-cajaAcordion
              p.mb-3 Condiciones que deben cumplirse para que la tarea sea considerada correcta (con casos de prueba).
            .row(titulo="RACI/RASCI y riesgos (opcional)").ajuste-cajaAcordion
              p.mb-3 Roles y responsabilidades en la tarea, así como riesgos potenciales.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Plantilla de especificación corta de requisitos

    p.mb-5 Este es un ejemplo de encabezado estándar para una tarea en VBA.

    .row.justify-content-center
      .col-xl-8
        figure
          img(src='@/assets/curso/temas/img59.svg', alt='').m-auto

    <!-- BLOQUE 3 -->
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Cálculos personalizados 
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img60.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Se aplican cuando las funciones estándar de Excel no son suficientes. Los <strong>cálculos personalizados</strong> son operaciones matemáticas, lógicas o de manipulación de datos diseñadas para resolver necesidades específicas que <strong>no pueden resolverse completamente con funciones nativas de Excel</strong>.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Clasificación por nivel de complejidad
    
    p.mb-5 Dependiendo del tipo de cálculo, se pueden distinguir tres niveles:

    .row.mb-5
      .col-xl-4(data-aos="zoom-in")
        .style___box_8.h-100.shadow
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img61.svg', alt="" style="max-width: 100px").m-auto
            h3.text-center Nivel 1
            p.mb-0 Combinación de funciones nativas de Excel.
      .col-xl-4(data-aos="zoom-in").espacio___movil_3
        .style___box_8.h-100.shadow
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img62.svg', alt="" style="max-width: 100px").m-auto
            h3.text-center Nivel 2
            p.mb-0 Funciones personalizadas creadas con VBA.
      .col-xl-4(data-aos="zoom-in").espacio___movil_3
        .style___box_8.h-100.shadow
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img63.svg', alt="" style="max-width: 100px").m-auto
            h3.text-center Nivel 3
            p.mb-0 Integración con servicios externos para realizar el cálculo.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Etapas para realizar un cálculo personalizado
    
    p.mb-5 A continuación, se describen los pasos habituales según la complejidad del cálculo.

    .fondo___slider
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Análisis de requerimientos
                p.mb-3 Comprensión profunda del problema.
                <ul class="fa-ul estilo___ul_2 mb-0">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Definición precisa.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Identificación de variables de entrada.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Especificación de restricciones.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Casos límite y validaciones.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img65.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Diseño del algoritmo
                p.mb-3 Construcción lógica de la solución.
                <ul class="fa-ul estilo___ul_2 mb-0">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Pseudocódigo del proceso.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Diagramas de flujo.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Optimización de <em>performance</em>.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Manejo de errores.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img66.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Implementación
                p.mb-3 Codificación y puesta en marcha.
                <ul class="fa-ul estilo___ul_2 mb-0">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Selección de la tecnología apropiada.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Codificación siguiendo mejores prácticas.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Documentación <em>inline</em> del código.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Pruebas unitarias.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img67.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Validación y pruebas
                p.mb-3 Verificación del funcionamiento y resultados.
                <ul class="fa-ul estilo___ul_2 mb-0">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Casos de prueba representativos.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Validación con datos reales.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Pruebas de estrés y volumen.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-arrow-alt-circle-right"></i></span>Verificación de precisión.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img68.png', alt='' style="max-width: 500px").m-auto

</template>

<script>
export default {
  name: 'Tema2',
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
