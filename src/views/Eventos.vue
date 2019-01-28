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
					<th>ID</th>
					<th>Nome</th>
					<th>Descrição</th>
					<th>Data</th>
					<th>Abertura</th>
          <th>Início</th>
          <th>Classificação</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="evento in listaEventos">
					<td> {{ evento.id }} </td>
          <td> {{ evento.nome }} </td>
          <td> {{ evento.descricao }} </td>
          <td> {{ evento.data }} </td>
          <td> {{ evento.abertura }} </td>
          <td> {{ evento.inicio }} </td>
          <td> {{ evento.classificacao }} </td>
          <td> <router-link :to="{name: 'ingressos_com_evento', params: { id_evento: evento.id } }"> Adicionar ingressos </router-link> </td>
          <td> <router-link :to="{name: 'evento_detalhes', params: { id_evento: evento.id } }"> Vizualizar ingressos </router-link></td>
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
      eventoForm: {
				nome: "",
				descricao: "",
        data: "",
				abertura: "",
				inicio: "",
				classificacao: ""
			},
      classificacoes: ['Livre', 10, 12, 14, 16, 18],
      listaEventos: []
    }
  },
  methods: {
    save() {
      var vm = this;

      if(this.validateForm()) {
        fetch(`${this.$apiUrl}/eventos`, {
          method: 'post',
          body: JSON.stringify({
            nome: vm.eventoForm.nome,
            descricao: vm.eventoForm.descricao,
            data: vm.eventoForm.data,
            abertura: vm.eventoForm.abertura,
            inicio: vm.eventoForm.inicio,
            classificacao: vm.eventoForm.classificacao
          })
        }).then(response => {
          alert('Evento cadastrado com sucesso !')
          vm.populateTable()
        }).catch(()=>{
          alert('Alguma falha ocorreu! Tente outra vez.')
        })
      } else {
        alert('Preencha todos os campos corretamente.')
      }
    },
    populateTable() {
      var vm = this

      this.getAll().then(data => {
        vm.listaEventos = data.reverse()
      })
    },
    getAll() {
			return fetch(`${this.$apiUrl}/eventos/`, {
				method: 'get'
			}).then(response => response.json())
    },
    validateForm() {
      return Object.values(this.eventoForm).every(dado => dado != null && dado != '' )
    }
  },
  mounted() {  
    this.populateTable()  
  }
}
</script>