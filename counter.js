
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h2>Simple Counter App</h2>
      <h1>{count}</h1>

      <div>
        <button style={styles.btn} onClick={() => setCount(count + 1)}>
          Increment
        </button>

        <button style={styles.btn} onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  btn: {
    padding: "10px 20px",
    margin: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default App;
