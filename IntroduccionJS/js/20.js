// Métodos de propiedad
const reproductor = {
    reprodocir : function(id) {
        console.log(`Reproduciendo Canción con el ID: ${id}`);
    },
    pausar: function() {
        console.log('Pausando...');
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la Playlist: ${nombre}`);
    }, 
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la Playlist: ${nombre}`)
    },
}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la cancion: ${id} `);
}

reproductor.reprodocir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Música para aprender a programar.');
reproductor.reproducirPlaylist('Música para aprender a programar.');