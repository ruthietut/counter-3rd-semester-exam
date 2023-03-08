<template>
    <div class="container">
        <div class="notFound">
            <h1>404 - Page Not Found</h1>
            <button class="back">
                <router-link active-class="active" to="/">Back Home</router-link>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>