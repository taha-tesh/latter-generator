import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS

const LetterForm = () => {
    const [content, setContent] = useState('');
    const [font, setFont] = useState('Arial');
    const [fontSize, setFontSize] = useState(16);
    const [color, setColor] = useState('#000000');
    const [link, setLink] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const letterData = { content, font, font_size: fontSize, color };
        try {
            const response = await axios.post('https://latter-generator-backend.onrender.com/api/create/', letterData);
            setLink(`https://latter-generator-frontend.onrender.com/letter/${response.data.id}/`);
        } catch (error) {
            console.error('Error creating letter:', error);
        }
    };

    return (
        <div className="letter-generator">
            <h1>Letter Generator</h1>
            <form onSubmit={handleSubmit} className="letter-form">
                <div className="controls">
                    <div className="control-group">
                        <label>Font: </label>
                        <select value={font} onChange={(e) => setFont(e.target.value)}>
                            <option value="Arial">Arial</option>
                            <option value="Times New Roman">Times New Roman</option>
                            <option value="Courier New">Courier New</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Verdana">Verdana</option>
                        </select>
                    </div>
                    <div className="control-group">
                        <label>Font Size:</label>
                        <input
                            type="number"
                            value={fontSize}
                            onChange={(e) => setFontSize(e.target.value)}
                            min="10"
                            max="50"
                        />
                    </div>
                    <div className="control-group">
                        <label>Color:</label>
                        <input
                            type="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        />
                    </div>
                </div>
                <ReactQuill
                    value={content}
                    onChange={setContent}
                    placeholder="Write your letter here..."
                    modules={{
                        toolbar: [
                            [{ 'header': [1, 2, 3, false] }],
                            ['bold', 'italic', 'underline', 'strike'],
                            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                            [{ 'color': [] }, { 'background': [] }],
                            ['link', 'image'],
                            ['clean']
                        ]
                    }}
                    formats={[
                        'header',
                        'bold', 'italic', 'underline', 'strike',
                        'list', 'bullet',
                        'color', 'background',
                        'link', 'image'
                    ]}
                    style={{ fontFamily: font, fontSize: `${fontSize}px`, color }}
                    className="letter-input"
                />
                <button type="submit" className="generate-button">Generate Letter</button>
            </form>
            {link && (
                <div className="share-link">
                    <p>Your letter is ready! Share this link:</p>
                    <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                </div>
            )}
        </div>
    );
};

export default LetterForm;