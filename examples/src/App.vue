<template>
  <Button @click="handleClick" :type="type" disabled>123</Button>
  <Link href="http://www.baidu.com" :type="type" @click="handleClick" disabled>哈哈哈</Link>
</template>

<script setup>
import {ref} from "vue"
import {Button,Link} from "../../lib"
import "../../lib/style/index.css"

let type = ref("info")
const handleClick = () => {
  type.value = "danger"
}

</script>

<style >

</style>
