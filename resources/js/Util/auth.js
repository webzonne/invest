/**
 * Gestion de autenticación del usuario
 */

import { computed } from "vue";
import { usePage } from "@inertiajs/vue3";

/**
 * Verificar si el usuario esta logueado
 */
export const isUserLogged = computed(() => {
    const { props } = usePage();
    return props.auth?.user;
});

/**
 * Devuelve id del usuario logueado
 */
export const userId = computed(() => {
    const { props } = usePage();
    return props.auth?.user?.id ?? null;
});

/**
 * Devuelve el usuario autenticado
 */
export const user = computed(() => {
    const { props } = usePage();
    return props.auth?.user ?? {};
});
