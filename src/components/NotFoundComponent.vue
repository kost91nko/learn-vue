<template>
	<span class="red"> {{ errorMessage }} </span>
</template>

<script>
	export default {
	    props: {
	        errorMessage: {
	            type: String,
				default: '404: Not Found'
			}
		}
	}
</script>

<style lang="less" scoped>
	@red: #ff0000;
	.red{
		color: @red;
	}
</style>
