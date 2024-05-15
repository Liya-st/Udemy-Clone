import React, { useState } from 'react';

export default function CourseMessage() {
    const [welcomeMessage, setWelcomeMessage] = useState('');
    const [congratulationsMessage, setCongratulationsMessage] = useState('');

    const handleWelcomeMessageChange = (event) => {
        setWelcomeMessage(event.target.value);
    };

    const handleCongratulationsMessageChange = (event) => {
        setCongratulationsMessage(event.target.value);
    };

    return (
        <div className="main-content--content--JhVD-">
            <p data-purpose="section-description">
                Write messages to your students (optional) that will be sent automatically when they join or complete your course
                to encourage students to engage with course content. If you do not wish to send a welcome or congratulations
                message, leave the text box blank.
            </p>
            <form className="messages--form--Pj9OY">
                <div className="ud-form-group">
                    <label htmlFor="form-group--49" className="ud-form-label ud-heading-sm">
                        Welcome Message
                    </label>
                    <div className="udlite-in-udheavy rt-editor-container">
                        <div className="rt-menu-bar-container rt-menu-bar-container-sticky" data-purpose="menu-bar-container">
                            <div className="rt-menu-bar" data-purpose="menu-bar">
                                {/* Add necessary button components with their respective functionality */}
                                <button
                                    type="button"
                                    className="ud-btn ud-btn-medium ud-btn-ghost ud-text-sm ud-btn-icon ud-btn-icon-medium rt-menu-icon-btn ud-link-neutral"
                                    aria-pressed="false"
                                    data-purpose="TOGGLE_STRONG"
                                    title="Bold"
                                    onClick={() => console.log('Toggle bold')}
                                >
                                    <svg aria-label="Bold" role="img" focusable="false" className="ud-icon ud-icon-small">
                                        <use xlinkHref="#icon-format-bold"></use>
                                    </svg>
                                </button>
                                {/* Add more button components for other formatting options */}
                            </div>
                            {/* Add any necessary UI elements for the text field */}
                            <textarea
                                className="udlite-textarea udlite-textarea-autogrow"
                                rows="5"
                                value={welcomeMessage}
                                onChange={handleWelcomeMessageChange}
                            ></textarea>
                        </div>
                    </div>
                </div>
                {/* Add similar code for the congratulations message */}
            </form>
        </div>
    );
}