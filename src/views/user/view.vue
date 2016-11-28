<style>
    h1 {
        color: #F00;
    }
</style>

<template>
    <div id="user">
        <h1>Hello {{$data.name}}</h1>
        <p>{{$route.params.id}}</p>
        <div v-text="$data.message"></div>
        <router-view></router-view>
    </div>
</template>