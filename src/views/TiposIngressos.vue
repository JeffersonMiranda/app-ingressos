<template>
  <div>
    <div class="row">  
      <div class="col-md-3">
        <div class="form-group">
          <label for="descricaoForm"> Descrição </label>
          <input type="text" class="form-control" id="descricaoForm" v-model="ingressoForm.descricao">
        </div>
      </div>
      <div class="col-md-3">
        <div class="form-group">
          <label for="descricaoForm"> Região </label>
          <select class="form-control" v-model="ingressoForm.regiao">
            <option v-for="regiao in regioes" :value="regiao">
              {{ regiao }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-md-3"> 
        <button type="submit" class="btn btn-primary" @click="save()"> Cadastrar </button>  
      </div>
    </div>

    <Tabela titulo="Ingressos">
      <thead>
			  <tr>
					<th>ID</th>
					<th>Inteira/meia</th>
					<th>Região</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="tipoIngresso in listaTipoIngressos">
					<td> {{ tipoIngresso.id }} </td>
          <td> {{ tipoIngresso.descricao }} </td>
          <td> {{ tipoIngresso.regiao }} </td>
				</tr>
			</tbody>
    </Tabela>

  </div>
</template>

<script>

import Tabela from '@/components/Tabela.vue'

export default {
  components: {
    Tabela
  },
  data(){
    return {
      ingressoForm: {
        descricao: "",
        regiao: ""
      },
      regioes: ['Plateia', 'Balcão'],
      listaTipoIngressos: []
    }
  },
  methods: {
    save() {
      var vm = this;

      fetch('http://localhost:1337/tipos-ingressos', {
        method: 'post',
        body: JSON.stringify({
          descricao: vm.ingressoForm.descricao,
          regiao: vm.ingressoForm.regiao
        })
      })
    },
    getAll() {
      var vm = this;

      return fetch('http://localhost:1337/tipos-ingressos',{
        method: 'get',
      }).then(response => response.json())
    }
  },
  mounted(){
    var vm = this;
    this.getAll().then(data => {
      vm.listaTipoIngressos = data
    })
  }
}
</script>