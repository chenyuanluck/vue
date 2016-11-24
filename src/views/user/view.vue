<template>
    <div id="user">
        <h1>Hello {{name}}</h1>
        <p>{{ $route.params.id }}</p>
    </div>
</template>

<style>
    h1 {
        color: #F00;
    }
</style>