<template>
    <div>
        <h2>Terrygan te recomienda estos deliciosos sabores:</h2>
        <!-- Contiene un carrusel de productos -->
        <div class="productos">
            <div class="product" id="pastelChocolate">
                <img src="../assets/01.jpg" width="195" height="150" alt="Pastel chocolate"/>
                <h5>Chocolate</h5>
                <p>$180.00</p>
            </div>
            <div class="product" id="pastelOreo">
                <img src="../assets/02.jpg" width="195" height="150" alt="Pastel Oreo"/>
                <h5>Oreo</h5>
                <p>$200.00</p>
            </div>
            <div class="product" id="pastelChocoflan">
                <img src="../assets/03.jpg" width="195" height="150" alt="Pastel chocoflan"/>
                <h5>Chocoflan</h5>
                <p>$250.00</p>
            </div>
            <div class="product" id="pastelMoka">
                <img src="../assets/04.jpg" width="195" height="150" alt="Pastel moka"/>
                <h5>Moka</h5>
                <p>$180.00</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Pasteles'
}
</script>

<style>
    .productos{
        position: relative;
        width: 100%;
        display:flex;
        justify-content: center;
        align-items: center;
        bottom: 0%;
    }
    .product {
        position:relative;
        float:left;
        margin:1em;
        width: 18%;
        height: 250px;
    }

    .product:hover{
        box-shadow: 2px 3px 15px -2px rgba(20, 72, 146, 0.5);
        
        border-radius: 10px 10px 10px 10px;
    }
</style>