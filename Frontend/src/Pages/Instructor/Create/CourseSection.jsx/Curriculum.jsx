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
            <div className="curriculum-list" data-purpose="curriculum-list">
                <div id="chapter10454676" className="js-curriculum-item-draggable">
                    <div className="curriculum-list--inline-insert-section">
                        <div className="curriculum-list--inline-insert-button-row">
                            <button type="button" data-purpose="add-item-inline" className="ud-btn">
                                <span className="ud-focus-visible-target add-item--icon-wrapper">
                                    <svg aria-label="New curriculum item" role="img" focusable="false" className="ud-icon">
                                        <use xlinkHref="#icon-close"></use>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div data-purpose="section-editor">
                        <div className="popper-module--popper">
                            <div className="item-icon-button-trigger" id="popper-trigger--30" aria-describedby="popper-content--31" tabIndex="0">
                                <div className="item-bar--flex--0YQN5">
                                    <div className="item-bar--flex--0YQN5 item-bar--left">
                                        <div className="item-bar--left-content--RlKJL item-bar" data-purpose="item-full-title">
                                            <span className="ud-text-bold item-bar--label--BGgNa" data-purpose="item-object-index">
                                                <p>Section 1:</p>
                                            </span>
                                            <span className="item-bar--title-desktop--0aaJl item-bar--row--Odlz8">
                                                <svg aria-hidden="true" focusable="false" data-purpose="section-icon" className="ud-icon ud-icon-xsmall ud-icon-color-neutral item-bar--icon---1yQ8">
                                                    <use xlinkHref="#icon-article"></use>
                                                </svg>
                                                <span className="item-bar--ellipsis--S90PP">Introduction</span>
                                            </span>
                                            <button type="button" data-purpose="section-edit-btn" className="ud-btn ud-btn-xsmall-button-row--Blm4z">
                                                <button type="button" data-purpose="add-item-inline-last" className="ud-btn ud-btn-small ud-btn-secondary ud-heading-sm add-item--add-item-toggler-last-item--LQ0qr">
                                                    <svg aria-label="New curriculum item" role="img" focusable="false" className="ud-icon ud-icon-small add-item--add-item-toggler-last-item--LQ0qr add-item--expand-icon--9X-PA">
                                                        <use xlinkHref="#icon-close"></use>
                                                    </svg>
                                                    <span>Curriculum item</span>
                                                </button>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="curriculum-list--inline-insert--vMeTp">
                                        <div className="curriculum-list--inline-insert-button-row--Blm4z">
                                            <button type="button" data-purpose="add-item-inline-last" className="ud-btn ud-btn-small ud-btn-secondary">
                                                <svg aria-label="New curriculum item" role="img" focusable="false" className="ud-icon ud-icon-small add-item--add-item-toggler-last-item--LQ0qr add-item--expand-icon--9X-PA add-item--section--J21gT">
                                                    <use xlinkHref="#icon-close"></use>
                                                </svg>
                                                <span>Section</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}