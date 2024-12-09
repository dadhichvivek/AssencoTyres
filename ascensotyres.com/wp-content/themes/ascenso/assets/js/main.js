(function ($) {
  $(document).ready(function () {  
	  $('#introducing-modal').modal('show');
	   var sitelang = $("html").prop("lang");
	  if(sitelang=='nl-NL'){
		 replaceAgricultureIndustrialEarthMoverNl();
		 replaceIndiaTextNl();
		 replaceNewsMediaNl();
         replaceTableHeadNl();
		 replacePopupTextNl();
		 replaceBreadcrumbNl();
		 replaceSitemapNl();		 
		 replaceGalTextNl();		 
	  }  
	  
	  function replacePopupTextNl(){
		  $('.modal-header h2, .modal-body .cat-form-row label, .modal-footer button, .cat-form-row input').each(function() {
			var text = $(this).text();
			 var val = $(this).val();
			$(this).text(text.replace("Enquiry about", "Vraag over").replace("Name", "Naam").replace("Email", "E-mail").replace("Subject", "Onderwerpen").replace("Phone Number", "Telefoonnummer").replace("Comment", "Commentaar").replace("Close", "Dichtbij").replace("Send", "Sturen")); 
			  $(this).val(val.replace("Enquiry about", "Vraag over"));
		});
	  }
	  function replaceAgricultureIndustrialEarthMoverNl(){
		  $('select option').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Agriculture", "Agricultuur").replace("Industrial & Construction", "Industrieel en constructie").replace("Earth Mover", "Graafmachine").replace("Bias", "Diagonaal").replace("Radial", "Radiaal"));  
		});
	  }	 
	  function replaceIndiaTextNl(){
		  $('.designed-india-sec span').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Designed for India", "Ontworpen voor India")); 
		});
	  }
	  function replaceNewsMediaNl(){
		  $('div.title-h1').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("News & Media", "Nieuws en media")); 
		});
	  }      
      function replaceTableHeadNl(){
		  $('.warrenty-section table tr th').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Size", "Grootte").replace("Rim", "Rand").replace("Load Carrying Capacity", "Laadvermogen").replace("Max.Load", "Max. Belasting").replace("Loaded Radius", " geladen straal").replace("Static", "Statisch").replace("Load Radius", " geladen straal").replace("Unloaded Dimension", "Ongeladen afmeting").replace("Unloaded Inflated Dimension", "Onbelaste opgeblazen dimensie").replace("Load Radius", "Statisch lastradius").replace("Rolling", "Rollen").replace("Circumference"," Omtrek").replace("LI SI Or PR", "LI SI of PR").replace("Load Index/Speed Symbol", "Laadindex / snelheidssymbool").replace("Load Index", "Laadindex ").replace("Inflation", "Inflatiedruk").replace("Pressure", " Druk").replace("Recommended Load", "Aanbevolen last").replace("Recommended load)", "Aanbevolen last").replace("Recommend load)", "Aanbevolen last").replace("Speed (kmph)", "Snelheid (km/u)").replace("Speed (mph)", "Snelheid (m/u)").replace("Field operation", "Werkgebied").replace("High torque", "Hoge torsie").replace("Low torque", "Lage torsie").replace("Road operation not high and sustained torque", "Werken op de weg, geen hoge of voortdurende torsie").replace("PR Symbols", "Laadindex PR-symbolen").replace("Mixed Application", "Gemengde toepassing").replace("Mixed application", "Gemengde toepassing").replace("Drive Wheel", "Stuur").replace("Free Wheel", "Vrij wiel")); 
		});
	  }
	  function replaceBreadcrumbNl(){
		  $('span.rename-permalink a').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Home", "Huis").replace("Product", "Producten").replace("Agriculture", "Agricultuur").replace("Industrial & Construction", "Industrieel en constructie").replace("Earth Mover", "Graafmachine"));  
		});
	  }	
	function replaceSitemapNl(){
		  $('.legal-sec h3, .sitempa-txt').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("About Us", "Over ons").replace("Products", "Producten").replace("Resources", "Middelen").replace("News & Media", "Nieuws en media").replace("Machine", "Machine").replace("Application", "Toepassing").replace("TRA Code", "TRA-code").replace("Design", "Ontwerp").replace("Sitemap", "Sitemap"));  
		});
	  }	
	  function replaceGalTextNl(){
		  $('.gal-text').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Images", "Afbeeldingen").replace("Videos", "Videos"));  
		});
	  }		  
	  if(sitelang=='de-DE'){
		replaceAgricultureIndustrialEarthMoverDe();	 
		replaceIndiaTextDe();
		replaceNewsMediaDe();
        replaceTableHeadDe();
	   	replacePopupTextDe();
	   	replaceBreadcrumbDe();
	   	replaceSitemapDe();
	   	replaceGalTextDe();
	  }	  
	  function replacePopupTextDe(){
		  $('.modal-header h2, .modal-body .cat-form-row label, .modal-footer button, .cat-form-row input').each(function() {
			var text = $(this).text();
			 var val = $(this).val();
			$(this).text(text.replace("Enquiry about", "Anfrage über").replace("Name", "Name").replace("Email", "Email").replace("Subject", "Gegenstand").replace("Phone Number", "Telefonnummer").replace("Comment", "Kommentar").replace("Close", "Schließen").replace("Send", "Senden")); 
			  $(this).val(val.replace("Enquiry about", "Anfrage über"));
		});
	  }	  
	  function replaceAgricultureIndustrialEarthMoverDe(){
		  $('select option').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Agriculture", "Landwirtschaft").replace("Industrial & Construction", "Industrie- und Baumaschinen").replace("Earth Mover", "Erdbewegungsmaschinen").replace("Bias", "Vorspannung").replace("Radial", "Radial"));  
		});
	  }	  
	  function replaceIndiaTextDe(){
		  $('.designed-india-sec span').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Designed for India", "Entwickelt für Indien")); 
		});
	  }
	  function replaceNewsMediaDe(){
		  $('div.title-h1').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("News & Media", "Nachrichten und Medienberichte")); 
		});
	  }
      function replaceTableHeadDe(){
		  $('.warrenty-section table tr th').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Size", "Größe").replace("Rim", "Felge").replace("Load Carrying Capacity", "Tragfähigkeit").replace("Max.Load", "Tragfähigkeit").replace("Loaded Radius", " belasteter Radius").replace("Static", "Statisch").replace("Load Radius", " belasteter Radius").replace("Unloaded Dimension", "Unbelastete Abmessung").replace("Unloaded Inflated Dimension", "Entladene aufgeblasene Dimension").replace("Load Radius", "Statischer Belastungsradius").replace("Rolling", "Rollen").replace("Circumference"," Umfang").replace("LI SI Or PR", "LI SI oder PR").replace("Load Index/Speed Symbol", "Lastindex / Geschwindigkeitssymbol").replace("Load Index", "Lastindex ").replace("Inflation", "Aufblasdruck").replace("Pressure", " Druck").replace("Recommended Load", "Empfohlene Belastung").replace("Recommended load", "Empfohlene Belastung").replace("Recommend load", "Empfohlene Belastung").replace("Speed (kmph)", "Geschwindigkeit (km/h)").replace("Speed (mph)", "Geschwindigkeit (m/h)").replace("Field operation", "Feldeinsatz").replace("High torque", "Hohes Drehmoment").replace("Low torque", "Niedriges Drehmoment").replace("Road operation not high and sustained torque", "Straßenbetrieb, nicht hohes und anhaltendes Drehmoment").replace("PR Symbols", "Index-Symbole laden").replace("Mixed Application", "Gemischte Anwendung").replace("Mixed application", "Gemischte Anwendung").replace("Drive Wheel", "Lenkrad").replace("Free Wheel", "Freilauf")); 
		});
	  }
	  function replaceBreadcrumbDe(){
		  $('span.rename-permalink a').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Home", "Startseite").replace("Product", "Produkte").replace("Agriculture", "Landwirtschaft").replace("Industrial & Construction", "Industrie- und Baumaschinen").replace("Earth Mover", "Erdbewegungsmaschinen"));  
		});
	  }	 
	  function replaceSitemapDe(){
		  $('.legal-sec h3, .sitempa-txt').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("About Us", "Über uns").replace("Products", "Produkte").replace("Resources", "Ressourcen").replace("News & Media", "Nachrichten und Medien").replace("Machine", "Maschine").replace("Application", "Anwendung").replace("TRA Code", "TRA-Code").replace("Design", "Design").replace("Sitemap", "Seitenverzeichnis"));  
		});
	  }	
	  function replaceGalTextDe(){
		  $('.gal-text').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Images", "Abbildungen").replace("Videos", "Videos"));  
		});
	  }	
	  if(sitelang=='fr-FR'){
		 replaceAgricultureIndustrialEarthMoverFr();
		 replaceIndiaTextFr();
		 replaceNewsMediaFr();
         replaceTableHeadFr();
		 replacePopupTextFr();
		 replaceBreadcrumbFr();
		 replaceSitemapFr();
		 replaceGalTextFr();
	  }	  
	  function replacePopupTextFr(){
		  $('.modal-header h2, .modal-body .cat-form-row label, .modal-footer button, .cat-form-row input').each(function() {
			var text = $(this).text();
			 var val = $(this).val();
			$(this).text(text.replace("Enquiry about", "Demande sur").replace("Name", "Nom").replace("Email", "Email").replace("Subject", "Matière").replace("Phone Number", "Numéro de téléphone").replace("Comment", "Commentaire").replace("Close", "Fermer").replace("Send", "Envoyer")); 
			  $(this).val(val.replace("Enquiry about", "Demande sur"));
		});
	  }  
	  function replaceAgricultureIndustrialEarthMoverFr(){
		  $('select option').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Agriculture", "Agriculture").replace("Industrial & Construction", "Industrie et construction").replace("Earth Mover", "Engin de terrassement").replace("Bias", "Bias").replace("Radial", "Radial"));  
		});
	  }
	  function replaceIndiaTextFr(){
		  $('.designed-india-sec span').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Designed for India", "Conçue pour l’Inde")); 
		});
	  }
	  function replaceNewsMediaFr(){
		  $('div.title-h1').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("News & Media", "Information et Média")); 
		});
	  }
      function replaceTableHeadFr(){
		  $('.warrenty-section table tr th').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Size", "Taille").replace("Rim", "Jante").replace("Load Carrying Capacity", "Capacité de charge").replace("Max.Load", "Charge max.").replace("Loaded Radius", " Rayon chargé").replace("Static", "Statique").replace("Load Radius", " Rayon chargé").replace("Unloaded Dimension", "Dimension à vide").replace("Unloaded Inflated Dimension", "Dimension gonflée déchargée").replace("Load Radius", "Rayon de charge statique").replace("Rolling", "Roulement").replace("Circumference"," Circonférence").replace("LI SI Or PR", "LI SI ou PR").replace("Load Index/Speed Symbol", "Indice de charge / symbole de vitesse").replace("Load Index", "Indice de charge ").replace("Inflation", "Pression de gonflage").replace("Pressure", " Pression").replace("Recommended Load", "Charge recommandée").replace("Recommended load", "Charge recommandée").replace("Recommend load", "Charge recommandée").replace("Speed (kmph)", "Vitesse (kmph)").replace("Speed (mph)", "Vitesse (mph)").replace("Field operation", "Exploitation sur le terrain").replace("High torque", "Couple élevé").replace("Low torque", "Couple faible").replace("Road operation not high and sustained torque", "Exploitation sur route, pas de couple élevé et soutenu").replace("PR Symbols", "Symboles PR d'index de charge").replace("Mixed Application", "Application mixte").replace("Mixed application", "Application mixte").replace("Drive Wheel", "Roue motrice").replace("Free Wheel", "Roue libre")); 
		});
	  }
	  function replaceBreadcrumbFr(){
		  $('span.rename-permalink a').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Home", "Acceuil").replace("Product", "Produit").replace("Agriculture", "Agriculture").replace("Industrial & Construction", "Industrie et construction").replace("Earth Mover", "Engin de terrassement"));  
		});
	  }	 
	  function replaceSitemapFr(){
		  $('.legal-sec h3, .sitempa-txt').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("About Us", "À propos de nous").replace("Products", "Produit").replace("Resources", "Ressources").replace("News & Media", "Information et Média").replace("Machine", "Machine").replace("Application", "Application").replace("TRA Code", "Code TRA").replace("Design", "Conception").replace("Sitemap", "Plan du site"));  
		});
	  }	
	  function replaceGalTextFr(){
		  $('.gal-text').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Images", "Images").replace("Videos", "Vidéos"));  
		});
	  }	
	  if(sitelang=='es-ES'){
		 replaceAgricultureIndustrialEarthMoverEs();
		 replaceIndiaTextEs();
		 replaceNewsMediaEs();
         replaceTableHeadEs();
	     replacePopupTextEs();
	     replaceBreadcrumbEs();
	     replaceSitemapEs();
	     replaceGalTextEs();
	  }	  
	  function replacePopupTextEs(){
		  $('.modal-header h2, .modal-body .cat-form-row label, .modal-footer button, .cat-form-row input').each(function() {
			var text = $(this).text();
			 var val = $(this).val();
			$(this).text(text.replace("Enquiry about", "Consulta sobre").replace("Name", "Nombre").replace("Email", "Id Email").replace("Subject", "Sujeta").replace("Phone Number", "Número móvil").replace("Comment", "Comentario").replace("Close", "Cerca").replace("Send", "Enviar")); 
			  $(this).val(val.replace("Enquiry about", "Consulta sobre"));
		});
	  }   
	  function replaceAgricultureIndustrialEarthMoverEs(){
		  $('select option').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Agriculture", "Agricultura").replace("Industrial & Construction", "Industrial y Construcción").replace("Earth Mover", "Maquinaria de Movimiento de Tierras").replace("Bias", "Bias").replace("Radial", "Radial"));  
		});
	  }
	  function replaceIndiaTextEs(){
		  $('.designed-india-sec span').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Designed for India", "Diseñado para la India")); 
		});
	  }
	  function replaceNewsMediaEs(){
		  $('div.title-h1').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("News & Media", "Noticias y Media")); 
		});
	  }
      function replaceTableHeadEs(){
		  $('.warrenty-section table tr th').each(function() {
			var text = $(this).text().trim();
			$(this).text(text.replace("Size", "Tamaño").replace("Rim", "Rín").replace("Load Carrying Capacity", "Capacidad de carga").replace("Max.Load", "Carga maxima").replace("Static", "Estática").replace("Load Radius", " Radio de carga").replace("Unloaded Dimension", "Dimensión sin carga").replace("Unloaded Inflated Dimension", "Dimensión inflada descargada").replace("Rolling", "Laminación").replace("Circumference"," Circunferencia").replace("LI SI Or PR", "LI SI o PR").replace("LI/SI or PR", "LI SI o PR").replace("Load Index/Speed Symbol", "Índice de carga / símbolo de velocidad").replace("Load Index", "Índice de carga ").replace("Inflation", "Inflado").replace("Pressure", " Presión").replace("pressure", " Presión").replace("Recommend load", "Carga recomendada").replace("Recommended load", "Carga recomendada").replace("Recommended Load", "Carga recomendada").replace("Drive Wheel", "Rueda motriz").replace("Free Wheel", "Rueda libre").replace("Speed (kmph)", "Velocidad (kmph)").replace("Speed (mph)", "Velocidad (mph)").replace("Field operation", "Operación de campo").replace("High torque", "Par alto").replace("Low torque", "Par bajo").replace("Road operation not high and sustained torque", "Operación en carretera, par no alto y sostenido").replace("PR Symbols", "Símbolos PR de índice de carga").replace("Mixed Application", "Aplicación mixta").replace("Mixed application", "Aplicación mixta")); 
		});
	  }
	  function replaceBreadcrumbEs(){
		  $('span.rename-permalink a').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Home", "Inicio").replace("Product", "Productos").replace("Agriculture", "Agricultura").replace("Industrial & Construction", "Industrial y Construcción").replace("Earth Mover", "Maquinaria de Movimiento de Tierras"));  
		});
	  }	 
	  function replaceSitemapEs(){
		  $('.legal-sec h3, .sitempa-txt').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("About Us", "Acerca de Nosotros").replace("Products", "Productos").replace("Resources", "Recursos").replace("News & Media", "Noticias y Media").replace("Machine", "Máquina").replace("Application", "Solicitud").replace("TRA Code", "Código TRA").replace("Design", "Diseño").replace("Sitemap", "Mapa del sitio"));  
		});
	  }	
	  function replaceGalTextEs(){
		  $('.gal-text').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Images", "Imágenes").replace("Videos", "Videos"));  
		});
	  }	
	  if(sitelang=='it-IT'){
		 replaceAgricultureIndustrialEarthMoverIt();
		 replaceIndiaTextIt();
		 replaceNewsMediaIt();
         replaceTableHeadIt();
	     replacePopupTextIt();
	     replaceBreadcrumbIt();
	     replaceSitemapIt();
	     replaceGalTextIt();
	  }	  
	  function replacePopupTextIt(){
		  $('.modal-header h2, .modal-body .cat-form-row label, .modal-footer button, .cat-form-row input').each(function() {
			var text = $(this).text();
			 var val = $(this).val();
			$(this).text(text.replace("Enquiry about", "Inchiesta su").replace("Name", "Nome").replace("Email", "E-mail").replace("Subject", "Soggetta").replace("Phone Number", "Numero di telefono").replace("Comment", "Commento").replace("Close", "vicino").replace("Send", "Spedire")); 
			  $(this).val(val.replace("Enquiry about", "Inchiesta su"));
		});
	  }  
	  function replaceAgricultureIndustrialEarthMoverIt(){
		  $('select option').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Agriculture", "Agricoltura").replace("Industrial & Construction", "Industria e costruzioni").replace("Earth Mover", "Macchine movimento terra").replace("Bias", "Polarizzazione").replace("Radial", "Radiale"));  
		});
	  }
	  function replaceIndiaTextIt(){
		  $('.designed-india-sec span').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Designed for India", "Progettato per l'India")); 
		});
	  }
	  function replaceNewsMediaIt(){
		  $('div.title-h1').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("News & Media", "Notizie e media")); 
		});
	  }
      function replaceTableHeadIt(){
		  $('.warrenty-section table tr th').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Size", "Dimensione").replace("Rim", "Cerchio").replace("Load Carrying Capacity", "Capacità di carico").replace("Max.Load", "Carico massimo").replace("Loaded Radius", " Raggio carico").replace("Static", "Statico").replace("Load Radius", " Raggio carico").replace("Unloaded Dimension", "Dimensione a vuoto").replace("Unloaded Inflated Dimension", "Dimensione gonfiata scaricata").replace("Load Radius", "Raggio di carico statico").replace("Rolling", "Rotolamento").replace("Circumference"," Circonferenza").replace("LI SI Or PR", "LI SI o PR").replace("Load Index/Speed Symbol", "Indice di carico / simbolo di velocità").replace("Load Index", "Indice di carico ").replace("Inflation", "Pressione di gonfiaggio").replace("Pressure", " Pressione").replace("Recommended Load", "Carico raccomandato").replace("Recommended load", "Carico raccomandato").replace("Recommend load", "Carico raccomandato").replace("Speed (kmph)", "Velocità (kmph)").replace("Speed (mph)", "Velocità (mph)").replace("Field operation", "Funzionamento sul campo").replace("High torque", "Coppia elevata").replace("Low torque", "Coppia bassa").replace("Road operation not high and sustained torque", "Funzionamento su strada, non elevata e sostenuta").replace("PR Symbols", "Indice di carico Simboli PR").replace("Mixed Application", "Applicazione mista").replace("Mixed application", "Applicazione mista").replace("Drive Wheel", "Volante").replace("Free Wheel", "Ruota libera")); 
		});
	  }
	  function replaceBreadcrumbIt(){
		 $('span.rename-permalink a').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Home", "Home").replace("Product", "Prodotti").replace("Agriculture", "Agricoltura").replace("Industrial & Construction", "Industria e costruzioni").replace("Earth Mover", "Macchine movimento terra"));  
		});
	  }	
	function replaceSitemapIt(){
		  $('.legal-sec h3, .sitempa-txt').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("About Us", "Chi siamo").replace("Products", "Prodotti").replace("Resources", "Risorse").replace("News & Media", "Notizie e media").replace("Machine", "Macchina").replace("Application", "Applicazione").replace("TRA Code", "Codice TRA").replace("Design", "Design").replace("Sitemap", "Mappa del sito"));  
		});
	  }	
    function replaceGalTextIt(){
		  $('.gal-text').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Images", "Immagini").replace("Videos", "Video"));  
		});
	  }		  
	  if(sitelang=='pt-pt'){
		 replaceAgricultureIndustrialEarthMoverPt();
		 replaceIndiaTextPt();
		 replaceNewsMediaPt();
         replaceTableHeadPt();
	     replacePopupTextPt();
	     replaceBreadcrumbPt();
	     replaceSitemapPt();
	     replaceGalTextPt();
	  }	  
	  function replacePopupTextPt(){
		  $('.modal-header h2, .modal-body .cat-form-row label, .modal-footer button, .cat-form-row input').each(function() {
			var text = $(this).text();
			 var val = $(this).val();
			$(this).text(text.replace("Enquiry about", "Inquérito sobre").replace("Name", "Nome").replace("Email", "O email").replace("Subject", "sujeitar").replace("Phone Number", "Número de telefone").replace("Comment", "Comente").replace("Close", "Fechar").replace("Send", "Enviar")); 
			  $(this).val(val.replace("Enquiry about", "Inquérito sobre"));
		});
	  }  
	  function replaceAgricultureIndustrialEarthMoverPt(){
		  $('select option').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Agriculture", "Agricultura").replace("Industrial & Construction", "Indústria e Construção").replace("Earth Mover", "Máquinas de Terraplanagem").replace("Bias", "Diagonal").replace("Radial", "Radial")); 
		});
	  }
	  function replaceIndiaTextPt(){
		  $('.designed-india-sec span').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Designed for India", "Projetado para a Índia")); 
		});
	  }
	  function replaceNewsMediaPt(){
		  $('div.title-h1').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("News & Media", "Notícias e Mídia")); 
		});
	  }
      function replaceTableHeadPt(){
		  $('.warrenty-section table tr th').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Size", "Tamanho").replace("Rim", "Jante").replace("Load Carrying Capacity", "Capacidade de transporte de carga").replace("Max.Load", "Carregamento máximo").replace("Loaded Radius", " Raio carregado").replace("Static", "Estática").replace("Load Radius", " Raio carregado").replace("Unloaded Dimension", "Dimensão sem carga").replace("Unloaded Inflated Dimension", "Dimensão Inflada Descarregada").replace("Rolling", "Rolamento").replace("Circumference"," Circunferência").replace("LI SI Or PR", "LI SI ou PR").replace("Load Index/Speed Symbol", "Índice de carga / símbolo de velocidade").replace("Load Index", "Índice de carga ").replace("Inflation", "Pressão de inflação").replace("Pressure", " Pressão").replace("Recommended Load (kg)", "Carga recomendada (kg)").replace("Recommended load", "Carga recomendada").replace("Recommended Load", "Carga recomendada").replace("Recommend load", "Carga recomendada").replace("Speed (kmph)", "Velocidade (km / h)").replace("Speed (mph)", "Velocidade (m / h)").replace("Field operation", "Operação em campo").replace("High torque", "Alto torque").replace("Low torque", "Baixo torque").replace("Road operation not high and sustained torque", "Operação em estrada, torque não alto e sustentado").replace("PR Symbols", "Carregar símbolos de índice de PR").replace("Mixed Application", "Aplicação mista").replace("Mixed application", "Aplicação mista").replace("Drive Wheel", "Roda motriz").replace("Free Wheel", "Roda livre")); 
		});
	  }
	  function replaceBreadcrumbPt(){
		  $('span.rename-permalink a').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Home", "Início").replace("Product", "Product").replace("Agriculture", "Agricultura").replace("Industrial & Construction", "Indústria e Construção").replace("Earth Mover", "Máquinas de Terraplanagem"));  
		});
	  }	 
	  function replaceSitemapPt(){
		  $('.legal-sec h3, .sitempa-txt').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("About Us", "Quem Somos").replace("Products", "Products").replace("Resources", "Recursos").replace("News & Media", "Notícias e Mídia").replace("Machine", "Máquina").replace("Application", "Inscrição").replace("TRA Code", "Código TRA").replace("Design", "Projeto").replace("Sitemap", "Mapa do site"));  
		});
	  }	
	  function replaceGalTextPt(){
		  $('.gal-text').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Images", "Imagens").replace("Videos", "Vídeos"));  
		});
	  }	
	  if(sitelang=='ru-RU'){
		 replaceAgricultureIndustrialEarthMoverRu();
		 replaceIndiaTextRu();
		 replaceNewsMediaRu();
         replaceTableHeadRu();
	     replacePopupTextRu();
	     replaceBreadcrumbRu();
	     replaceSitemapRu();
	     replaceGalTextRu();
	  }	  
	  function replacePopupTextRu(){
		  $('.modal-header h2, .modal-body .cat-form-row label, .modal-footer button, .cat-form-row input').each(function() {
			var text = $(this).text();
			 var val = $(this).val();
			$(this).text(text.replace("Enquiry about", "Запрос о").replace("Name", "имя").replace("Email", "Эл. адрес").replace("Subject", "Тема").replace("Phone Number", "Телефонный номер").replace("Comment", "Комментарий").replace("Close", "Закрыть").replace("Send", "послать")); 
			  $(this).val(val.replace("Enquiry about", "Запрос о"));
		});
	  }  
	  function replaceAgricultureIndustrialEarthMoverRu(){
		  $('select option').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Agriculture", "Сельское хозяйство").replace("Industrial & Construction", "промышленность и строительство").replace("Earth Mover", "землеройные машины").replace("Bias", "Смещение").replace("Radial", "Радиальное"));  
		});
	  }
	  function replaceIndiaTextRu(){
		  $('.designed-india-sec span').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Designed for India", "Предназначено для Индии")); 
		});
	  }
	  function replaceNewsMediaRu(){
		  $('div.title-h1').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("News & Media", "Новости и медиа")); 
		});
	  }
      function replaceTableHeadRu(){
		  $('.warrenty-section table tr th').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Size", "Размер").replace("Rim", "Обод").replace("Load Carrying Capacity", "Грузоподъемность").replace("Max.Load", "Максимальная нагрузка").replace("Loaded Radius", " загруженный радиус").replace("Static", "Статически").replace("Load Radius", " загруженный радиус").replace("Unloaded Dimension", "Размеры в ненагруженном состоянии").replace("Unloaded Inflated Dimension", "Выгруженный надутый размер").replace("Load Radius", "Радиус статической нагрузки").replace("Rolling", "Прокатка").replace("Circumference"," Длина окружности").replace("LI SI Or PR", "LI SI Или PR").replace("Load Index/Speed Symbol", "Индекс нагрузки / символ скорости").replace("Load Index", "Индекс нагрузки ").replace("Inflation", "Давление в шине").replace("Pressure", " Давление").replace("Recommended Load", "Рекомендуемая нагрузка").replace("Recommended load", "Рекомендуемая нагрузка").replace("Recommend load", "Рекомендуемая нагрузка").replace("Speed (kmph)", "Скорость (км/ч)").replace("Speed (mph)", "Скорость (м/ч)").replace("Field operation", "Эксплуатация в полевых условиях").replace("High torque", "Высокий крутящий момент").replace("Low torque", "Низкий крутящий момент").replace("Road operation not high and sustained torque", "Эксплуатация на дороге, высокий и устойчивый крутящий момент").replace("PR Symbols", "Символы PR индекса нагрузки").replace("Mixed Application", "Смешанное приложение").replace("Mixed application", "Смешанное приложение").replace("Drive Wheel", "Ведущее колесо").replace("Free Wheel", "Свободное колесо")); 
		});
	  }
	  function replaceBreadcrumbRu(){
		  $('span.rename-permalink a').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Home", "Домашняя страница").replace("Product", "Продукция").replace("Agriculture", "Сельское хозяйство").replace("Industrial & Construction", "промышленность и строительство").replace("Earth Mover", "землеройные машины"));  
		});
	  }	 
	  function replaceSitemapRu(){
		  $('.legal-sec h3, .sitempa-txt').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("About Us", "О нас").replace("Products", "Продукция").replace("Resources", "Ресурсы").replace("News & Media", "Новости и медиа").replace("Machine", "Машина").replace("Application", "заявка").replace("TRA Code", "Код TRA").replace("Design", "дизайн").replace("Sitemap", "Карта сайта"));  
		});
	  }	
	  function replaceGalTextRu(){
		  $('.gal-text').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Images", "Изображения").replace("Videos", "Видео"));  
		});
	  }	
	  if(sitelang=='tr-TR'){
		 replaceAgricultureIndustrialEarthMoverTr();
		 replaceIndiaTextTr();
		 replaceNewsMediaTr();
         replaceTableHeadTr();
	     replacePopupTextTr();
	     replaceBreadcrumbTr();
	     replaceSitemapTr();
	     replaceGalTextTr();
	  } 
	    
	  function replacePopupTextTr(){
		  $('.modal-header h2, .modal-body .cat-form-row label, .modal-footer button, .cat-form-row input').each(function() {
			var text = $(this).text();
			 var val = $(this).val();
			$(this).text(text.replace("Enquiry about", "Hakkında soruşturma").replace("Name", "İsim").replace("Email", "e-Posta adresi").replace("Subject", "Konu").replace("Phone Number", "Cep telefonu").replace("Comment", "Yorum Yap").replace("Close", "Kapat").replace("Send", "Gönder")); 
			  $(this).val(val.replace("Enquiry about", "Hakkında soruşturma"));
		});
	  }	  
	  function replaceAgricultureIndustrialEarthMoverTr(){
		  $('select option').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Agriculture", "Tarım").replace("Industrial & Construction", "Sanayi ve İnşaat").replace("Earth Mover", "Toprak Taşıyıcı Makineleri").replace("Bias", "Eğilim").replace("Radial", "Radyal"));  
		});
	  }	  
	  function replaceIndiaTextTr(){
		  $('.designed-india-sec span').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Designed for India", "Hindistan için tasarlanmış")); 
		});
	  }
	  function replaceNewsMediaTr(){
		  $('div.title-h1').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("News & Media", "Haber & Medya")); 
		});
	  }
      function replaceTableHeadTr(){
		  $('.warrenty-section table tr th').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Size", "Boyut").replace("Rim", "Jant").replace("Load Carrying Capacity", "Yük taşıma kapasitesi").replace("Max.Load", "Azami yük").replace("Static", "Statik").replace("Load Radius", " Yüklü Yarıçap").replace("Unloaded Dimension", "Yüksüz Boyut").replace("Unloaded Inflated Dimension", "Yüksüz Şişirilmiş Boyut").replace("Load Radius", "Statik Yük Yarıçapı").replace("Rolling", "Yuvarlanma").replace("Circumference"," Çevresi").replace("LI SI Or PR", "LI SI veya PR").replace("Load Index/Speed Symbol", "Yük Endeksi / Hız Sembolü").replace("Load Index", "Yük Endeksi ").replace("Inflation", "Şişirme Basıncı").replace("Pressure", " Basınç").replace("Recommended Load", "Önerilen Yük").replace("Recommended load", "Önerilen Yük").replace("Recommend load", "Önerilen Yük").replace("Speed (kmph)", "Hız (km/s)").replace("Speed (mph)", "Hız (m/s)").replace("Field operation", "Alan çalışması").replace("High torque", "Yüksek tork").replace("Low torque", "Düşük tork").replace("Road operation not high and sustained torque", "Yol çalışması, yüksek olmayan ve sürekli tork").replace("PR Symbols", "Yük Endeksi PR Sembolleri").replace("Mixed Application", "Karışık Uygulama").replace("Mixed application", "Karışık Uygulama").replace("Drive Wheel", "Tahrik Tekerleği").replace("Free Wheel", "Ücretsiz Tekerlek")); 
		});
	  }
	  function replaceBreadcrumbTr(){
		  $('span.rename-permalink a').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Home", "Ana Sayfa").replace("Product", "Ürünler").replace("Agriculture", "Tarım").replace("Industrial & Construction", "Sanayi ve İnşaat").replace("Earth Mover", "Toprak Taşıyıcı Makineleri"));  
		});
	  }	 
	  function replaceSitemapTr(){
		  $('.legal-sec h3, .sitempa-txt').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("About Us", "Hakkımızda").replace("Products", "Ürünler").replace("Resources", "Kaynaklar").replace("News & Media", "Haber & Medya").replace("Machine", "Makine").replace("Application", "Uygulama").replace("TRA Code", "TRA Kodu").replace("Design", "Tasarım").replace("Sitemap", "Site haritası"));  
		});
	  }	
	  function replaceGalTextTr(){
		  $('.gal-text').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Images", "Resimler").replace("Videos", "Videolar"));  
		});
	  }	
	  
// 	  Greek
	  
	  if(sitelang=='el'){
		 replaceAgricultureIndustrialEarthMoverEl();
		 replaceIndiaTextEl();
		 replaceNewsMediaEl();
         replaceTableHeadEl();
		 replacePopupTextEl();
		 replaceBreadcrumbEl();
		 replaceSitemapEl();		 
		 replaceGalTextEl();		 
	  }  
	  
	  function replacePopupTextEl(){
		  $('.modal-header h2, .modal-body .cat-form-row label, .modal-footer button, .cat-form-row input').each(function() {
			var text = $(this).text();
			 var val = $(this).val();
			$(this).text(text.replace("Enquiry about", "Ερώτηση σχετικά με").replace("Name", "Όνομα").replace("Email", "Ταυτότητα ηλεκτρονικού ταχυδρομείου").replace("Subject", "Θέμα").replace("Phone Number", "Αριθμός κινητού τηλεφώνου").replace("Comment", "Σχόλιο").replace("Close", "Κλείσε").replace("Send", "Στείλετε")); 
			  $(this).val(val.replace("Enquiry about", "Ερώτηση σχετικά με"));
		});
	  }
	  function replaceAgricultureIndustrialEarthMoverEl(){
		  $('select option').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Agriculture", "Γεωργικά").replace("Industrial & Construction", "βιομηχανικά μηχανήματα & μηχανήματα κατασκευών και").replace("Earth Mover", "χωματουργικά μηχανήματα").replace("Bias", "Συμβατικό").replace("Radial", "Ακτινωτό"));  
		});
	  }	 
	  function replaceIndiaTextEl(){
		  $('.designed-india-sec span').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Designed for India", "Σχεδιασμένο για την Ινδία")); 
		});
	  }
	  function replaceNewsMediaEl(){
		  $('div.title-h1').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("News & Media", "Ειδήσεις & Πολυμέσα")); 
		});
	  }      
      function replaceTableHeadEl(){
		  $('.warrenty-section table tr th').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Size", "Μέγεθος").replace("Rim", "Ζάντα").replace("Load Carrying Capacity", "Ικανότητα μεταφοράς φορτίου").replace("Max.Load", "Μέγιστο φορτίο").replace("Loaded Radius", " Φορτωμένη ακτίνα").replace("Static", "Στατικός").replace("Load Radius", " Φόρτωση ακτίνας").replace("Unloaded Dimension", "Διάσταση χωρίς φόρτωση").replace("Unloaded Inflated Dimension", "Μη φορτωμένη διογκωμένη διάσταση").replace("Load Radius", "Φόρτωση ακτίνας").replace("Rolling", "Κυλιομένος").replace("Circumference"," Περιφέρεια").replace("LI SI Or PR", "LI SI ή PR").replace("Load Index/Speed Symbol", "Φόρτωση ευρετηρίου / σύμβολο ταχύτητας").replace("Load Index", "Φόρτωση ευρετηρίου ").replace("Inflation", "Πληθωρισμός").replace("Pressure", " Πίεση").replace("Recommended Load", "Προτεινόμενο φορτίο").replace("Recommended load", "Προτεινόμενο φορτίο").replace("Recommend load", "Προτεινόμενο φορτίο").replace("Speed (kmph)", "Ταχύτητα (kmph)").replace("Speed (mph)", "Ταχύτητα (mph)").replace("Field operation", "Λειτουργία εδάφους").replace("High torque", "Υψηλή ροπή").replace("Low torque", "Χαμηλή ροπή").replace("Road operation not high and sustained torque", "Οδική λειτουργία, όχι υψηλή και συνεχής ροπή").replace("PR Symbols", "Σύμβολα PR").replace("Mixed application", "Μικτή εφαρμογή").replace("Mixed Application", "Μικτή εφαρμογή").replace("Drive Wheel", "Τροχός κίνησης").replace("Free Wheel", "Δωρεάν τροχός")); 
		});
	  }
	  function replaceBreadcrumbEl(){
		  $('span.rename-permalink a').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Home", "Αρχική σελίδα").replace("Product", "Προϊόντα").replace("Agriculture", "Γεωργικά").replace("Industrial & Construction", "βιομηχανικά μηχανήματα & μηχανήματα κατασκευών και").replace("Earth Mover", "χωματουργικά μηχανήματα"));  
		});
	  }	
	function replaceSitemapEl(){
		  $('.legal-sec h3, .sitempa-txt').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("About Us", "Ποιοι είμαστε").replace("Products", "Γεωργία").replace("Resources", "Πόροι").replace("News & Media", "Ειδήσεις & Πολυμέσα").replace("Machine", "μηχάνημα").replace("Application", "Εφαρμογή").replace("TRA Code", "Κωδικός TRA").replace("Design", "Σχέδιο").replace("Sitemap", "Χάρτης ιστοτόπου"));  
		});
	  }	
	  function replaceGalTextEl(){
		  $('.gal-text').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Images", "Εικόνες").replace("Videos", "Βίντεο"));  
		});
	  }		
	  
	  
// 	Polish
	if(sitelang=='pl-PL'){
		 replaceAgricultureIndustrialEarthMoverPl();
		 replaceIndiaTextPl();
		 replaceNewsMediaPl();
         replaceTableHeadPl();
		 replacePopupTextPl();
		 replaceBreadcrumbPl();
		 replaceSitemapPl();		 
		 replaceGalTextPl();		 
	  }  
	  
	  function replacePopupTextPl(){
		  $('.modal-header h2, .modal-body .cat-form-row label, .modal-footer button, .cat-form-row input').each(function() {
			var text = $(this).text();
			 var val = $(this).val();
			$(this).text(text.replace("Enquiry about", "Zapytanie dot").replace("Name", "Imię i nazwisko").replace("Email", "ID e-mail").replace("Subject", "Przedmiot").replace("Phone Number", "Numer telefonu komórkowego").replace("Comment", "Komentarz").replace("Close", "Blisko").replace("Send", "Wysłać")); 
			  $(this).val(val.replace("Enquiry about", "Zapytanie dot"));
		});
	  }
	  function replaceAgricultureIndustrialEarthMoverPl(){
		  $('select option').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Agriculture", "Rolnictwo").replace("Industrial & Construction", "Przemysł i budownictwo").replace("Earth Mover", "Roboty ziemne").replace("Bias", "ukośna").replace("Radial", "radialna"));  
		});
	  }	 
	  function replaceIndiaTextPl(){
		  $('.designed-india-sec span').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Designed for India", "Zaprojektowane dla Indii")); 
		});
	  }
	  function replaceNewsMediaPl(){
		  $('div.title-h1').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("News & Media", "Aktualności i media")); 
		});
	  }      
      function replaceTableHeadPl(){
		  $('.warrenty-section table tr th').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Size", "Rozmiar").replace("Rim", "Obręcz").replace("Load Carrying Capacity", "Nośność ładunku").replace("Max.Load", "Max. Obciążenie").replace("Loaded Radius", " Wczytany promień").replace("Static", "Statyczny").replace("Load Radius", " Wczytany promień").replace("Unloaded Dimension", "Wymiar bez obciążenia").replace("Unloaded Inflated Dimension", "Rozładowany nadmuchany wymiar").replace("Load Radius", "Wczytany promień").replace("Rolling", "Walcowanie").replace("Circumference"," Obwód").replace("LI SI Or PR", "LI SI lub PR").replace("Load Index/Speed Symbol", "Indeks obciążenia / symbol prędkości").replace("Load Index", "Indeks obciążenia ").replace("Inflation", "Inflacja").replace("Pressure", " Nacisk").replace("Recommended Load", "Zalecane obciążenie").replace("Recommended load", "Zalecane obciążenie").replace("Recommend load", "Zalecane obciążenie").replace("Speed (kmph)", "Sprędkość (km/h)").replace("Speed (mph)", "Sprędkość (m/h)").replace("Field operation", "Ekploatacja w polu").replace("High torque", "Wysoki moment obrotowy").replace("Low torque", "Niski moment obrotowy").replace("Road operation not high and sustained torque", "Eksploatacja na drodze, niewysoki i zrównoważony moment obrotowy").replace("PR Symbols", "Symbole PR").replace("Mixed Application", "Aplikacja mieszana").replace("Mixed application", "Aplikacja mieszana").replace("Drive Wheel", "Kierownica").replace("Free Wheel", "Wolne koło")); 
		});
	  }
	  function replaceBreadcrumbPl(){
		  $('span.rename-permalink a').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Home", "Strona główna").replace("Product", "Produkty").replace("Agriculture", "Rolnictwo").replace("Industrial & Construction", "Przemysł i budownictwo").replace("Earth Mover", "Roboty ziemne"));  
		});
	  }	
	function replaceSitemapPl(){
		  $('.legal-sec h3, .sitempa-txt').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("About Us", "O nas").replace("Products", "Produkty").replace("Resources", "Zasoby").replace("News & Media", "Aktualności i media").replace("Machine", "Maszyna").replace("Application", "Zastosowanie").replace("TRA Code", "Kod TRA").replace("Design", "Projekt").replace("Sitemap", "Mapa witryny"));  
		});
	  }	
	  function replaceGalTextPl(){
		  $('.gal-text').each(function() {
			var text = $(this).text();
			$(this).text(text.replace("Images", "Zdjęcia").replace("Videos", "Filmy"));  
		});
	  }
	
	
    $('.sale-and-marketing-button').change(function(){
      if ( $(this).is(':checked') ) {
        $( ".sales-and-marketing-form" ).show(); 
        $( ".procurement-form, .other-endquiry-form" ).hide();
      }
    });
    $('.procurement-button').change(function(){
      if ( $(this).is(':checked') ) {
        $( ".procurement-form" ).show(); 
        $( ".sales-and-marketing-form, .other-endquiry-form" ).hide();
      }
    });
  
    $('.other-enquiry-button').change(function(){
      if ( $(this).is(':checked') ) {
        $( ".other-endquiry-form" ).show(); 
        $( ".procurement-form, .sales-and-marketing-form" ).hide();
      }
    });
   
    $('.size-woocommerce_thumbnail').addClass('h-225px w-auto max-height-300 object-fit-cover shadow-dark-red-right');
    console.log(window.location);
   
   $('.domestic-tab').click(function(){
     $('.warranty-international').hide();
     $('.international-tag').hide();
     $('.warranty-domestic').show();
     $('.domestic-tag').show();
     $('.domestic-tab, .international-tab').removeClass('active');
     $(this).addClass('active');
   });
   $('.international-tab').click(function(){
    $('.warranty-domestic').hide();
    $('.domestic-tag').hide();
    $('.warranty-international').show(); 
    $('.international-tag').show();  
    $('.domestic-tab, .international-tab').removeClass('active');
     $(this).addClass('active'); 
  });
    if($('#locations-top .dropdown-item').hasClass('.active')){
      $('#locations-top .dropdown-item').parent().prev().addClass('active');
    }
    $(".custom-file-input").on("change", function() {
      var fileName = $(this).val().split("\\").pop();
      $(this).parent().next().addClass("selected").html(fileName);
    });
    var homeSlider = new Swiper('.home-swiper-container', {
      slidesPerView: 1,
      grabCursor: true,
      speed: 1200,
      spaceBetween:0,
      loop: true,
      loopFillGroupWithBlank: false,      
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      }, 
      navigation: {
        nextEl: '.icon-right-arrow',
        prevEl: '.icon-left-arrow',
      },     
      pagination: {
        el: '.swiper-pagination',
        clickable: true,       
      },
      breakpoints: {
        240: {
          spaceBetween:0,
        },
        768: {
          spaceBetween:0,
        }
      },    
    });
    // home page tyre selector form start
    $('form#select-your-tyres-form').submit(function (e) {
      e.preventDefault();
      var selpattern = $('#tyre-pattern').val();
        var selLink = $('#pattern-name option').filter(function() {
            return this.value == selpattern;
        }).attr('data-link');
      var selectedPattern = selLink ? selLink : 'No Match';
      if(selpattern != 'Pattern'){
        location.href=selectedPattern;
      }
      var selectSize= $("#tyre-size").val();
      if($(`#pattern-name .select-products-div table tr:contains(`+ selectSize +`)`).length){
        $(`#pattern-name .select-products-div table tr`).parent().parent().prev().remove();
        // $(`.select-products-div table tr:contains(`+ selectSize +`)`).parent().parent().prev().prev().addClass('selected-pattern-lists');

      }
    });
    $('#tyre-pattern').on('change", "input', function(){
      var options = $('datalist')[0].options;
      for (var i=0;i<options.length;i++){
         if (options[i].value == $(this).val()) 
           {alert($(this).val());break;}
      }
  });
    // home page tyre selector form end
    $('.expert-form .checkbox-693 .wpcf7-checkbox').click(function() {
      if($(this).find('input[type="checkbox"]').is(":checked")) {
        $(this).removeClass('down-arrow');
        $(this).find('.wpcf7-list-item').removeClass('hide');
      } else if($(this).find('input[type="checkbox"]').is(":not(:checked)")) {
        $(this).toggleClass('down-arrow');
        $(this).find('.wpcf7-list-item').toggleClass('hide');
      }
      });
     
      $(document).mouseup(function(e) 
        {            
            var container = $("#btm-submenu, .form-expert .country_auto, .select2-search__field");
            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
                container.collapse('hide');
            }
        }); 
        
$('.country_auto').on("select2:select", function(e) { 
  var container = $("#expert");
  if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.collapse('hide');
    }
});
        $('.close-form').click(function(){
          var container = $("#expert");
          container.collapse('hide');
        });
        $('.enquiry-form .wpcf7-form .wpcf7-submit').click(function(){
          document.addEventListener('wpcf7mailsent', function(event) {
            $('.enquiry-form .wpcf7-form .success-message-form').show();
            $('.wpcf7-response-output, .form-contact-us').hide();
          }, false);
        });
        $('#expert .wpcf7-form .wpcf7-submit').click(function(){
          document.addEventListener('wpcf7mailsent', function(event) {
            $('#expert .wpcf7-form .success-message-form').show();
            $('.expert-form h5').hide();
          }, false);
        });
        $('.join-us-sec .wpcf7-form .wpcf7-submit').click(function(){
          document.addEventListener('wpcf7mailsent', function(event) {
            $('.join-us-sec .wpcf7-form .success-message-form').show();
            $('.join-us-sec .form-career-contact, .join-us-sec h4').hide();
          }, false);
        });
        $('.close-form-success').click(function(){
          location.reload();
        });
        var newsMediaSwiper = new Swiper('.news-media-swiper-container',{
          slidesPerView: 4,
          spaceBetween: 30,
          navigation: {
            nextEl: '.icon-next-arrow',
            prevEl: '.icon-prev-arrow',
          },
          breakpoints: {
            240: {
              slidesPerView:1,
              spaceBetween:10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween:30,
            },
            1024: {
              slidesPerView:3,
              spaceBetween:30,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween:30, 
            },
          },
        });
        var swiper = new Swiper('.swiper-container', {
          navigation: {
            nextEl: '.icon-next-arrow',
            prevEl: '.icon-prev-arrow',
          },
        });
        var galleryImage = new Swiper('.image-swiper-container', {
          navigation: {
            nextEl: '.image-next',
            prevEl: '.image-prev',
          },
        });
        var galleryVideo = new Swiper('.video-swiper-container', {
          navigation: {
            nextEl: '.video-next',
            prevEl: '.video-prev',
          },
        });
        
        var relatedProd = new Swiper('.related-product-swiper',{
          grabCursor: true,
          speed: 1200,
          spaceBetween:30,
          loop: true,
          loopFillGroupWithBlank: false,      
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          }, 
          navigation: {
            nextEl: '.icon-right-arrow',
            prevEl: '.icon-left-arrow',
          },     
          pagination: {
            el: '.swiper-pagination',
            clickable: true,       
          },
          breakpoints: {
            240: {
              slidesPerView:1,
              spaceBetween:30,
            },
            768: {
              slidesPerView:2,
              spaceBetween:30,
            },
            1024: {
              slidesPerView:2,
              spaceBetween:30,
            },
            1380: {
              slidesPerView:3,
              spaceBetween:30,
            },
          },    
        });
        if($(".slider .slide").length == 1) {
          $('.swiper-wrapper').addClass( "disabled" );
          $('.swiper-pagination').addClass( "disabled" );
      }
        $('form#select-your-tyres-form').submit(function (e) {
          e.preventDefault();
          var selectedPattern = $('#tyre-pattern option:selected');
          if(selectedPattern.text()!='Pattern'){
          location.href=selectedPattern.attr('data-link');
          }
        });     
     
$('.reset-forms').click(function(){
  $('#tyre-selector-form-pge select').val($('#tyre-selector-form-pge select option:first-child').val()).trigger('change');  
});

$('#select-your-tyres-form select, .tyre-search-forms-ajax select, select.wpcf7-select[name=country_auto-777], #career_category, select[name=menu-702], select#tyre-design, select#tyre-segment').select2();   
  });
  function init() {
    $('.select-sizes').focusin(function(){
      $('.select-sizes').val('');
    });
  }
    $(document).ready(init);
	function rename_link(){
	 const firstPath = window.location.pathname.split('/')[0][1];
		console.log( firstPath);
      var linkClick = $('.rename-permalink a').attr('href');
      if(linkClick.indexOf(home_url+'/products')){        
        var newLinks = $('.rename-permalink a').parent().next().next().find('a').attr('href');
       $('.rename-permalink a').attr('href',firstPath);
      }
	}
	 $(document).ready(rename_link);
  $(window).on('load', function () {
    $('.card-lists a img, div img').each(function(){
      var imgSrc = $(this).attr('src');
      if(imgSrc == 'https://ascensotyres.com/wp-content/uploads/2020/10/Vector-Smart-Object-5-e1604395444276.png' || imgSrc == 'https://ascensotyres.com/wp-content/uploads/2020/10/Group-20.png' || imgSrc == 'https://ascensotyres.com/wp-content/uploads/2020/10/Group-18.png' || imgSrc == 'https://ascensotyres.com/wp-content/uploads/2020/10/Group-24.png' || imgSrc == 'https://ascensotyres.com/wp-content/uploads/2020/10/Group-23.png'){
        $(this).removeClass('h-25px');
      }
      if(imgSrc == 'https://ascensotyres.com/wp-content/uploads/2020/10/IconsAndDropdown1.png' || imgSrc == 'https://ascensotyres.com/wp-content/uploads/2020/10/thankyou_0000_TipperTrcuk-Icon.png'){
        $(this).removeClass('h-25px').addClass('h-35px');
      }
    }); 
    // load
    $('.searchfilterclick').click(function(){
      $('.card-lists a img, div img').each(function(){
        var imgSrc = $(this).attr('src');
        if(imgSrc == 'https://ascensotyres.com/wp-content/uploads/2020/10/Vector-Smart-Object-5-e1604395444276.png' || imgSrc == 'https://ascensotyres.com/wp-content/uploads/2020/10/Group-20.png' || imgSrc == 'https://ascensotyres.com/wp-content/uploads/2020/10/Group-18.png' || imgSrc == 'https://ascensotyres.com/wp-content/uploads/2020/10/Group-24.png' || imgSrc == 'https://ascensotyres.com/wp-content/uploads/2020/10/Group-23.png'){
          $(this).removeClass('h-25px');
        }
        if(imgSrc == 'https://ascensotyres.com/wp-content/uploads/2020/10/IconsAndDropdown1.png' || imgSrc == 'https://ascensotyres.com/wp-content/uploads/2020/10/thankyou_0000_TipperTrcuk-Icon.png'){
          $(this).removeClass('h-25px').addClass('h-35px');
        }
      }); 
    });
    $('.bannerbtm-submenu').css('width', $('.banner-title').innerWidth());
    
    
    
  });
  $(window).on('resize', function () {
    // resize
  });
	
	function set_equal_hight(class_id){
		var highestProduct = 0;
		if(class_id != ""){
			jQuery(class_id).each(function(){
				if(jQuery(this).height() > highestProduct){
					highestProduct = jQuery(this).height();
				}
			});
			jQuery(class_id).height(highestProduct);
		}	
	}

	jQuery(document).ready(function(){
		set_equal_hight(".product_outer .pro_title_height");
	});

})(jQuery); 