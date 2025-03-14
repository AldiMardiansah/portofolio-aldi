import React from 'react';
import PropTypes from 'prop-types';
import { picture } from '../../../assets';

export const Card = ({
  title,
  image,
  description,
  techstack,
  periode,
  role,
}) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden h-full flex flex-col dark:bg-dark-secondary bg-light-secondary">
      <div>
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-dark-primary dark:text-light-primary">{title}</h3>
        {role && (
          <div className="mb-2">
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded text-sm">
              {role}
            </span>
          </div>
        )}
        <p className="text-dark-content dark:text-light-content mb-4">{description}</p>
        <div className="mt-auto">
          <p className="text-dark-content dark:text-light-content">
            <span className="font-semibold">Tech Stack:</span>
            {techstack}
          </p>
          <div className="flex items-center mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-dark-primary dark:text-light-primary mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-dark-content dark:text-light-content">{periode}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
  techstack: PropTypes.string,
  periode: PropTypes.string,
  role: PropTypes.string,
};

Card.defaultProps = {
  image: picture,
  description: '-',
  techstack: '-',
  periode: 'N/A',
  role: '-',
};
