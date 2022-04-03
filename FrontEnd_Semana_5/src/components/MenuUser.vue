<template>
    <div>
        <header>
            <img src="../assets/logo.png" width="150" height="150" alt="Logo Terrygan"/>
            <h1>Pasteleria Terrygan</h1>
        </header>
      
        <nav>
            <h2> | 
                <router-link to="/">Pasteles</router-link> |
                <router-link to="/adornos">Adornos</router-link> |
                <router-link to="/pedido">Haz tu pedido</router-link> |
                <router-link to="/contactanos">Contactanos</router-link> |
            </h2>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'MenuUser'
}
</script>