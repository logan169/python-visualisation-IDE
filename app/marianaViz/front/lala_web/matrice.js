

var app = new Vue({
  el: '#app',
  data: {
    message: 'Empty data'
  },
  methods:{
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
            }
       },
       error: function (error) {
           console.log(error)
       }
   });
}
}
})
