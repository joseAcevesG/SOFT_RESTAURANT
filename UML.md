<!-- cspell: disable -->

# UML

```mermaid
classDiagram
    class Establecimiento{
        -nombre: string
        -direccion: string
        -mesas: Mesa[]
        -empleados: Empleado[]
        -menu: Menu
        -cocina: Cocina
        +agregar_mesa(): None
        +eliminar_mesa(mesa: Mesa): None
        +agregar_empleado(empleado: Empleado) : None
        +eliminar_empleado(empleado: Empleado) : None
    }

    class Cocina{
        -cocineros: Cocinero[]
        -pedidos_entrada: queue:Pedido
        -pedidos_salida: list: Pedido
        +agregar_cocinero(cocinero: Cocinero): None
        +eliminar_cocinero(cocinero: Cocinero): None
        +agregar_pedido(pedido: Pedido): None
        +tomar_pedido(pedido: Pedido, cocinero: Cocinero): None
        +servir_pedido(pedido: Pedido): None
    }

    class Empleado{
        #nombre: string
        #apellido: string
        #edad: int
        #estatus: string
        #tag: string
    }

    class Cocinero{
        #pedidos: Pedido[]
        #pedidos_salida: list:Pedido
        +preara_pedido(pedido: Pedido): None
    }

    class Pedido{
        -mesa: Mesa
        -estado: string
        -articulos: Articulo[]
        +agregar_articulo(articulo: Articulo): None
        +eliminar_articulo(articulo: Articulo): None
    }

    class Menu{
        -articulos: Articulo[]
        +agregar_articulo(articulo: Articulo): None
        +eliminar_articulo(articulo: Articulo): None
    }

    class Mesa{
        -numero: int
        -capacidad: int
        -mesero: Mesero
        -pedidos: dict:[string, Pedido[]]
        +asignar_mesero(mesero: Mesero): None
        +tomar_pedido(identificador: string, articulos: Articulo[]): None
        +cancelar_articulo(identificador: string, articulo: Articulo): None
    }


    class Articulo{
        -nombre: string
        -precio: float
        -ingredientes: string[]
        +preparar(): None
    }

    class Mesero{
        -mesas: Mesa[]
        +asignar_mesa(mesa: Mesa): None
        +tomar_pedido(mesa: Mesa): None
        +servir_pedido(mesa: Mesa, peido: Pedido): None
        +cobrar_pedido(mesa: Mesa, forma: FormaPago): None
    }

    class FormaPago{
        <<enumeration>>
        INDIVIDUAL
        UNICA
    }

    Establecimiento *--Menu
    Establecimiento *--Cocina
    Establecimiento o--Empleado
    Menu o--Articulo
    Pedido o--Articulo
    Mesa *--Pedido
    Establecimiento *--Mesa
    Empleado <|-- Mesero
    Pedido o--Mesa
    Empleado <|-- Cocinero
    Mesero <|.. FormaPago
    Cocina o-- Cocinero
    Mesa o-- Mesero
    Mesero o-- Mesa
    Cocinero o-- Pedido
    Cocina o-- Pedido
```
