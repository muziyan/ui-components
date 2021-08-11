<template>
  <Button @click="handleClick" :type="type" disabled>123</Button>
</template>

<script setup>
import {ref} from "vue"
import {Button} from "../../lib"
import "../../lib/style/index.css"

let type = ref("text")
const handleClick = () => {
  type.value = "danger"
}

</script>

<style >

</style>
