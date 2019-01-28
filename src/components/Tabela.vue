<template>
	<div class="row">
		<div class="col-md-12">
			<div class="table-responsive">
				<table class="table responsive"> <slot></slot> </table>		
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Tabela'
}
</script>

<style lang="scss">
	
	.table {
		margin-top: 20px;
	}

</style>