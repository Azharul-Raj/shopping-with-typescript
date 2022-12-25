import React from 'react';

type horizontalPosition='left'|'right'|'center'
type verticalPosition = 'top' | 'bottom' | 'center'
type positionTypeProps = {
    position:`${horizontalPosition}-${verticalPosition}`
}
const Toast = ({position}:positionTypeProps) => {
    return (
        <div>
            <h2>Toaster Notification -{ position}</h2>
        </div>
    );
};

export default Toast;