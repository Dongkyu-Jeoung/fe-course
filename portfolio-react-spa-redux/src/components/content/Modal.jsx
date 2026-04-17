import React from 'react';
import { increment, decrement } from '../../features/likeSlice.js'
import { useDispatch } from 'react-redux';

export default function Modal({ project, onClose }) {
    const dispatch = useDispatch();
    
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-btn" onClick={onClose}>✕</span>
                <h2>{project.title}</h2>
                <img src={project.img} alt={project.alt} />
                <p>{project.description}</p>
                <h3>
                    <button className='modal-like-button'
                            onClick={ () => {dispatch(increment(project))} }>❤좋아요</button>
                    <button className='modal-like-button'
                            onClick={ () => {dispatch(decrement(project))} }>🤢싫어요</button>
                </h3>
            </div>
        </div>
    );
}