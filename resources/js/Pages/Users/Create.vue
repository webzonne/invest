<script setup>
import { Head } from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import useCreate from "@/Pages/Users/composables/useCreate.js";
import Form from "@/Pages/Users/partials/Form.vue";

const { form, roles, loading, searchRole, create } = useCreate();
</script>

<template>
    <Head title="Nuevo Usuario" />

    <AuthenticatedLayout>
        <Form
            @submit.prevent="create"
            :form="form"
            :roles="roles"
            :loading="loading"
            button-label="Guardar"
            :searchRole="searchRole"
        />
    </AuthenticatedLayout>
</template>
