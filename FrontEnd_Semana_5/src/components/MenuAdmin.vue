<template>
    <div>
        <header>
            <img src="../assets/logo.png" width="150" height="150" alt="Logo Terrygan"/>
            <h1>Pasteleria Terrygan</h1>
        </header>
      
        <nav>
            <h2> | 
                <router-link to="/inventario">Inventario</router-link> |
                <router-link to="/pedidos">Pedidos</router-link> |
            </h2>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'MenuAdmin'
}
</script>