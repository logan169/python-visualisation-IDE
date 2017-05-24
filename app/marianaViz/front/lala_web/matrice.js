

var app = new Vue({
  el: '#app',
  data: {
    message: 'Empty data'
  },
  methods:{
  	changeView: function(){
  		this.$http.get('http://jsonplaceholder.typicode.com/posts')
  			.then(function(resp){
  				this.message = resp;
  			})
  			.catch(function(){alert('Error')});
  		}
  	}
})
