<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useForm } from 'vee-validate';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';

const formSchema = toTypedSchema(z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  username: z.string().min(3, 'Username must be at least 3 characters.'),
  bio: z.string().max(160).optional(),
  website: z.string().url().optional().or(z.literal('')),
  currentPassword: z.string().min(1, 'Current password is required'),
  newPassword: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string().min(8, 'Password must be at least 8 characters')
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
}));

const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    fullName: 'Daniel Martínez Pinero',
    email: 'dmpinero@gmail.com',
    username: 'dmpinero',
    bio: 'Ingeniero de software apasionado por el desarrollo web y las nuevas tecnologías.',
    website: 'https://www.codexpert.tech',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  }
});

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();

const onSubmit = form.handleSubmit((values) => {
  console.log('Settings updated!', values);
});
</script>

<template>
  <div :class="cn('flex flex-col gap-6', props.class)">
    <Card>
      <CardHeader>
        <CardTitle>User Settings</CardTitle>
        <CardDescription>Update your personal information and preferences</CardDescription>
      </CardHeader>
      <CardContent>
        <form @submit="onSubmit">
          <div class="flex flex-col gap-6">
            <FormField v-slot="{ componentField }" name="fullName">
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input v-bind="componentField" />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Your full name as it will appear on your profile
                </FormDescription>
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="email">
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" v-bind="componentField" />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Your primary email address for notifications
                </FormDescription>
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="username">
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input v-bind="componentField" />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Your unique username for your profile URL
                </FormDescription>
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="bio">
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Input v-bind="componentField" />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Brief description for your profile (max 160 characters)
                </FormDescription>
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="website">
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input type="url" v-bind="componentField" placeholder="https://" />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Your personal or portfolio website
                </FormDescription>
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="currentPassword">
              <FormItem>
                <FormLabel>Current Password</FormLabel>
                <FormControl>
                  <Input type="password" v-bind="componentField" />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Enter your current password to verify changes
                </FormDescription>
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="newPassword">
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input type="password" v-bind="componentField" />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Must be at least 8 characters long
                </FormDescription>
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="confirmPassword">
              <FormItem>
                <FormLabel>Confirm New Password</FormLabel>
                <FormControl>
                  <Input type="password" v-bind="componentField" />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Re-enter your new password to confirm
                </FormDescription>
              </FormItem>
            </FormField>

            <div class="flex justify-end gap-3">
              <Button variant="outline" type="button">Cancel</Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  </div>
</template>