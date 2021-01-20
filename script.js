google.charts.load('current', {'packages':['corechart']});
var pdfButton = document.getElementById("donwloadPdf");
var csvButton = document.getElementById("donwloadCsv");
pdfButton.style.display = "none";
csvButton.style.display = "none";
function calcular(ano){
    
    var inicial = document.getElementById("investimentoInicial").value;
    var contribuicoes = document.getElementById("contribuicoes").value;
    var taxa = document.getElementById("taxaJuros").value;
    //
    contribuicoes = Number(contribuicoes);
    taxa = taxa / 100;
    /*if(contribuicoes > 0){
        inicial = inicial + contribuicoes * ano;
        return inicial * Math.pow((1 + taxa), ano);
        
    }*/
    return inicial * Math.pow((1 + taxa), ano);
    
    
 }

function grafico(pdf, csv){
    pdfButton.style.display = "block";
    csvButton.style.display = "block";
    var prazo = document.getElementById("prazo").value;
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Ano');
    data.addColumn('number', 'Retorno');
    data.addRows(Number(prazo));
    for(var i=0; i<prazo; i++){
        data.setCell(i, 0, i);
        data.setCell(i, 1, calcular(i));
    }
 
    var options = {
        title: 'O seu investimento',
        curveType: 'function',
        legend: { position: 'bottom'},
        width: 500
   };
       
       
   var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
   chart.draw(data, options)

   if(pdf == true){
        var doc = new jsPDF();
        doc.addImage(chart.getImageURI(), 0, 0);
        doc.save('chart.pdf');
   }
   if(csv == true){
                
   }

}
function prazo(){
    var objetivo = document.getElementById("objetivo").value;
    var prazo = document.getElementById("prazo2").value;
    var taxa = document.getElementById("taxa2").value;
    taxa = taxa / 100;
    document.getElementById("resultado").textContent = "Investimento: " + Math.round(objetivo / (Math.pow((1 + taxa), prazo))) + " euros";
}
function pdf(){
    grafico(true , false);
}
function csv(){
    grafico(false, true);
}
function tempo(){
    var capital = document.getElementById("capitalInicial").value;
    var objetivo = document.getElementById("objetivo2").value;
    var taxa = document.getElementById("taxa3").value;
    var valor = 0;
    var ano = 0;
    taxa = taxa/100;
    for(var i = 1; valor < objetivo; i++){
        valor = capital * Math.pow((1 + taxa), i);
        ano = i;
    }
    document.getElementById("resultado2").textContent = "Tempo necessário: " + ano + " anos"; 
}
function erro(){
    var txt;
    var person = prompt("Reporte o seu erro:");
     if (person == null || person == "") {
        
    } else {
        //comando p enviar o erro p o administrador
    } 
    //document.getElementById("demo").innerHTML = txt;
}
