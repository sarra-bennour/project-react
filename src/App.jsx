import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { findLong } from "./Ecmascript"; // Importation de la fonction
import countOccurrences from "./Occurence"; // Importation de la fonction
import total from "./TotalNote"; // Importation de la fonction
import { Search } from './Ecmascript/function'; // Importation de la fonction
import Hello from './Components/Hello';
import Form from './Components/Form';
import Buton from './Components/Button';

//bonjour
function App() {
  const [count, setCount] = useState(0);
  const [inputOcc] = useState([
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"]
  ]);

  const students = [
    { name: 'John', id: 123, marks: 98 },
    { name: 'Baba', id: 101, marks: 23 },
    { name: 'John', id: 200, marks: 45 },
    { name: 'Wick', id: 115, marks: 75 },
  ];



  // Créer un tableau d'objets avec des identifiants uniques pour chaque entrée
  let lastId = 0;

  const Tab = [
    { id: ++lastId, name: 'Alice', age: 25 },
    { id: ++lastId, name: 'Bob', age: 30 },
    { id: ++lastId, name: 'Charlie', age: 35 }
  ];

  // Ajouter de nouvelles entrées
  Tab.push({ id: ++lastId, name: 'David', age: 40 });
  Tab.unshift({ id: ++lastId, name: 'Eve', age: 22 });

  console.log("Tab:", Tab); // Afficher le tableau Tab dans la console

  const result = Search(Tab, 2); // Rechercher l'objet avec l'ID 2
  console.log("Search result:", result); // Afficher le résultat de la recherche dans la console
//***********************************************************/

const wordss = findLong(["hello", "world", "foo", "bar"]);
console.log("result"+wordss);

  const [words, setWords] = useState([]);
  const [longest, setLongest] = useState(null);
  const [input, setInput] = useState("");

  const handleAddWord = () => {
    if (input.trim()) {
      const updatedWords = [...words, input.trim()];
      setWords(updatedWords);
      setLongest(findLongestWord(updatedWords));
      setInput("");
    }
  };

  const occurrences = countOccurrences(inputOcc);
  console.log("output ",occurrences);

  const totalNote = total(students);
  console.log(totalNote);

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Finder du Mot le Plus Long</h2>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ajoutez un mot..."
        />
        <button onClick={handleAddWord}>Ajouter</button>

        <h3>Mots : {words.join(", ")}</h3>

        {longest && (
          <h3>Mot le plus long : {longest.mot} ({longest.longueur} lettres)</h3>
        )}
      </div> */}
    <Hello />
    <Form labelle="Firstname" namee="firstname"/>
    <Form labelle="Lastname" namee="lastname"/>
    <Buton />


    </>
  );
}

export default App;
