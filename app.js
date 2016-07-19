new Vue({
  el: '#beerApp',
  //tudo que estiver dentro desse objeto estara disponivel para o html
  data: {
    cervejarias: []
  },
  ready: function()
  {
    //crio a variavel chamada self, onde preserva o this do scope ready
    var self = this;
      //self.$http.get('https://gist.githubusercontent.com/vedovelli/3a83755e576778088c93/raw/204ced0602760829597f5caa2680e5f7cb29bade/cervejarias.json', function(response)
    self.$http.get('cervejarias.json', function(response)
    {
      self.cervejarias = response;
        //window.alert(cervejarias);
    });
  }
});
