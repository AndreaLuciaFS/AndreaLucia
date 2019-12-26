var imagenes=Array("imágenes/Imagen perro adopción.jpg","imágenes/perro feliz adopción.jpg");
	var imagenVisible=0;
 
	function cambiar(img)
	{
		imagenVisible++;
		if(imagenVisible>=imagenes.length)
		{
			imagenVisible=0;
		}
		img.src=imagenes[imagenVisible];
		cargarSiguienteImagen();
	}
 
	function cargarSiguienteImagen()
	{
		if((imagenVisible+1)<imagenes.length)
		{
			console.log(imagenVisible+1);
			var imgTmp=new Image();
			imgTmp.src=imagenes[imagenVisible+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}
