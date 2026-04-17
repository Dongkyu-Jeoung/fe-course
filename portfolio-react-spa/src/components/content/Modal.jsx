import React from 'react';

export default function Modal({ project, onClose, like, setLike}) {
    
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content">
                <span className="close-btn" onClick={onClose}>✕</span>
                <h2>{project.title}</h2>
                <img src={project.img} alt={project.alt} />
                <p>{project.description}</p>
                <h3><button className='modal-like-button'
                            onClick={()=>setLike(like+1)}>❤좋아요</button></h3>
            </div>
        </div>
    );
}