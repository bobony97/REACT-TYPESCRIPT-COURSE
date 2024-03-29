import React from "react"

interface ComponentProps {
    firstName: string
}

interface StateComponent {
    firstName: string
}

export class Component extends React.Component<ComponentProps, StateComponent> {
    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            firstName: this.props.firstName
        }
        console.log("constructor");
    }

    render() {  //Se invoca al montar el componente
        console.log("render");
        return <>
            Hola, {this.state.firstName} <br />
            <button onClick={() => {
                this.setState({ firstName: "Agustin" })
            }}>
                Cambiar Nombre
            </button>
        </>
    }

    componentDidMount(): void {   //Se invoca inmediatamente despues de que el componente se monta
        console.log("componentDidMount");
    }

    componentDidUpdate(prevProps: Readonly<ComponentProps>, prevState: Readonly<StateComponent>, snapshot?: any): void {  //Se invoca al modificar el estado
        console.log("componentDidUpdate");
        console.log(`prevProps: ${JSON.stringify(prevProps)}`)  //Props actuales
        console.log(`current Props: ${JSON.stringify(this.props)}`) //Props con cambio

        console.log(`prevState: ${JSON.stringify(prevState)}`)  //Estado actual
        console.log(`current State: ${JSON.stringify(this.state)}`)  //Estado al cambiar
    }
        
    componentWillUnmount(): void {   //Desmonta el componente
        console.log("componentWillUnmount");
    }

}