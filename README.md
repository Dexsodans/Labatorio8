EXPLICACION DEL CODIGO:


Se opto por utilizar la API de Rick y Morty, teniendo en mente que voy a mostrar a todos los personajes de la serie y separarlas por pagina, pero al indagar y ver la documentacion de la API, vi que ya se seccionaba por pagina en la propia url de la API.
primero configure el API_URL del sketchfabService.tsx y en los parametros solamente lo hago por el query y un count de 20 personajes, no pongo un type porque la propia API lo parametrizaba con las paginas
entonces solamente comente esa parte del codigo original

Para los datos que hiba a recibir por el item, decidi sacar de la API el id,name,status,species,image y el episodio(posteriormente me di cuenta que esta solo era un URL a otra paginacion por lo que no ignore)

En el modelo vista no hago una parametrizacion, ya que quiero sacar todos los personajes de la pagina que por si ya son pocos, entonces lo dejo vacio 
const data = await fetchModels("");
, de todas maneras se podria poner algo como "rick" para filtrar a todos los ricks jsjs
En el return solo empiezo a separar los datos por el <div>, poniendole un toUpperCase() para darle mayusculas al nombre del personaje, y un <strong> para darle negrilla a sus caracteristicas.
En el Css solo le doy un fondo negro, lo separo el cards cada imagen y sus datos dandole colores, margenes y ya



