<template>
  <div class="home">

		<div class="row">  
			<div class="col-md-3">
        <div class="form-group">
          <label for="descricaoForm"> Evento </label>
          <select v-if="listaEventos" class="form-control" v-model="ingressoForm.evento">
            <option v-for="evento in listaEventos" :value="evento" >
              {{ evento.nome }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-md-3">
        <div class="form-group">
          <label for="descricaoForm"> Lote </label>
          <input type="text" class="form-control" id="descricaoForm" v-model="ingressoForm.lote">
        </div>
      </div>
      <div class="col-md-3">
        <div class="form-group">
          <label for="descricaoForm"> Valor </label>
          <input type="text" class="form-control" id="descricaoForm" v-model="ingressoForm.valor">
        </div>
      </div>
			<div class="col-md-3">
        <div class="form-group">
          <label for="descricaoForm"> Inteira/meia </label>
          <select class="form-control" v-model="ingressoForm.modalidade">
            <option v-for="modalidade in modalidades" :value="modalidade">
              {{ modalidade }}
            </option>
          </select>
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
					<th> ID </th>
					<th> Nomde Evento </th>
					<th> Lote </th>
					<th> Valor </th>
					<th> Modalidade </th>
					<th> Região </th>
				</tr>
			</thead>
			<tbody>
				<tr v-if="listaIngressos" v-for="ingresso in listaIngressos">
					<td> {{ ingresso.id }} </td>
					<td> {{ ingresso.evento.nome }} </td>
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
      ingressoForm: {
				evento: "",
        lote: "",
				valor: "",
				regiao: "",
				modalidade: ""
			},
			regioes: ['Plateia', 'Balcão'],
			modalidades: ['Inteira', 'Meia'],
			listaIngressos: [],
			listaEventos: []
    }
	},
	methods: {
		save() {
      var vm = this;

      fetch('http://localhost:1337/ingressos', {
        method: 'post',
        body: JSON.stringify({
					evento: vm.ingressoForm.evento.id,
					lote: vm.ingressoForm.lote,
					modalidade: vm.ingressoForm.modalidade,
					valor: vm.ingressoForm.valor,
					regiao: vm.ingressoForm.regiao
        })
      })
    },
		getAll() {
			return fetch('http://localhost:1337/ingressos/', {
				method: 'get'
			}).then(response => response.json())
		},
		getAllEventos() {
			return fetch('http://localhost:1337/eventos/', {
				method: 'get'
			}).then(response => response.json())
		},
		SelectedEvento() {
			if (this.id_evento) {
			 this.ingressoForm.evento = this.listaEventos.find(evento => evento.id == this.id_evento)
			}
		}
	},
	mounted() {
		var vm = this

		this.getAll().then(data => {
			vm.listaIngressos = data
		})

		this.getAllEventos().then(data => {
			vm.listaEventos = data
			vm.SelectedEvento()
		})
	}
}
</script>