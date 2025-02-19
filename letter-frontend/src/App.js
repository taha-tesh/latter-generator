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
                <Route path="/" element={<LetterForm />} />
                <Route path="/letter/:id" element={<LetterViewer />} />
            </Routes>
        </Router>
    );
}

export default App;