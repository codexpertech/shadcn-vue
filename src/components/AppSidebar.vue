<script setup lang="ts">
import { 
    Calendar, 
    Home, 
    Inbox, 
    Search, 
    Settings, 
    ChevronDown, 
    User2, 
    ChevronUp,
    BookOpen,
    LifeBuoy,
    Building as BuildingIcon
} from "lucide-vue-next"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarTrigger
} from "@/components/ui/sidebar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ref, onMounted } from 'vue'
import SidebarSkeleton from "./SidebarSkeleton.vue"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
    color: "text-blue-500",
    badge: "New"
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
    color: "text-violet-500",
    badge: "3"
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
    color: "text-green-500",
    badge: "5"
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
    color: "text-orange-500"
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
    color: "text-gray-500",
    badge: "!"
  },
];

const isOpen = ref(false)
const isApplicationOpen = ref(true)
const isWorkspaceOpen = ref(false)
const loading = ref(true) // Añade este ref para controlar el estado de carga

// Simula una carga de datos
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2000) // Muestra el skeleton por 2 segundos
})
</script>

<template>
  <SidebarSkeleton v-if="loading" />
  <Sidebar v-else collapsible="icon" variant="floating" class="bg-gradient-to-b from-gray-50 to-white border-r shadow-sm">
    <SidebarHeader class="border-b bg-white/50 backdrop-blur-sm">
      <Collapsible v-model:open="isWorkspaceOpen" class="group/collapsible">
        <!-- Workspaces section -->
        <SidebarGroup>
          <SidebarGroupLabel>
            <CollapsibleTrigger class="flex w-full items-center font-semibold text-blue-600">
              Workspaces
              <ChevronDown class="ml-auto h-4 w-4 text-blue-500 transition-transform group-data-[state=open]/collapsible:rotate-180" />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton class="hover:bg-blue-50 transition-colors">
                    <a href="#" class="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                      <BuildingIcon class="h-4 w-4 text-blue-500" />
                      <span class="font-medium">Acme Inc</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton class="hover:bg-blue-50 transition-colors">
                    <a href="#" class="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                      <BuildingIcon class="h-4 w-4 text-blue-500" />
                      <span class="font-medium">Acme Corp.</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>
    </SidebarHeader>

    <SidebarContent class="px-2">
      <!-- Application section -->
      <Collapsible v-model:open="isApplicationOpen" class="group/collapsible">
        <SidebarGroup>
          <SidebarGroupLabel>
            <CollapsibleTrigger class="flex w-full items-center font-semibold text-blue-600">
              Application
              <ChevronDown class="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem v-for="item in items" :key="item.title">
                  <SidebarMenuButton asChild class="hover:bg-blue-50 transition-colors">
                    <a :href="item.url" class="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                      <component :is="item.icon" :class="[item.color, 'h-4 w-4']" />
                      <span class="font-medium">{{item.title}}</span>
                      <span v-if="item.badge" class="ml-auto inline-block rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-600">
                        {{ item.badge }}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>

      <!-- Help section -->
      <Collapsible v-model:open="isOpen" class="group/collapsible">
        <SidebarGroup>
          <SidebarGroupLabel>
            <CollapsibleTrigger class="flex w-full items-center font-semibold text-blue-600">
              Help
              <ChevronDown class="ml-auto h-4 w-4 text-purple-500 transition-transform group-data-[state=open]/collapsible:rotate-180" />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton class="hover:bg-blue-50 transition-colors">
                    <a href="#" class="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                      <BookOpen class="h-4 w-4 text-indigo-500" />
                      <span class="font-medium">Documentation</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton class="hover:bg-blue-50 transition-colors">
                    <a href="#" class="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                      <LifeBuoy class="h-4 w-4 text-pink-500" />
                      <span class="font-medium">Support</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>
    </SidebarContent>

    <SidebarFooter class="border-t bg-white/50 backdrop-blur-sm">
      <div class="flex items-center justify-between px-4">
        <SidebarMenu class="flex-1">
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton class="font-medium text-blue-600">
                  <User2 class="h-4 w-4 text-teal-500" /> Username
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                class="w-[--reka-popper-anchor-width]"
              >
                <DropdownMenuItem class="font-medium">
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem class="font-medium">
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem class="font-medium text-red-600">
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarTrigger class="z-50" />
      </div>
    </SidebarFooter>
  </Sidebar>
</template>