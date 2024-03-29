import React from "react"


interface ClassComponentProps {
    firstName: string
}

export class ClassComponent extends React.Component<ClassComponentProps, any> {  //El primer any va a ser reemplazado por props y el segundo por estados
    constructor(props: ClassComponentProps) {
        super(props);
    }

    render(): React.ReactNode {                     //Accedemos a las props(ClassComponentProps)
        return <>                                    
            Hola mundo desde un componente de clase ({this.props.firstName})   
        </>
    }
}