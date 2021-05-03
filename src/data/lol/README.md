
# PROYECTO DATA LOVERS.
## League of Legends.

El Proyecto Data Lovers en el que trabajamos, es una data que contiene información sobre los personajes del juego "League of Legends"(Lol).Esta data se manipula de forma dinámica para que los usuarios puedan acceder por medio de los tipos y nombre del personaje, con el fin de observar su historia, apariencia y otros.
Nuestro proceso de diseño se realizó una vez concluidas las siguientes herramientas:
* Lluvia de ideas entre las creadoras, 
* Preguntas a realizar a los usuarios en las entrevistas, 
* Temas de diseño, colores a usar, etc.
* Entrevistas de usuario, jugadores y no jugadores de LoL

## Historias de Usuario

Tenemos las siguientes historias de usuario (5):

![Historias de Usuario](src/images/hist_us.png)

# PROCESO UX
Elaboración de Prototipo: Tomando en cuenta la lluvia de ideas, entre las 3 comenzamos a hacer prototipos en papel, pensando en el usuario definido, debe ser una interfaz fácil de comprender, nada engorrosa, ya que muchos de los usuarios que no tienen mayor experiencia en equipos informáticos.
	
![Prototipo en Papel](src/images/prot_baja_todas.png)

### AL CONSENSUAR LA MEJOR OPCIÓN, EL PROTOTIPO FINAL (EN PAPEL) ES EL SIGUIENTE:

![Prototipo en Papel](src/images/prot_unido.png)

### Página 1:
Imagen del mapa de fondo con el texto BIENVENIDO INVOCADOR
Botón MENÚ con los ítems: 
Instrucciones del Juego donde solo se colocara un link, A jugar donde igual se colocara un Link.
Campeones - League of Legends
Crear cuenta en League of Legends | Latinoamérica Norte
Input BUSCAR: donde podrán buscar directo por nombre
Menú desplegable TIPOS DE CAMPEÓN: se abrirá un menú con los 6 tipos de campeón 
* ASESINOS
* LUCHADORES
* MAGOS
* TIRADORES
* SOPORTES
* TANQUES
Menú desplegable POR ORDEN ALFABÉTICO.
Al darle click a alguna opción se pasará a la segunda página donde se desplegará la opción seleccionada.
En la segunda página se podrá elegir uno de los campeones pre seleccionados, la idea es que se agrande la imagen en primer plano con toda la información del campeón y el fondo se vea más opaco o borroso.
	
## Elaboración de Prototipo en Figma: 

Figma nos permite trabajar solo de a pares, por lo que nos turnamos para trabajar 1 hora dos de nosotras cada vez para asegurarnos de que las 3 participemos en todos los procesos.
El proceso de creación en Figma fue el siguiente:
		
![Prototipo Inicial)](src/images/prot_alta_prueba.png)

### Nuestro prototipo final en Figma es el siguiente:

![Prototipo Final)](src/images/prot_final.png)

## Iterar con el Usuario: 
Una vez listo el prototipo, se enviaron a los usuarios y se realizo la siguiente encuesta para iterar:
* ¿Qué te parece el diseño de la página principal? 
* ¿Qué le agregarías o le eliminarías? 
Gusto el diseño y colores utilizados, realizaron sugerencias como: disminuir el tamaño del título (realizado), opacar un poco el fondo porque se confundía con los iconos (realizado), corrección de algunas mayúsculas y negritas (realizado)
¿Qué te parece el diseño y cómo se muestran los campeones y su información? Gusto el diseño, la forma de mostrar la información y la sencillez de la página

# PROCESO FRONT END

Realizamos el siguiente diagrama para ordenar los pasos a seguir en cuanto a la manera de enfrentar al codigo:

1.      Cargar página: (addEventListener) para cargar la página (onload)
    a.      Mostrar fondo
    b.      Mostrar botones
    c.      Mostrar filtros
    d.      Mostrar iconos de los campeones
2.      Click en el botón tipo de campeón
3.      Click en el campeón
4.      Click en la equis para cerrar info del campeón
5.      Usuario escribe en caja de texto y click en la lupa
6.      Click en orden alfabético
    a.      Menu desplegable con opciones A-Z y Z-A
    b.      Mostrar campeones según filtro elegido
7.      Click en Mostrar todo
8.      Click en el link del footer
9.      Traer la data

# Objetivos de Aprendizaje y Conclusión

Cumplimos con nuestro objetivo principal de manipular la data de forma dinámica para proporcionar los datos que escogimos. También cumplimos con objetivos técnicos respecto al código y a la estética del producto. Sin embargo nos faltó darle funcionalidad a la barra de "búsqueda"  realizar los test unitarios y modularizar.
Estamos contentas con el resultado final, consideramos que el proceso de trabajo y colaboración fue positivo en general.
La meta es cumplir la totalidad de los objetivos en el siguiente proyecto.






