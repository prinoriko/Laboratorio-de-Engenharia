document.addEventListener("DOMContentLoaded", ()=>{
    diaNomeSemana = new Array ("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado")
    mesNome = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho","Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")
    data = new Date

    document.write (diaNomeSemana[data.getDay() ] + ", " + data.getDate () + " de " + mesNome [data.getMonth() ]   +  " de "  +     data.getFullYear ())
})
