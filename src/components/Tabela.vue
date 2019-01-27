<template>
	<div>
		<h2> {{ titulo }} </h2>

		<table class="table">
			<thead>
				<tr>
					<th></th>
					<th></th>
					<th></th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th></th>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			</tbody>
		</table>

	</div>
</template>

<script>
export default {
	name: 'Tabela',
	props: ['titulo']
}
</script>