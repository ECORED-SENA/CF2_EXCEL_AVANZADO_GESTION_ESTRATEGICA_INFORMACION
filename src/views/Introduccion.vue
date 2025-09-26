<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.align-items-center.mb-4
      .col-xl-auto
        figure.d-none.d-xl-block(data-aos="fade-right")
          img(src="@/assets/curso/intro/img1.svg", alt="").m-auto
      .col-xl
        p.mb-0 Excel se ha consolidado como una de las herramientas más versátiles en el ámbito empresarial, académico y personal, gracias a su capacidad para procesar y organizar grandes volúmenes de información. Sin embargo, el aprovechamiento pleno de sus funcionalidades exige ir más allá de las operaciones básicas, integrando procesos avanzados que permitan optimizar la gestión de datos y generar valor en la toma de decisiones.
    
    .row.align-items-center
      .col-xl
        p.mb-3.style___box_1(data-aos="fade-right") En este sentido, las macros y el lenguaje VBA se presentan como aliados estratégicos para la automatización de tareas repetitivas y la creación de soluciones personalizadas. A través de estas herramientas, es posible reducir errores, ahorrar tiempo y fortalecer la consistencia en los procesos, lo que contribuye a mejorar la calidad del análisis de la información y a incrementar la productividad en distintos contextos.
        .row.align-items-center.m-0
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/intro/img2.svg", alt="" style="max-width: 180px").m-auto
          .col-xl.style___box_2(data-aos="zoom-in")
            p.mb-0 Este componente formativo ofrece a los aprendices la oportunidad de adentrarse en el mundo de la automatización en Excel, combinando teoría y práctica para desarrollar competencias aplicables en escenarios reales. Con ello, no solo se busca que los estudiantes dominen técnicas avanzadas, sino también que adquieran una visión crítica y analítica capaz de identificar oportunidades de mejora en los flujos de trabajo empresariales.
      .col-xl-auto
        figure.d-none.d-xl-block(data-aos="fade-left")
          img(src="@/assets/curso/intro/img3.png", alt="").m-auto

</template>

<script>
export default {
  name: 'Introduccion',
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
