// import React from 'react';
// import LetterForm from './LetterForm';
// import './App.css';

// function App() {
//     return (
//         <div className="App">
//             <LetterForm />
//         </div>
//     );
// }

// export default App;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LetterForm from './LetterForm';
import LetterViewer from './LetterViewer';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LetterForm />} /> {/* Default route */}
                <Route path="/latter-generator" element={<LetterForm />} /> {/* Route for /latter-generator */}
                <Route path="/letter/:id" element={<LetterViewer />} /> {/* Route for viewing a letter */}
            </Routes>
        </Router>
    );
}

export default App;