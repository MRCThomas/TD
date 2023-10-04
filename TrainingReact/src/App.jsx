import NotificationComponent from './components/NotificationComponent.jsx'
import WrapperComponent from './components/WrapperComponent.jsx'


function App() {

    return (
        <>
            <WrapperComponent />
            <div className='container'>
                <div className='columns'>
                    <div className="column">
                        <NotificationComponent type="is-danger" content="Je suis un message d'alerte" />
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='columns'>
                    <div className="column">
                    <NotificationComponent type="is-warning" content="Je suis un message d'avertissement" />
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='columns'>
                <div className="column">
                    <NotificationComponent type="is-success" content="Je suis un message de succès" />
                </div>
                </div>
            </div>
        </>
    )
}

export default App;