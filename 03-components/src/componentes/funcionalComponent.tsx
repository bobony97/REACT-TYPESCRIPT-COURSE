interface FunctionalComponentProps {
    firstName: string;
}

export const FunctionalComponent:  React.FC<FunctionalComponentProps> = ({firstName}) => {
    return (
        <>
            Hola desde un componente funcional {firstName}
        </>
    )
}

