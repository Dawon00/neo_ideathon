import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FindMember from "./FindMember";
import Card from "./Card";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<FindMember></FindMember>} />
                <Route path="/card" element={<Card></Card>} />
            </Routes>
        </div>
    );
}

export default App;
