import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { Header } from "./components/Header";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";

const App = () => {
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <TotalMoney listTransactions={listTransactions} />
        </section>
        <List
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      </main>
    </div>
  );
};

export default App;
