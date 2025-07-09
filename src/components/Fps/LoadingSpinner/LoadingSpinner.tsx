import React from 'react';

interface LoadingSpinnerProps {
    color?: string;
    size?: 'sm' | 'md' | 'lg';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    color = '#6EFF24',
    size = 'md'
}) => {
    const sizes = {
        sm: 'h-6 w-6',
        md: 'h-8 w-8',
        lg: 'h-12 w-12'
    };

    return (
        <div className={`${sizes[size]} animate-spin rounded-full border-b-2 border-t-2`}
            style={{ borderColor: color }} />
    );
};

export default LoadingSpinner;
