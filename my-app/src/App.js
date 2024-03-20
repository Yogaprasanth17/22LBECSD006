import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table>
          <tr>
            <td><input class = "text" type="text" id="ans"></input></td>
              <td><input type="button" value="c"></input></td>
            </tr>
            <tr>
              <td><input type="button" value="1"></input></td>
              <td><input type="button" value="2"></input></td>
              <td><input type="button" value="3"></input></td>
              <td><input type="button" value="/"></input></td>
            </tr>
            <tr>
              <td><input type="button" value="7"></input></td>
              <td><input type="button" value="8"></input></td>
              <td><input type="button" value="9"></input></td>
              <td><input type="button" value="*"></input></td>
            </tr>
            <tr>
              <td><input type="button" value="0"></input></td>
              <td><input type="button" value="."></input></td>
              <td><input type="button" value="="></input></td>
              <td><input type="button" value="+"></input></td>
            </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
