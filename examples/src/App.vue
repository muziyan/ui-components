<template>
  <Button @click="handleClick" :type="type">123</Button> 
</template>

<script setup>
import {ref} from "vue"
import {Button} from "ui_component_jixiaoqi"
import "ui_component_jixiaoqi/lib/style/index.css"

let type = ref("info")
const handleClick = () => {
  type.value = "danger"
}

</script>

<style >

</style>
