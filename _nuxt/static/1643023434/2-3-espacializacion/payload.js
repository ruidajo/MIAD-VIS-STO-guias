__NUXT_JSONP__("/2-3-espacializacion", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao){return {data:[{page:{slug:"2-3-espacializacion",description:"...",title:"Espacialización",toc:[{id:O,depth:r,text:P},{id:Q,depth:r,text:R},{id:S,depth:r,text:T},{id:U,depth:v,text:V},{id:W,depth:v,text:X},{id:Y,depth:v,text:Z},{id:_,depth:r,text:$},{id:aa,depth:v,text:ab},{id:ac,depth:r,text:ad},{id:ae,depth:r,text:af}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:b,tag:h,props:{className:["material-icons","title-icon"]},children:[{type:a,value:"travel_explore"}]}]},{type:a,value:c},{type:b,tag:s,props:{id:O},children:[{type:b,tag:g,props:{href:"#introducci%C3%B3n",ariaHidden:i,tabIndex:j},children:[{type:b,tag:h,props:{className:[k,l]},children:[]}]},{type:a,value:P}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"En las dos guías anteriores (“Forma y color” y “Escalas”) cubrimos bastante terreno conceptual en las introducciones. Teniendo en cuenta lo aprendido, vamos a espacializar los datos usando la referencia geográfica que tenemos en nuestra base de datos para producir diferentes tipos de mapas y así reconocer posibles narrativas que podemos construir con datos geográficos sobre un mapa."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pueden seguir los siguientes pasos en "},{type:b,tag:e,props:{},children:[{type:a,value:o}]},{type:a,value:" usando como fuente la base de datos de la población del curso. Si deciden utilizar otro software, el proceso es muy parecido."}]},{type:a,value:c},{type:b,tag:s,props:{id:Q},children:[{type:b,tag:g,props:{href:"#paso-1-crear-reporte-y-cargar-los-datos",ariaHidden:i,tabIndex:j},children:[{type:b,tag:h,props:{className:[k,l]},children:[]}]},{type:a,value:R}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Vamos a usar la siguiente base de datos para el siguiente tutorial. En el caso de ustedes, pueden seguir los pasos utilizando la base de datos de la población del curso."}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:"table",props:{},children:[{type:b,tag:"thead",props:{},children:[{type:b,tag:t,props:{},children:[{type:b,tag:ag,props:{},children:[{type:a,value:"Ciudad"}]},{type:b,tag:ag,props:{},children:[{type:a,value:"País"}]}]}]},{type:b,tag:"tbody",props:{},children:[{type:b,tag:t,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:ah}]},{type:b,tag:m,props:{},children:[{type:a,value:B}]}]},{type:b,tag:t,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"Pasto"}]},{type:b,tag:m,props:{},children:[{type:a,value:B}]}]},{type:b,tag:t,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"Londres"}]},{type:b,tag:m,props:{},children:[{type:a,value:"UK"}]}]},{type:b,tag:t,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"Los Ángeles"}]},{type:b,tag:m,props:{},children:[{type:a,value:"USA"}]}]},{type:b,tag:t,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:ah}]},{type:b,tag:m,props:{},children:[{type:a,value:B}]}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:ai},{type:b,tag:e,props:{},children:[{type:a,value:o}]},{type:a,value:" crean un nuevo reporte y suben el CSV usando la opción \"File Upload\". El siguiente video "},{type:b,tag:e,props:{},children:[{type:a,value:"(sin sonido)"}]},{type:a,value:" muestra como hacerlo paso a paso:"}]},{type:a,value:c},{type:b,tag:aj,props:{controls:p,muted:p},children:[{type:a,value:n},{type:b,tag:ak,props:{src:"\u002Fguias\u002Fvysvideos\u002Fvys-cargar-csv-gds.mp4",type:al},children:[]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:w,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:x,props:{},children:[{type:a,value:"Video 1"}]},{type:b,tag:q,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Cargar CSV en Google Data Studio"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:s,props:{id:S},children:[{type:b,tag:g,props:{href:"#paso-2-elegir-tipo-de-mapa",ariaHidden:i,tabIndex:j},children:[{type:b,tag:h,props:{className:[k,l]},children:[]}]},{type:a,value:T}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:ai},{type:b,tag:e,props:{},children:[{type:a,value:o}]},{type:a,value:" tenemos 2 opciones de mapa: “Mapa con burbujas” (Bubble map) y “Mapa por zonas” (Filled map). El tipo de mapa que escogemos depende de lo que queremos contar, es decir, es una decisión creativa alrededor de la estructura de los datos. Por ejemplo:"}]},{type:a,value:c},{type:b,tag:y,props:{id:U},children:[{type:b,tag:g,props:{href:"#historia-con-numero-de-estudiantes-por-ciudad",ariaHidden:i,tabIndex:j},children:[{type:b,tag:h,props:{className:[k,l]},children:[]}]},{type:a,value:V}]},{type:a,value:c},{type:b,tag:u,props:{className:[C]},children:[{type:a,value:n},{type:b,tag:d,props:{},children:[{type:a,value:"La virtualidad durante la pandemia ha sido agotadora y los estudiantes quieren tener algunos encuentros presenciales. En este mapa podemos ver que solamente los estudiantes que viven en Bogotá tienen la posibilidad de encontrarse para tomarse un café y trabajar en su proyecto de manera presencial."}]},{type:b,tag:d,props:{},children:[{type:a,value:c}]}]},{type:a,value:c},{type:b,tag:u,props:{className:[D]},children:[{type:a,value:n},{type:b,tag:E,props:{width:F,height:G,src:"https:\u002F\u002Fdatastudio.google.com\u002Fembed\u002Freporting\u002F5f73d237-b16e-4e8f-bec2-ce9d26bded05\u002Fpage\u002Fp_8gw5qxqirc",frameBorder:H,style:I,allowFullScreen:p},children:[]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:w,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:x,props:{},children:[{type:a,value:"Figura 1"}]},{type:b,tag:q,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Número de estudiantes por ciudad"}]},{type:b,tag:q,props:{},children:[]},{type:a,value:c},{type:b,tag:g,props:{href:z,rel:[J,K,L],target:M},children:[{type:a,value:z}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Lo que quiero narrar en este mapa tiene que ver con el número de estudiantes por ciudad. Hay 2 elementos específicos que necesito revelar en el mapa: Cáda una de las ciudades donde viven los estudiantes y el número de estudiantes ubicados allí. Los globos son útiles para identificar visualmente la ubicación geográfica (posición), diferentes países (color) y la cantidad de estudiantes (escala)."}]},{type:a,value:c},{type:b,tag:y,props:{id:W},children:[{type:b,tag:g,props:{href:"#historia-con-numero-de-estudiantes-por-pa%C3%ADs",ariaHidden:i,tabIndex:j},children:[{type:b,tag:h,props:{className:[k,l]},children:[]}]},{type:a,value:X}]},{type:a,value:c},{type:b,tag:u,props:{className:[C]},children:[{type:a,value:n},{type:b,tag:d,props:{},children:[{type:a,value:"La población de estudiantes del curso Visualización y Storytelling de la Maestría en Inteligencia Analítica de Datos están ubicados en el occidente global, de momento no hay estudiantes en oriente a pesar de ser un programa enteramente virtual."}]},{type:b,tag:d,props:{},children:[{type:a,value:c}]}]},{type:a,value:c},{type:b,tag:u,props:{className:[D]},children:[{type:a,value:n},{type:b,tag:E,props:{width:F,height:G,src:"https:\u002F\u002Fdatastudio.google.com\u002Fembed\u002Freporting\u002F3d652493-3501-4548-a02a-85255ce3672e\u002Fpage\u002FKW7jC",frameBorder:H,style:I,allowFullScreen:p},children:[]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"En esta segunda historia, ya no importa tanto la especificidad de las ciudades sino un panorama más global que nos indique de manera ágil los países donde viven los estudiantes. En este caso, los globos pueden opacar la lectura y sobrecargan de manera innecesaria el mapa. Por esa razón usamos la versión de \"Filled map\" para resaltar los países y la intensidad del color nos muestra la cantidad de estudiantes por región."}]},{type:a,value:c},{type:b,tag:w,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:x,props:{},children:[{type:a,value:am}]},{type:b,tag:q,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Número de estudiantes por país"}]},{type:b,tag:q,props:{},children:[]},{type:a,value:c},{type:b,tag:g,props:{href:z,rel:[J,K,L],target:M},children:[{type:a,value:z}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:y,props:{id:Y},children:[{type:b,tag:g,props:{href:"#historia-con-porcentajes",ariaHidden:i,tabIndex:j},children:[{type:b,tag:h,props:{className:[k,l]},children:[]}]},{type:a,value:Z}]},{type:a,value:c},{type:b,tag:u,props:{className:[C]},children:[{type:a,value:n},{type:b,tag:d,props:{},children:[{type:a,value:"En el curso de Visualización y Storytelling de la Maestría en Inteligencia Analítica de Datos, la mayoría de estudiantes vive en Colombia, un país donde el idioma nativo es el castellano. Los estudiantes que no viven en Colombia se encuentran en países donde el idioma nativo es el inglés."}]},{type:b,tag:d,props:{},children:[{type:a,value:c}]}]},{type:a,value:c},{type:b,tag:u,props:{className:[D]},children:[{type:a,value:n},{type:b,tag:E,props:{width:F,height:G,src:"https:\u002F\u002Fdatastudio.google.com\u002Fembed\u002Freporting\u002F64c41a50-f9a9-4129-9438-05b46a27f98d\u002Fpage\u002Fp_43uq2hsirc",frameBorder:H,style:I,allowFullScreen:p},children:[]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:w,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:x,props:{},children:[{type:a,value:"Figura 3"}]},{type:b,tag:q,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Porcentaje de estudiantes por país"}]},{type:b,tag:q,props:{},children:[]},{type:a,value:c},{type:b,tag:g,props:{href:an,rel:[J,K,L],target:M},children:[{type:a,value:an}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"El mapa por países (Figura 2) que vimos anteriormente nos podría funcionar para contar esta tercera historia: tenemos una vista general por países que nos indica donde viven los estudiantes, pero la métrica (por número de estudiantes) deja de ser descriptiva en esta historia. Podemos mejorar el mísmo mapa cambiando el conteo de estudiantes por país a porcentajes. Al acercarse con el ratón a alguno de los países, yo no tenemos que investigar todo el mapa para saber la relación de ese país con el resto. En el mapa de "},{type:b,tag:e,props:{},children:[{type:a,value:am}]},{type:a,value:" nos dice que Colombia tiene 3 estudiantes. Por si solo, 3 estudiantes en Colombia no me ayuda mucho, pero saber que el 60% de estudiantes vive en Colombia inmediatamente me describe que allí vive la mayoría."}]},{type:a,value:c},{type:b,tag:s,props:{id:_},children:[{type:b,tag:g,props:{href:"#paso-3-definir-m%C3%A9tricas",ariaHidden:i,tabIndex:j},children:[{type:b,tag:h,props:{className:[k,l]},children:[]}]},{type:a,value:$}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Una de las ventajas que tiene "},{type:b,tag:e,props:{},children:[{type:a,value:o}]},{type:a,value:" es que podemos utilizar datos con ubicación geográfica por latitud y longitud, o con texto. En los ejemplos anteriores (y en el base de datos con la que están trabajando), las locaciones están escritas en texto y aún así la aplicación sabe donde ubicar los puntos o rellenar las regiones. Pero para que funcione, debemos indicarle al software cómo interpretar el texto como ubicación geográfica."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Hagamos un paso a paso para construir el mapa de \"Figura 1\", pueden ver el siguiente video que resume los pasos a continuación:"}]},{type:a,value:c},{type:b,tag:aj,props:{controls:p,muted:p},children:[{type:a,value:n},{type:b,tag:ak,props:{src:"\u002Fguias\u002Fvysvideos\u002Fvys-espacializacion-demo-gds.mp4",type:al},children:[]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:y,props:{id:aa},children:[{type:b,tag:g,props:{href:"#paso-a-paso",ariaHidden:i,tabIndex:j},children:[{type:b,tag:h,props:{className:[k,l]},children:[]}]},{type:a,value:ab}]},{type:a,value:c},{type:b,tag:A,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Si aún no han creado un reporte con los datos, ver \"Paso 1\" al inicio de éste tutorial."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Agregar mapa haciendo clic en \"Add Chart\"."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"En este caso voy a elegir \"Bubble map\" en la sección \"Google Maps\"."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Cuando insertan un mapa a "},{type:b,tag:e,props:{},children:[{type:a,value:o}]},{type:a,value:", lo más probable es que les salga el siguiente error:"}]},{type:a,value:c},{type:b,tag:N,props:{src:"\u002Fguias\u002Fvysimgs\u002Fgds-error-mapa.JPG",alt:"Error al cargar mapa en Google Data Studio"},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"No se preocupen que primero debemos definir los campos para que funcione el mapa."}]},{type:a,value:c},{type:b,tag:A,props:{start:4},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"En la sección de la derecha, bajo \"Fields\" seleccionan la opción llamada \"Location\"."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Para este ejemplo, \"Location\" van a ser las ciudades porque estamos haciendo el mapa de burbujas. "},{type:b,tag:e,props:{},children:[{type:a,value:"Si estuviéramos creando los mapas de las figuras 2 y 3, este campo sería \"País\" ya que corresponde a las zonas que queremos rellenar en el mapa."}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Luego hacen clic en el botón para editar el campo que se encuentra justo a la izquierda (resaltado en la siguiente imágen)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:N,props:{src:"\u002Fguias\u002Fvysimgs\u002Fgds-location.JPG",alt:"Campo Location en Google Data Studio"},children:[]},{type:a,value:c},{type:b,tag:A,props:{start:7},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Ir a la sección \"Type\" -\u003E \"Geo\" y seleccionar la opción \"City\". "},{type:b,tag:e,props:{},children:[{type:a,value:"Noten que debemos ser específicos con el tipo de datos, si estuviéramos usando el campo de país, el tipo que definimos en este paso sería \"Country\"."}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:N,props:{src:"\u002Fguias\u002Fvysimgs\u002Fgds-geo-ciudad.JPG",alt:"Campo City en Google Data Studio"},children:[]},{type:a,value:c},{type:b,tag:A,props:{start:8},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"De vuelta en \"Fields\" debemos definir el campo \"Size\" y opcionalmente el de \"Color dimension\", en ambos casos voy a usar el campo \"País\" para definir estos parámetros."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Luego pueden ir a la sección \"Style\" para jugar un poco con los parámetros disponibles y pulir estéticamente su visualización."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:s,props:{id:ac},children:[{type:b,tag:g,props:{href:"#resumen",ariaHidden:i,tabIndex:j},children:[{type:b,tag:h,props:{className:[k,l]},children:[]}]},{type:a,value:ad}]},{type:a,value:c},{type:b,tag:ao,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Los conceptos de forma, color y escala aplican directamente en el momento de espacializar los datos."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Dependiendo de la intención narrativa, debemos elegir el tipo de visualización que hacemos sobre el mapa."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Cada estrategia de visualización tiene ventajas y desventajas, debemos privilegiar nuestra intención narrativa para saber cuál nos apoya retóricamente lo que queremos decir."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:s,props:{id:ae},children:[{type:b,tag:g,props:{href:"#ejercicio",ariaHidden:i,tabIndex:j},children:[{type:b,tag:h,props:{className:[k,l]},children:[]}]},{type:a,value:af}]},{type:a,value:c},{type:b,tag:ao,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Utilizando la base de datos “poblacion-curso.csv” identificar una historia que desean contar sobre la población del curso. Recuerden que la definición de la narrativa es un ejercicio creativo, ¿Qué creen que es valioso contar sobre esta población en particular?"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Según su intención narrativa, crear un mapa utilizando cualquier software de visualización. Puede ser "},{type:b,tag:e,props:{},children:[{type:a,value:o}]},{type:a,value:" o cualquier otro en el que se sientan cómodos. El tipo de visualización debe apoyar su intención narrativa. En el caso de "},{type:b,tag:e,props:{},children:[{type:a,value:o}]},{type:a,value:", no es lo mismo usar “Bubble map” a “Filled map”, esta elección debe ser coherente a lo que quieren contar."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Acompañar el mapa con un texto corto (máximo 1 párrafo) donde resumen lo que quieren contar con el mapa. Pueden usar este texto para abrir preguntas o esbozar conclusiones de lo que vemos en el mapa. (ver los textos en el tutorial para tener una guía de posibles formas en que pueden redactar este texto)"}]},{type:a,value:c}]}]},dir:"\u002F",path:"\u002F2-3-espacializacion",extension:".md",createdAt:"2022-01-24T11:23:10.630Z",updatedAt:"2022-01-24T11:23:10.634Z"}}],fetch:{},mutations:void 0}}("text","element","\n","p","em","li","a","span","true",-1,"icon","icon-link","td","\n  ","Google Data Studio",true,"br",2,"h2","tr","div",3,"blockquote","strong","h3","https:\u002F\u002Fdatastudio.google.com\u002Freporting\u002F5f73d237-b16e-4e8f-bec2-ce9d26bded05","ol","Colombia","historia","iframe-container","iframe",600,400,"0","border:0","nofollow","noopener","noreferrer","_blank","img","introducción","Introducción","paso-1-crear-reporte-y-cargar-los-datos","Paso 1: Crear reporte y cargar los datos","paso-2-elegir-tipo-de-mapa","Paso 2: Elegir tipo de mapa","historia-con-numero-de-estudiantes-por-ciudad","Historia con numero de estudiantes por ciudad:","historia-con-numero-de-estudiantes-por-país","Historia con numero de estudiantes por país:","historia-con-porcentajes","Historia con porcentajes:","paso-3-definir-métricas","Paso 3: Definir métricas","paso-a-paso","Paso a paso","resumen","Resumen","ejercicio","Ejercicio","th","Bogotá","En ","video","source","video\u002Fmp4","Figura 2","https:\u002F\u002Fdatastudio.google.com\u002Freporting\u002F64c41a50-f9a9-4129-9438-05b46a27f98d","ul")));