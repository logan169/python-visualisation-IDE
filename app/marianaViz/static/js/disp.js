
Vue.component('histogram', {
    template: `
    <div>
      <h2>Histogram:</h2><div id="histogram"></div><span>{{ d }}</span>,
    </div>
    `,
    props: {
        d: ''
    }
});


new Vue({
  el: '#app',
  }
)


