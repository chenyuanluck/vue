<template>
    <div id="user">
        <h1>Hello {{name}}</h1>
        <p>{{$route.params.id}}</p>
        <div v-text="message"></div>
        <router-view></router-view>
    </div>
</template>

<style>
    h1 {
        color: #F00;
    }
</style>