<template>
    
    <footer class="bg-light py-3">
    <div class="container text-center">
      <p>© {{ year }}  Solana Staking Services (3S). {{ $t('All_rights_reserved') }}.</p>
      <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const year= ref(new Date().getFullYear()) 
</script>