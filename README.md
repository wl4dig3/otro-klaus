#  Introduccion
Este proyecto está basado en Vue.js y Bootstrap v-4.5 como requisito para la aprobación de la carrera  Desarrollo FrontEnd, Generación 2 en la Academia Desafio Latam.  Abril - Diciembre 2020
Se trata de una sencilla aplicacion la cual puede renderizarse en dispositivos moviles o en pantallas más grandes gracias a Bootstrap y sus sistema de grillas y mediaqueries.

El Deploy fué realizado con Hosting de Firebase.

Para poder descargar e instalar el proyecto es necesario que se tenga instalado Node.js.

##Primeros pasos:
Utilizar la linea de comando en la terminal para descargar las dependencias:
$yarn install 
### Para compilar en modo de desarrollo:
$yarn serve
Se levantara en un servidor local por el  puerto 8080
### Para compilar en modo de producción:
$yarn build
Se creará una carpeta /dist donde se almacenarán archivos estáticos
### Para el deploy
Desde la terminal del visual studio code:
- Ejecutar las siguientes  lineas de comando: 
1.  $npm install -g firebase-tools
2.  $firebase login (para asegurar que hayas iniciado sesión con la misma cuenta gmail que fue utilizado en firebase).
3. $firebase init
Se hará una serie de preguntas para setear el proyecto.
4. Configuración del hosting:
4.1  Escribir *dist* como directorio a usar pra compilar los archivos estáticos.
4.2 Se hará una pregunta si desea sobrescribir dist/index.html, seleccionar: No.
5. $firebase deploy

A diafrutar del proyecto en la web

https://atentica-desafio.web.app/


###Agradecimiento

Mi más sincero agradecimiento al profesor  Brian , al ayudante Gonzalo Fleming (ahora profesor) por su valiosa ayuda en compartir su conocimiento para obtener una pincelada de esta maravillosa carrera, apenas es el comienzo. Igualmente a mis compañeros de estudio quienes son de gran apoyo en compartir dudas e infinidad de material para estudiar.
