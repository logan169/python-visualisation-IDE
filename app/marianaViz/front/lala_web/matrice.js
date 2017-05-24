

var app = new Vue({
  el: '#app',
  data: {
    message: 'Empty data'
  },
  methods:{
  	changeView: function(v){
  		this.$http.get('/view/'+v)
  			.then(function(resp){
  				this.message = resp;
  			})
  			.catch(function(){alert('Error')});
  		}
  	}
})
