<template>
<div>
    <section class="container">
        <h2>Sobre nosotros</h2>
        <p>¡Terrygan es una experta en reposteria y ahora desea compartir todos los sabores que conoce contigo!
            Prueba nuestra deliciosa seleccion de pasteles y hazlos vistosos con los bonitos adornos que
            Terrygan tiene para ti.
        </p>
        <br>
        <h3>Contactanos</h3>
        <p>Direccion: Casa de Terrygan #1</p>
        <p>Telefono: 2221096622</p>
        <br><br>
        <table class="horario">
            <tr>
                <th>Lunes a Viernes</th>
                <th>Sabado</th>
            </tr>
            <tr>
                <td>09:00 A.M. a 18:00 P.M.</td>
                <td>11:00 A.M. a 16:00 P.M.</td>
            </tr>
        </table>
    </section>
</div>
</template>

<script>
export default {
  name: 'Info'
}
</script>

<style scoped>
    div{
        position: relative;
        width: 55%;
        display:flex;
        justify-content: center;
        align-items: center;
        bottom: 0%;
        margin: 0 auto;
    }

    table:hover{
        box-shadow: 2px 3px 15px -2px rgba(20, 72, 146, 0.5);
        border-radius: 10px 10px 10px 10px;
    }

    table {
        margin: 0 auto;
        width: 50%;
        border: 1px solid #000;
    }
    th, td {
        width: 25%;
        text-align: center;
        vertical-align: top;
        border: 1px solid #000;
        border-collapse: collapse;
        padding: 0.3em;
        caption-side: bottom;
    }
    caption {
        padding: 0.3em;
    }
</style>