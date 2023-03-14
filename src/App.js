import logo from './logo.svg';
import './App.css';
import { firebaseApp } from "./firebase-setup";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

async function getData() {
  const querySnapshot = await getDocs(collection(db, "users"));
  console.log('querySnapshot', querySnapshot)
  var results = new Map()
  querySnapshot.forEach((doc) => results.set(doc.id, doc.data()))
  console.log('results', results)
  return results
}

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((result) => setData(result))
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          { Array.from(data.entries()).map((entry) => {
              const [key, value] = entry;
              return (<li key={key}>{value.first} - {value.last}</li>);
            })
          }
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
