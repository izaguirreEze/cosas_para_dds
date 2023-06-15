==================================================================

AXIOS Y CONECTAR FRONT CON BACK

Axios proporciona una biblioteca fácil de usar en un paquete pequeño
con una interfaz muy extensible. Con Axios, puedes hacer solicitudes HTTP
desde el navegador o desde node.js, interceptar solicitudes y respuestas,
transformar datos de solicitud y respuesta, cancelar solicitudes y mucho más 1.

Para conectar el frontend con el backend, el frontend puede utilizar Axios para
hacer solicitudes HTTP a los puntos finales de la API del backend y recuperar datos.
Por ejemplo, si el backend tiene un punto final de API para obtener una lista de recursos,
el frontend puede utilizar Axios para hacer una solicitud GET a ese punto final y
recuperar la lista de recursos.

==================================================================


MIDDLEWARE Y ROUTE Y ESO

En el contexto de la página web actual, la frase “La aplicación deberá registrar como middleware
un router con la ruta ‘/api/deudores’” se refiere a que la aplicación backend debe utilizar
un middleware para manejar las solicitudes HTTP que llegan a la ruta ‘/api/deudores’.

Un middleware es un software que se sitúa entre un sistema operativo y las aplicaciones que se
ejecutan en él. Funciona como una capa de traducción oculta para permitir la comunicación y la
administración de datos en aplicaciones distribuidas 1. En el contexto de una aplicación web,
un middleware es una función que tiene acceso al objeto de solicitud (req), al objeto de respuesta
(res) y a la siguiente función de middleware en el ciclo de solicitud/respuesta de la aplicación. 
un middleware puede realizar tareas como verificar si un usuario está autenticado, registrar
solicitudes en un archivo de registro, o manejar errores.

En este caso específico, el middleware debe registrar un router para manejar las solicitudes que
llegan a la ruta ‘/api/deudores’. Un router es un objeto que permite definir múltiples rutas y
sus manejadores en una sola ubicación. Por ejemplo, el router podría definir manejadores para
las solicitudes GET, POST y DELETE a la ruta ‘/api/deudores’.

==================================================================

ENDPOINT !

Un endpoint, o punto final, se refiere a un destino específico para una llamada de API.
En el contexto de una aplicación web, un endpoint es una URL específica que maneja una
solicitud HTTP y devuelve una respuesta. Por ejemplo, en una aplicación que maneja recursos
como usuarios, un endpoint podría ser ‘/api/users’, que maneja solicitudes para obtener,
crear, actualizar o eliminar usuarios.

Cada endpoint está asociado con un método HTTP específico, como GET, POST, PUT o DELETE, que
define la acción que se debe realizar en el recurso. Por ejemplo, una solicitud GET a ‘/api/users’
podría devolver una lista de todos los usuarios, mientras que una solicitud POST a ‘/api/users
podría crear un nuevo usuario.

En resumen, un endpoint es una combinación de una URL y un método HTTP que define una operación
específica en un recurso en una aplicación web.

==================================================================

RELACION ENTRE CLIENTE Y LISTADOCLIENTES

El componente Clientes y el componente ListadoClientes están relacionados en el sentido de que Clientes
importa y utiliza a ListadoClientes para mostrar una lista de clientes.

En el código proporcionado, el componente Clientes define un formulario que permite al usuario buscar
clientes por su nombre y/o apellido. Cuando el formulario es enviado, se hace una solicitud GET a la
API del backend en la ruta ‘/api/clientes’ utilizando Axios, pasando los datos del formulario como
parámetros de consulta. La respuesta de la API se guarda en el estado lista utilizando el hook useState.

Luego, en el JSX del componente Clientes, se verifica si lista tiene un valor y, en caso afirmativo,
se renderiza el componente ListadoClientes, pasándole la lista de clientes como prop. El componente
ListadoClientes recibe esta lista como prop y la utiliza para renderizar una tabla con los datos de
los clientes.

En resumen, el componente Clientes utiliza el componente ListadoClientes para mostrar una lista de
clientes que se obtiene de la API del backend.
