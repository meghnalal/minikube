import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Minikube Meghna Little Project</h1>
      <div className="card">
        <p>Your Kubernetes cluster is running successfully</p>
      </div>
    </>
  );
}

export default App;
