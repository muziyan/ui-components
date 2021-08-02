<template>
  <Button @click="handleClick" :type="type">123</Button> 
</template>

<script setup>
import {ref} from "vue"
import {Button} from "../../lib/index"
import "../../lib/style/index.css"
let type = ref("info")
const handleClick = () => {
  type.value = "danger"
}

</script>

<style >

</style>
