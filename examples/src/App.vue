<template>
  <Button @click="handleClick" :type="type" disabled>123</Button>
</template>

<script setup>
import {ref} from "vue"
import {Button,WebStorage} from "../../lib"
import "../../lib/style/index.css"

console.log(WebStorage)

let type = ref("text")
const handleClick = () => {
  type.value = "danger"
}

</script>

<style >

</style>
