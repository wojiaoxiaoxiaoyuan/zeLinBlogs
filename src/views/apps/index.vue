<template>
  <AdminLayout>
    <transition name="fade">
      <router-view/>
    </transition>
  </AdminLayout>
</template>

<script>
import AdminLayout from '@/components/admin-layout'
export default {
  name: 'apps',

  components: { AdminLayout }
}
</script>
