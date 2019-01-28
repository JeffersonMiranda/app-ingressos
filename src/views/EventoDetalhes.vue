<template>
  <div class="home">

    <div class="row">  
			<div class="col-md-3">
        <div class="form-group">
          <label for="descricaoForm"> Nome </label>
          <input type="text" class="form-control" id="descricaoForm" v-model="eventoForm.nome">
        </div>
      </div>
      <div class="col-md-3">
        <div class="form-group">
          <label for="descricaoForm"> Descrição </label>
          <input type="text" class="form-control" id="descricaoForm" v-model="eventoForm.descricao">
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="descricaoForm"> Data </label>
          <input type="date" class="form-control" id="descricaoForm" v-model="eventoForm.data">
        </div>
      </div>
			<div class="col-md-3">
        <div class="form-group">
          <label for="descricaoForm"> Abertura </label>
          <input type="time" class="form-control" id="descricaoForm" v-model="eventoForm.abertura">
        </div>
      </div>
			<div class="col-md-3">
        <div class="form-group">
          <label for="descricaoForm"> Início </label>
          <input type="time" class="form-control" id="descricaoForm" v-model="eventoForm.inicio">
        </div>
      </div>
      <div class="col-md-3">
        <div class="form-group">
          <label for="descricaoForm"> Classificação </label>
          <select class="form-control" v-model="eventoForm.classificacao">
            <option v-for="regiao in classificacoes" :value="regiao">
              {{ regiao }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-md-3 align-self-center"> 
        <button type="submit" class="btn btn-primary" @click="save()"> Cadastrar </button>  
      </div>
    </div>

    <Tabela>
      <thead>
			  <tr>
					<th> ID </th>
					<th> Lote </th>
					<th> Valor </th>
					<th> Modalidade </th>
					<th> Região </th>
				</tr>
			</thead>
			<tbody>
				<tr v-if="listaIngressos" v-for="ingresso in listaIngressos">
					<td> {{ ingresso.id }} </td>
					<td> {{ ingresso.lote }} </td>
					<td> {{ ingresso.valor }} </td>
					<td> {{ ingresso.modalidade }} </td>
					<td> {{ ingresso.regiao }} </td>
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
	props: ['id_evento'],
   data(){
    return {
			eventoForm: {
				nome: "",
				descricao: "",
        data: "",
				abertura: "",
				inicio: "",
				classificacao: ""
			},
      classificacoes: ['Livre', 10, 12, 14, 16, 18],
      listaIngressos: []
    }
  },
  methods: {
		getEvento() {
			var url = `${this.$apiUrl}/eventos-with-ingressos/${this.id_evento}`
			return fetch(url, {
				method: 'get'
			}).then(response => response.json())
		},
  },
  mounted() {
    var vm = this

    this.getEvento().then(data => {
			Object.assign(vm.eventoForm, data)
      vm.listaIngressos = data.ingressos.reverse()
    })
  }
}
</script>