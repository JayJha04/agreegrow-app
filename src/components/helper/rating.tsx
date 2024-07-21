import React from 'react';

interface RatingComponentProps {
    rating: number;
}

const Ratings: React.FC<RatingComponentProps> = ({ rating }) => {
    const renderContent = () => {
        let stars: JSX.Element[] = [];
        let isFloat = rating % 1 !== 0;
        let startIndex = 0;

        for (; startIndex < Math.floor(rating); startIndex++) {
            stars.push(<i className="bi bi-star-fill rating-point"></i>);
        }

        if (isFloat) {
            stars.push(<i className="bi bi-star-half rating-point"></i>);
            startIndex++;
        }

        for (; startIndex < 5; startIndex++) {
            stars.push(<i className="bi bi-star rating-point"></i>);
        }

        return stars;
    }

    return (
        <span>
            {renderContent()}
        </span>
    );
}

export default Ratings;