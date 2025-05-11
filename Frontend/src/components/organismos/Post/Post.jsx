import styled from "styled-components"
import { Circle } from "../../atomos/Circle"
import { PostUser } from "./PostUser"
import { Device } from "../../../styles/Breakpoints"

export const Post = ()=>{
    return(
        <Container>
            <PostCategory>
                <TextBlog>Blog</TextBlog>
                <Circle circleWidth="5px" circleHeight="5px" circleColor="#000"/>
                <TextCategory>Taller</TextCategory>
            </PostCategory>
            <PostTitle>
                <TitlePost>
                    Introducción a la Programación Funcional en JavaScript
                </TitlePost>
            </PostTitle>
            <PostUser/>
            <PostImage src="https://res.cloudinary.com/dtmwybty7/image/upload/iltwwrea8sj9p9dn8yco?_a=BAMAJaTE0"/>
            <Content>
            La programación funcional es un paradigma de desarrollo de software basado en la idea de construir el programa utilizando funciones puras y evitando cualquier tipo de efecto secundario o mutabilidad de datos. En lugar de enfocarse en cómo se realizan las tareas, como lo hace la programación imperativa, la programación funcional se centra en qué se quiere lograr, lo que la convierte en un enfoque más declarativo.

JavaScript, aunque no fue diseñado originalmente como un lenguaje funcional, posee características que permiten adoptar este paradigma de forma natural. Gracias a que las funciones en JavaScript son tratadas como ciudadanos de primera clase, es posible pasarlas como argumentos, retornarlas desde otras funciones y almacenarlas en estructuras de datos, lo cual es fundamental para el estilo funcional.

Uno de los pilares más importantes de la programación funcional es el uso de funciones puras. Estas funciones no dependen ni modifican el estado del sistema. Siempre que se les proporcione el mismo conjunto de entradas, producirán la misma salida sin alterar nada más en el entorno del programa. Esto facilita la comprensión del código, mejora la predictibilidad del comportamiento del sistema y reduce la probabilidad de errores.

Otro principio esencial es la inmutabilidad, es decir, el concepto de no modificar datos una vez que han sido creados. En lugar de cambiar un objeto o estructura de datos existente, la programación funcional promueve la creación de nuevas versiones con los cambios requeridos. Esto también contribuye a una mayor estabilidad y confiabilidad del software, ya que elimina los efectos colaterales asociados a la mutación de datos.

Además, la composición de funciones es una técnica fundamental en este paradigma. Consiste en construir funciones complejas combinando funciones más pequeñas y simples. Esta práctica fomenta la reutilización del código, la claridad en la lógica del programa y un estilo más modular.

Otro concepto importante es la transparencia referencial, que significa que una expresión puede ser reemplazada por su valor sin cambiar el resultado del programa. Esto es posible solamente cuando se trabaja con funciones puras y datos inmutables, y es una propiedad deseable porque permite razonar más fácilmente sobre el código y aplicar optimizaciones más agresivas.

En la programación funcional también es común el uso de funciones de orden superior. Estas son funciones que pueden recibir otras funciones como argumentos o devolverlas como resultados. Este enfoque permite construir abstracciones más poderosas y flexibles, lo que a su vez facilita la implementación de patrones comunes de procesamiento de datos.

JavaScript también permite trabajar con funciones anónimas y expresiones lambda, lo cual es muy útil en programación funcional, ya que facilita la escritura de funciones breves que se usan en el momento sin necesidad de definirlas de manera explícita con nombres.

La programación funcional en JavaScript también se beneficia del uso de métodos como map, filter y reduce, que están disponibles en los arrays. Estos métodos permiten transformar y reducir colecciones de datos de una manera funcional, clara y concisa, sin necesidad de utilizar bucles tradicionales.

En general, adoptar la programación funcional en JavaScript puede llevar a un código más limpio, mantenible, predecible y fácil de probar. Si bien no es el único paradigma que puede usarse con este lenguaje, combinarlo con otros enfoques, como el orientado a objetos, puede ofrecer una gran flexibilidad en el diseño del software.
            </Content>
        </Container>
    )

}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    gap: 15px;
    @media ${Device.tablet}{
        width: 85%;
    }
    @media ${Device.laptop}{
        width: 80%;
    }

    @media ${Device.desktop}{
        width: 60%;
    }
`

const PostCategory = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

const TextBlog=styled.p`
    color: #ababab;
    font-size:15px;
`
const TextCategory=styled.p`
    font-size:15px;
`


const PostTitle = styled.div`
    
`

const TitlePost = styled.h1`
    font-size: 20px;
    @media ${Device.tablet}{

    }
    
    @media ${Device.laptop}{
        font-size: 49px;
    }
`

const PostImage = styled.img`
    width: 100%;
    height: 350px;
    object-fit: cover;
`
const Content = styled.p`
    font-weight: 300;
    text-align: justify;
`