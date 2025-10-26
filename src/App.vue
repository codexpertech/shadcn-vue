<!-- Sidebar -->
<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
import { Button } from '@/components/ui/button'
import { SidebarProvider } from '@/components/ui/sidebar'
import { Toaster } from '@/components/ui/sonner'
import { toastConfig, customToast } from '@/lib/toast'
import 'vue-sonner/style.css'

const handleSuccess = () => {
  customToast.success('This is a success toast!', {
    duration: 2000,
    dismissible: true,
    action: {
      label: 'Undo',
      onClick: (toast) => {
        console.log('Undo action clicked for toast:', toast)
      }
    },
    cancel: {
      label: 'Cancel',
      onClick: (toast) => {
        console.log('Cancel action clicked', toast)
      }
    },
    onDismiss: (toast) => {
      console.log('Toast dismissed:', toast)
    }
  })
}

const handleError = () => {
  customToast.error('This is an error toast!', {
    duration: 2000,
    dismissible: true,
    closeButton: false,
    onDismiss: (toast) => {
      console.log('Error toast dismissed:', toast)
    }
  })
}
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <main>
      <RouterView />
      <Button @click="handleSuccess">Show Success Toast</Button>
      <Button @click="handleError" variant="destructive">Show Error Toast</Button>
    </main>
    <Toaster v-bind="toastConfig" />
  </SidebarProvider>
</template>