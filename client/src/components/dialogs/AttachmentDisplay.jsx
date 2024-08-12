import React from 'react';
import { transformImage } from '../../lib/features';

const AttachmentDisplay = ({ file, url }) => {
    const renderContent = () => {
        switch (file) {
            case 'image':
                return (
                    <img
                        src={transformImage(url)}
                        alt="attachment"
                        style={{
                            maxWidth: '300px', // Limit image width
                            maxHeight: '200px', // Limit image height
                            width: 'auto',
                            height: 'auto',
                            display: 'block',
                        }}
                    />
                );
            case 'audio':
                return (
                    <audio
                        controls
                        src={url}
                        style={{
                            maxWidth: '300px', // Limit audio player width
                            width: '100%',
                            display: 'block',
                        }}
                    />
                );
            case 'video':
                return (
                    <video
                        controls
                        src={url}
                        style={{
                            maxWidth: '300px', // Limit video player width
                            maxHeight: '200px', // Limit video player height
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                );
            default:
                return <p>Unsupported attachment type</p>;
        }
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px auto', maxWidth: '100%' }}>
            {renderContent()}
        </div>
    );
};

export default AttachmentDisplay;
