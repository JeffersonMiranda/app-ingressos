<template>
	<div>
		<h2> {{ titulo }} </h2>

		<table class="table"> <slot></slot> </table>
		
	</div>
</template>

<script>
export default {
	name: 'Tabela',
	props: ['titulo']
}
</script>