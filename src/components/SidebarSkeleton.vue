<script setup lang="ts">
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
</script>

<template>
  <Sidebar v-if="!loading" collapsible="icon" variant="floating" class="bg-gradient-to-b from-gray-50 to-white border-r shadow-sm">
    <SidebarContent class="px-2">
      <SidebarGroup>
        <SidebarGroupLabel>
          <div class="h-4 w-24 animate-pulse rounded bg-gray-200"></div>
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <div class="space-y-3">
            <!-- Primer elemento skeleton -->
            <div class="flex items-center space-x-4 rounded-lg p-2">
              <div class="h-4 w-4 animate-pulse rounded bg-gray-200"></div>
              <div class="h-4 w-[100px] animate-pulse rounded bg-gray-200"></div>
            </div>

            <!-- Segundo elemento skeleton -->
            <div class="flex items-center space-x-4 rounded-lg p-2">
              <div class="h-4 w-4 animate-pulse rounded bg-gray-200"></div>
              <div class="h-4 w-[120px] animate-pulse rounded bg-gray-200"></div>
            </div>

            <!-- Tercer elemento skeleton -->
            <div class="flex items-center space-x-4 rounded-lg p-2">
              <div class="h-4 w-4 animate-pulse rounded bg-gray-200"></div>
              <div class="h-4 w-[80px] animate-pulse rounded bg-gray-200"></div>
            </div>
          </div>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>