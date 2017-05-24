

var app = new Vue({
  el: '#app',
  data: {
    message: 'Empty data',
    matrice: false
  },
  methods:{
  	//change view
  	changeView: function(v){
	    var viewUrl = '/view/'
	    var self = this;

	    $.ajax({
	       	url: viewUrl+v,
	       	method: 'GET',
	       	success: function (resp) {
	            if (resp.error == false){
	                console.log(resp)
	                self.message = resp.data
	                self.matrice = true
	            	}
	       		},
	       	error: function (error) {
	           	console.log(error)
	       		}
	   		})
		}
	}
})
