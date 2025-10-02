EXPLICACION DEL CODIGO:


En primer lugar partimos desde el App.tsx donde pongo en una constate lo que sera el texto del parrafo grande
y tambien un SetFound, palabra y setBuscar, estos valores estaran como nulos o falsos debido a que en la primera renderizacion del programa deberan tener ese valor.

Luego abro un return que tendra el codigo "html" partiendo desde el textArea con valores predefinidos para su anchura y largura, el input para la palabra, un boton para la busqueda y debajo de esta para obtener los resultados.
AQUI ME COMPLIQUE UN POCO LA VERDAD, porque no me di cuenta que estaba enviando los datos con "e" desde la posicion y busqueda. entonces puse la validacion que cuando boton sea presionado se reciban los datos de esos dos componentes

Para esta parte debo de aclarar un poco de la manera en que envio datos con el prop, porque ya manejo medianamente el Vue.js y me acostumbre a una syntaxis. Tambien que no maneje el componente respuesta porque al hacerlo rapido se me fue.

Para la busqueda abro los props recibiendo el texto y la palabra y el OnFound, en la constante donde realizo el proceso, empiezo a separa las palabras del parrafo para evitar problemas y los separo con el sort(). Luego solamente empiezo a realizar el proceso de busqueda binaria que ya conocemos, lo cual es dividir a la mitad en varias iteraciones para encontrar la palabra. y esta la almaceno en un let para verificar mas tarde, en caso de encontrar una palabra esta pasa a true y envia una respuesta.

Para la posicion igual abro los props con el texto y la palabra, sin el OnFound porque no necesitamos validar nada en este proceso, en la funcion ya empiezo limitando de los espacios al parrafo y separando las palabras y para la busqueda. Esto para darle uso a la funcion "map" porque recorrera todas las palabras y la compara con la palabra, luego en la respuesta mandamos la posicion.


Para el css opte por algo demasiado sencilo por la prisa, por lo que solamente se enfoca en el margen, color de letra, fondo, tamanio y posicion.