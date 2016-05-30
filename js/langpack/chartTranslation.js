function label2update(){
	setTimeout(function(){
		name=langCountryName(getCookie("ISO"));

        d3.selectAll("#selectedCou")
        .text(name);
        
        
        d3.selectAll("#couToUpdate")
        .text(name);

        d3.selectAll("#donutMen")
        .text(langGender("Men"));

        d3.selectAll("#donutWomen")
        .text(langGender("Women"));


        var YearCount=yearParallelCountCouMemory.filter(function(d){return d.country==getCookie("ISO")});


        parallelYearChart.selectAll("#nbrUsers1")
            .text(langYearParallel(YearCount[0][2011])); 

        parallelYearChart.selectAll("#nbrUsers2")
            .text(langYearParallel(YearCount[0][2012])); 

        parallelYearChart.selectAll("#nbrUsers3")
            .text(langYearParallel(YearCount[0][2013])); 

        parallelYearChart.selectAll("#nbrUsers4")
            .text(langYearParallel(YearCount[0][2014]));             

        parallelYearChart.selectAll("#nbrUsers5")
            .text(langYearParallel(YearCount[0][2015]));  

        parallelYearChart.selectAll("#nbrUsers6")
            .text(langYearParallel(YearCount[0][2016])); 

        spiderChart(getCookie("ISO"),getCountryName(getCookie("ISO")))
    },150);
}


function langGender(gender){
	if(getCookie("langCookie")=="en"){
		if (gender=="Men")
			return"Men";
		if (gender=="Women")
			return"Women";

	}
	else if (getCookie("langCookie")=="fr"){
		if (gender=="Men")
			return"Hommes";
		if (gender=="Women")
			return"Femmes";


	}
	else if (getCookie("langCookie")=="es"){
		if (gender=="Men")
			return"Hombres";
		if (gender=="Women")
			return"Mujeres";


	}
	else if (getCookie("langCookie")=="de"){
		if (gender=="Men")
			return"Männer";
		if (gender=="Women")
			return"Frauen";
	}

}

function langYearParallel(nbrUsers){
	var translation;
	if(getCookie("langCookie")=="en"){
		translation= " users";
	}
	else if (getCookie("langCookie")=="fr"){
		translation= " utilisateurs";
	}
	else if (getCookie("langCookie")=="es"){
		translation= " usarios";
	}
	else if (getCookie("langCookie")=="de"){
		translation= " Benutzer";
	}
	return nbrUsers + translation;
}


function langTopicName(topic){
	if(getCookie("langCookie")=="en"){

              if(topic=="Housing"){return"Housing";}
              if(topic=="Income"){return"Income";}
              if(topic=="Jobs"){return"Jobs";}
              if(topic=="Community"){return"Community";}
              if(topic=="Education"){return"Education";}
              if(topic=="Environment"){return"Environment";}
              if(topic=="CivicEngagement"){return"Civic Engagement";}
              if(topic=="Health"){return"Health";}
              if(topic=="LifeSatisfaction"){return"Life Satisfaction";}
              if(topic=="Safety"){return"Safety";}
              if(topic=="WorkLifeBalance"){return"Work-Life Balance";}
	}
	else if (getCookie("langCookie")=="fr"){

              if(topic=="Housing"){return"Logement";}
              if(topic=="Income"){return"Revenu";}
              if(topic=="Jobs"){return"Jobs";}
              if(topic=="Community"){return"Emploi";}
              if(topic=="Education"){return"Éducation";}
              if(topic=="Environment"){return"Environnement";}
              if(topic=="CivicEngagement"){return"Engagement civique";}
              if(topic=="Health"){return"Santé";}
              if(topic=="LifeSatisfaction"){return"Satisfaction";}
              if(topic=="Safety"){return"Sécurité";}
              if(topic=="WorkLifeBalance"){return"Équilibre travail-vie";}
	}
	else if (getCookie("langCookie")=="es"){

              if(topic=="Housing"){return"Vivienda";}
              if(topic=="Income"){return"Ingresos";}
              if(topic=="Jobs"){return"Empleo";}
              if(topic=="Community"){return"Comunidad";}
              if(topic=="Education"){return"Educación";}
              if(topic=="Environment"){return"Medio ambiente";}
              if(topic=="CivicEngagement"){return"Compromiso cívico";}
              if(topic=="Health"){return"Salud";}
              if(topic=="LifeSatisfaction"){return"Satisfacción";}
              if(topic=="Safety"){return"Seguridad";}
              if(topic=="WorkLifeBalance"){return"Balance vida-trabajo";}
	}
	else if (getCookie("langCookie")=="de"){

              if(topic=="Housing"){return"Wohnverhältnisse";}
              if(topic=="Income"){return"Einkomment";}
              if(topic=="Jobs"){return"Beschäftigung";}
              if(topic=="Community"){return"Gemeinsinn";}
              if(topic=="Education"){return"Bildung";}
              if(topic=="Environment"){return"Umwelt";}
              if(topic=="CivicEngagement"){return"Zivilengagement";}
              if(topic=="Health"){return"Gesundheit";}
              if(topic=="LifeSatisfaction"){return"Lebenszufriedenheit";}
              if(topic=="Safety"){return"Sicherheit";}
              if(topic=="WorkLifeBalance"){return"Work-Life Balance";}
	}

}

function langCountryName(ISOcode){
	var translatedCountryName;

	if(getCookie("langCookie")=="en"){
		codeIsoMemory.forEach(function(d) {
    		if(d.ISO == ISOcode ){
      			translatedCountryName= d.country;
    		}   
		})
	}
	else if (getCookie("langCookie")=="fr"){
		codeIsoMemory.forEach(function(d) {
    		if(d.ISO == ISOcode ){
      			translatedCountryName= d.country_fr;
    		}   
		})
	}
	else if (getCookie("langCookie")=="es"){
		codeIsoMemory.forEach(function(d) {
    		if(d.ISO == ISOcode ){
      			translatedCountryName= d.country_es;
    		}   
		})
	}
	else if (getCookie("langCookie")=="de"){
		codeIsoMemory.forEach(function(d) {
    		if(d.ISO == ISOcode ){
      			translatedCountryName= d.country_de;
    		}   
		})
	}
	return translatedCountryName;
}

function getCountryName(ISOcode){
	codeIsoMemory.forEach(function(d) {
    		if(d.ISO == ISOcode ){
      			translatedCountryName= d.country;
    		}   
		})
}