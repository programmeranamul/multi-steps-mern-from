import FormHeader from "./Component/FormHeader";
import { initaleData } from "./Component/InitailDataAndFunc";
import 'bootstrap/dist/css/bootstrap.min.css';
import MultiForm from "./Component/MultiForm";


function App() {
  console.log(initaleData)
  return (
    <div className="App">
    <MultiForm />
    </div>
  );
}

export default App;
