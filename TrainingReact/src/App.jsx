import NotificationComponent from './components/NotificationComponent.jsx'
import WrapperComponent from './components/WrapperComponent.jsx'


function App() {

    return (
        <>
            <WrapperComponent className='container' >
                <div className='columns'>
                    <div className="column">
                        <NotificationComponent type="is-danger" content="Je suis un message d'alerte" />
                        <NotificationComponent type="is-success" content="Je suis un message de succès" />
                        <NotificationComponent type="is-warning" content="Je suis un message d'avertissement" />
                    </div>
                </div>
            </WrapperComponent >
        </>
    )
}

export default App;