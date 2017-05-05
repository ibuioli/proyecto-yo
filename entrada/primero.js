$(document).ready( function() {           
	    $("#form_contacto").validate();
	    		
			$(".relato_3").fadeIn(300);	    		
	    		
            function pRun() {
                $("#relato").animate({opacity: ".99"},60);
                $("#relato").animate({opacity: ".95"},60);
                $("#relato a").animate({opacity: ".99"},80);
                $("#relato a").animate({opacity: ".40"},80, pRun);
            }
            pRun();
            
            function runAt() {
                $("#req").animate({opacity: ".99"},60);
                $("#req").animate({opacity: ".85"},60, runAt);
            }
            runAt();
            function runIot() {
                $("#titulo_inferior").animate({opacity: ".90"},60);
                $("#titulo_inferior").animate({opacity: ".45"},60, runIot);
            }
            runIot();
            
            $("#contiene").fadeIn(1000);
            $(".sencilla").delay(1500).animate({opacity: ".99"},900).animate({opacity: ".50"},500).animate({opacity: ".99"},100).animate({opacity: ".30"},110).animate({opacity: ".99"},100).animate({opacity: ".20"},90).animate({opacity: ".80"},80).animate({opacity: ".10"},100);
            function runEt() {
                $(".sencilla").animate({opacity: ".99"},60);
                $(".sencilla").animate({opacity: ".85"},60, runEt);
            }
            runEt();
            $("footer").mouseover( function() {
				$("footer").animate({bottom: "-2px"},300);
	    		}).mouseleave(function(){
            $("footer").animate({bottom: "-40px"},300);
            });
            $("header").mouseover( function() {
				$("header").animate({top: "0"},300);
	    		}).mouseleave(function(){
            $("header").animate({top: "-40px"},300);
            });
            $(".contacto").click( function() {
				$("#contiene").fadeOut(500);
                $("#acerca").fadeOut(500);
                $("#memo").fadeOut(500);
                $("#contacto").delay(500).fadeIn(500);
	    		})
            $(".acerca").click( function() {
                $("#contiene").fadeOut(500);
                $("#contacto").fadeOut(500);
                $("#memo").fadeOut(500);
                $("#acerca").delay(500).fadeIn(500);
	    })
            $(".memo").click( function() {
                $("#contiene").fadeOut(500);
                $("#contacto").fadeOut(500);
                $("#acerca").fadeOut(500);
                $("#memo").delay(500).fadeIn(500);
	    })
            $("#cerrar_contacto").click( function() {
                $("#contacto").fadeOut(500);
                $("#contiene").delay(500).fadeIn(500);
	    })
            $("#cerrar_acerca").click( function() {
                $("#acerca").fadeOut(500);
                $("#contiene").delay(500).fadeIn(500);
	    })
            $("#cerrar_memo").click( function() {
                $("#memo").fadeOut(500);
                $("#contiene").delay(500).fadeIn(500);
	    })
            $(".ayuda").mouseover( function() {
		$(".ayuda").animate({top: "0"},300);
	    }).mouseleave(function(){
                $(".ayuda").animate({top: "-40px"},300);
            });
	    $(".ayuda").click( function() {
		$(".payuda").animate({top: "0"},300);
	    }).mouseleave(function(){
                $(".payuda").delay(1500).animate({top: "-40px"},300);
            });
	    
            //WELCOME
            $(".boton_le").click( function() {
            $(".sencilla").delay(1000).fadeOut(800);
            $(".boton_le").delay(1000).fadeOut(600);
            $("#relato").delay(1000).fadeIn(500);
            });
            
	    //PRIMERO
       $("#agregados").fadeOut(50).delay(2000).fadeIn(100); 
	    $(".clic01").click( function() {
		random01 = Math.random();
		random01 = random01*3;
		random01 = parseInt(random01);
		if(random01 == 0){
		    $(".amigo").fadeOut(300);
		    $(".azar").fadeOut(300);
		    $(".alivio").fadeIn(700);
		}
		if(random01 == 1){
		    $(".alivio").fadeOut(300);
		    $(".amigo").fadeOut(700);
		    $(".azar").fadeIn(700);
		}
		if(random01 == 2){
		    $(".alivio").fadeOut(300);
		    $(".azar").fadeOut(300);
		    $(".amigo").fadeIn(700);
		}
		
		if(random01 == 0 && random02 == 2){
		    $(".sencilla").delay(1000).fadeOut(800);
                    $("#agregados").delay(1000).fadeOut(700);
                    $("#relato").delay(1200).fadeIn(500);
		}
	    });
	    
	    $(".clic02").click( function() {
		random02 = Math.random();
		random02 = random02*3;
		random02 = parseInt(random02);
		if(random02 == 0){
		    $(".anonimo").fadeOut(300);
		    $(".aceptable").fadeOut(300);
		    $(".analg").fadeIn(700);
		}
		if(random02 == 1){
		    $(".anonimo").fadeOut(300);
		    $(".analg").fadeOut(300);
		    $(".aceptable").fadeIn(700);
		}
		if(random02 == 2){
		    $(".analg").fadeOut(300);
		    $(".aceptable").fadeOut(300);
		    $(".anonimo").fadeIn(700);
		}
		
		if(random01 == 0 && random02 == 2){
		    $(".sencilla").delay(1000).fadeOut(800);
          $("#agregados").delay(1000).fadeOut(700);
          $("#relato").delay(1200).fadeIn(500);
		}
	    });
            
            //SEGUNDO
            $("#req").fadeOut(50).delay(2000).fadeIn(100)
            $("#req").focus();
            $(document).keypress( function() {
            if(document.getElementById('req').value == "WALKIRIA" || document.getElementById('req').value == "walkiria" || document.getElementById('req').value == "Walkiria"){
                        $(".sencilla").delay(1000).fadeOut(800);
                        $("#req").delay(1000).fadeOut(700);
                        $("#relato").delay(1000).fadeIn(500);
            }
            });
            
            //TERCERA
            $(".cromo1").mouseover( function() {
		$(".nota_C").fadeIn(500);
	    }).mouseleave(function(){
                $(".nota_C").fadeOut(500);
            });
            $(".cromo2").mouseover( function() {
		$(".nota_D").fadeIn(500);
	    }).mouseleave(function(){
                $(".nota_D").fadeOut(500);
            });
            $(".cromo3").mouseover( function() {
		$(".nota_E").fadeIn(500);
	    }).mouseleave(function(){
                $(".nota_E").fadeOut(500);
            });
            $(".cromo4").mouseover( function() {
		$(".nota_F").fadeIn(500);
	    }).mouseleave(function(){
                $(".nota_F").fadeOut(500);
            });
            $(".cromo5").mouseover( function() {
		$(".nota_G").fadeIn(500);
	    }).mouseleave(function(){
                $(".nota_G").fadeOut(500);
            });
            $(".cromo6").mouseover( function() {
		$(".nota_A").fadeIn(500);
	    }).mouseleave(function(){
                $(".nota_A").fadeOut(500);
            });
            $(".cromo7").mouseover( function() {
		$(".nota_B").fadeIn(500);
	    }).mouseleave(function(){
                $(".nota_B").fadeOut(500);
            });		
				   
            //INSTRUMENTOS
            $(".tunel1").click( function() {
		    $(".sencilla").delay(1000).fadeOut(800);
                    $("#agregados").delay(1000).fadeOut(700);
                    $(".parte1").delay(1200).fadeIn(500);
	    });
            $(".tunel2").click( function() {
		    $(".sencilla").delay(1000).fadeOut(800);
                    $("#agregados").delay(1000).fadeOut(700);
                    $(".parte2").delay(1200).fadeIn(500);
	    });
            $(".tunel4").click( function() {
		    $(".sencilla").delay(1000).fadeOut(800);
                    $("#agregados").delay(1000).fadeOut(700);
                    $(".parte1").delay(1200).fadeIn(500);
	    });
            $(".tunel5").click( function() {
		    $(".sencilla").delay(1000).fadeOut(800);
                    $("#agregados").delay(1000).fadeOut(700);
                    $(".parte2").delay(1200).fadeIn(500);
	    });
            $(".tunel6").click( function() {
		    $(".sencilla").delay(1000).fadeOut(800);
                    $("#agregados").delay(1000).fadeOut(700);
                    $(".parte1").delay(1200).fadeIn(500);
	    });
            $(".tunel3").click( function() {
		    $(".sencilla").delay(1000).fadeOut(800);
                    $("#agregados").delay(1000).fadeOut(700);
                    $("#relato").delay(1200).fadeIn(500);
	    });
	    
	    //ESPINETAAA 
	    $(".g01").click( function() {
		    $(".g01").fadeOut(300);
		    $(".u01").fadeIn(300);
	    });
	    $(".g02").click( function() {
		    $(".g02").fadeOut(300);
		    $(".u02").fadeIn(300);
	    });
	    $(".g03").click( function() {
		    $(".g03").fadeOut(300);
		    $(".u03").fadeIn(300);
	    });
		$(".g04").click( function() {
		    $(".g04").fadeOut(300);
		    $(".u04").fadeIn(300);
	    });
	    $(".g05").click( function() {
		    $(".g05").fadeOut(300);
		    $(".u05").fadeIn(300);
	    });
	    $(".g06").click( function() {
		    $(".g06").fadeOut(300);
		    $(".u06").fadeIn(300);
	    });
	    
	     var uo88 = 0;		
			$(".tagas a").click( function() {
			uo88++;
			if(uo88 == 6){
			$("#senzo").fadeIn(500).delay(2000).fadeOut(300);
			$("#senza").fadeOut(500);
			$("#agregados").delay(4000).fadeOut(300);
			$("#relato").delay(4100).fadeIn(300);
			}
			});
			
			//VELAS!!
			$(".algo_p a").click( function() {
		    $("#agregados").fadeOut(800);
		    $(".sencilla").fadeOut(800);
			 $("#relato").fadeIn(900);
	    	});
	    
});