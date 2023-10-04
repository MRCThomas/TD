function WrapperComponent({children}) {
    return (
        <div className="box is-size-5 has-text-centered">
            <h1>Mes alertes</h1>
            {children}
        </div>
    )
}

export default WrapperComponent;