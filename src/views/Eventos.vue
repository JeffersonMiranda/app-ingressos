<template>
  <div class="home">
    <Tabela titulo="Lista de eventos">
      <thead>
			  <tr>
					<th>ID</th>
					<th>Descrição</th>
					<th>Data</th>
					<th>Abertura</th>
          <th>Início</th>
          <th>Classificação</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td></td>
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
  } 
}
</script>