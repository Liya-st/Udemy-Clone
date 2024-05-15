import React, { useState } from 'react';

export default function Curriculum() {
    const [lectures, setLectures] = useState([]);
    const [lectureTitle, setLectureTitle] = useState('');
    const [lectureContent, setLectureContent] = useState('');

    const handleAddLecture = () => {
        const newLecture = {
            title: lectureTitle,
            content: lectureContent
        };

        setLectures([...lectures, newLecture]);
        setLectureTitle('');
        setLectureContent('');
    };

    const handleDeleteLecture = (index) => {
        const updatedLectures = [...lectures];
        updatedLectures.splice(index, 1);
        setLectures(updatedLectures);
    };

    return (
        <div>
            <h3>Create Lectures</h3>
            <div>
                <input
                    type="text"
                    placeholder="Lecture Title"
                    value={lectureTitle}
                    onChange={(e) => setLectureTitle(e.target.value)}
                />
                <textarea
                    placeholder="Lecture Content"
                    value={lectureContent}
                    onChange={(e) => setLectureContent(e.target.value)}
                ></textarea>
                <button onClick={handleAddLecture}>Add Lecture</button>
            </div>
            <div>
                {lectures.map((lecture, index) => (
                    <div key={index}>
                        <h4>{lecture.title}</h4>
                        <p>{lecture.content}</p>
                        <button onClick={() => handleDeleteLecture(index)}>Delete Lecture</button>
                    </div>
                ))}
            </div>
        </div>
    );
}