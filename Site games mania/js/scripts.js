$ (document).ready(function(){
    
    let slideatual = 1
    let listaslides = ["banner-lol", "banner-cs", "banner-f1"]

    setInterval(mudarslide, 2000)
    function mudarslide(){
         $("#carrosel").removeClass(listaslides [slideatual - 1])

         $("#carrosel").addClass(listaslides [slideatual])

         slideatual++;
         if(slideatual > 2){
           slideatual = 0
         }
        }
   
   
   
   
   
   
   
   
   
   
    $("#barras").click(function(){
    if ($("#menu").hasClass("menu-ativo")){
         $("#menu").removeClass("menu-ativo")
    }else{
        $("#menu").addClass("menu-ativo")
    }

    })
})

function cadastrarNewsletter(){
    let email = document.getElementById("campo-email").value
    alert(email)
 }
 
 //function mostrarMenu($event){
     //identificar o elemento menu
 //let menu = document.getElementById("menu")
 
     // mudar a visualização do menu
 
   //  if(getComputedStyle(menu).display == "none"){
     //    menu.style.display = "flex"
     //}else{
       //  menu.style.display = "none"
     //}
 
    // event.preventDefault()
 //}