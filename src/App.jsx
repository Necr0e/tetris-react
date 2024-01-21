import './styles.css'
import Game from './components/Game'
const App = () => {
    return (
        <div className='App'>
            <Game rows={20} cols={10} />
        </div>
    )
}
export default App
