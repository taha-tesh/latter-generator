import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams

const LetterViewer = () => {
    const [letter, setLetter] = useState(null);
    const { id } = useParams(); // Use useParams to get the `id` parameter

    useEffect(() => {
        const fetchLetter = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/${id}/`);
                setLetter(response.data);
            } catch (error) {
                console.error('Error fetching letter:', error);
            }
        };
        fetchLetter();
    }, [id]); // Add `id` to the dependency array

    if (!letter) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="letter-viewer">
            <h1>Letter #{letter.id}</h1>
            <div
                style={{
                    fontFamily: letter.font,
                    fontSize: `${letter.font_size}px`,
                    color: letter.color,
                }}
                dangerouslySetInnerHTML={{ __html: letter.content }}
            >
            </div>
        </div>
    );
};

export default LetterViewer;