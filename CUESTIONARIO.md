# Cuestionario

## ¿Qué son los hooks del ciclo de vida en Angular? Explique algunos hooks del ciclo de vida

Los hooks del ciclo de vida son una serie de métodos predefinidos en los componentes de Angular que se ejecutan en diferentes etapas del ciclo de vida de un componente. 
Estos métodos permiten que los desarrolladores de Angular controlen y modifiquen el comportamiento del componente en cada etapa del ciclo de vida.

Los ciclos más comunes, o por lo menos los que yo más utilizo son:

- `ngOnInit`: Este método se ejecuta una vez que el componente ha sido inicializado. Es comúnmente utilizado para inicializar variables y realizar operaciones de configuración.
- `ngOnChanges`: Este método se ejecuta cada vez que se detecta un cambio en las propiedades de entrada (`@Input`) del componente. Es útil para realizar acciones específicas cuando una propiedad cambia.
- `ngAfterViewInit`: Este método se ejecuta después de que la vista del componente ha sido completamente inicializada. 

## ¿Qué es la compilación AOT (Ahead-Of-Time)? ¿Cuáles son sus ventajas? ¿Conoces otra?

La compilación AOT (Ahead-Of-Time) es un proceso que compila la aplicación Angular completa en un paquete de JavaScript optimizado y precompilado que se puede entregar al navegador para su ejecución.

### Ventajas

- Mejora la seguridad de la aplicación
- Detecta errores de forma temprana
- Mejora el rendimiento de la aplicación y reduce el tiempo de carga

## ¿En qué se diferencian los Observables de las Promesas?

La principal diferencia entre una promesa y un observable es cómo se manejan los datos que se devuelven. Si la promesa se resuelve correctamente, el resultado se almacena en la variable `resultado`. Si ocurre algún error, se captura con una cláusula `try-catch`. En el ejemplo del observable, llamamos al método `subscribe` del observable para escuchar los cambios en los datos que devuelve el servicio. Si el servicio emite un valor, se ejecutará la función que se proporciona como primer argumento del método `subscribe`. Si ocurre algún error, se ejecutará la función que se proporciona como segundo argumento. Es importante mencionar que los observables también pueden manejar flujos de datos continuos, mientras que las promesas solo manejan una sola respuesta.

## ¿Qué es ViewEncapsulation y cuántas formas hay de hacerlo en Angular?

`ViewEncapsulation` es una característica de Angular que permite encapsular los estilos de los componentes para evitar que se propaguen a otros componentes o elementos de la página. Esto significa que cada componente puede tener su propio estilo CSS sin afectar a otros componentes.

### Formas de hacer `ViewEncapsulation`

- `Emulated`: Forma predeterminada, los estilos se aplican al componente y no afectan a otros componentes.
- `Native`: Esta opción utiliza las capacidades de encapsulación de estilo nativas del navegador para aislar los estilos de cada componente.
- `None`: Esta opción desactiva completamente la encapsulación de estilos y permite que los estilos de un componente afecten a todos los elementos de la página.

---

# Paquetes usados

- [Bootstrap](https://www.npmjs.com/package/@ng-bootstrap/ng-bootstrap):
- [Material](https://www.npmjs.com/package/@angular/material):
- [CDK](https://www.npmjs.com/package/@angular/cdk):

---

# run ng test para test Jasmine