/* eslint-disable max-lines-per-function */
import React from 'react';

import { FaRegCalendarAlt } from 'react-icons/fa';

import GeneralText from '../../../../components/GeneralText';

import { ExperienceCardType } from './ExperienceCard.component.type';

const ExperienceCard = ({ title, date, role, description, isActive, border }: ExperienceCardType) => {
  const badgeColor = isActive ? 'bg-green-800' : 'bg-red-800';

  return (
    <React.Fragment>
      <div>
        <GeneralText text={title} customStyle='text-xl font-bold' />
        <div className='flex items-center gap-3 pt-2'>
          <FaRegCalendarAlt className='text-white' />
          <GeneralText text={date} />
          <GeneralText text={role} customStyle={`p-1 ${badgeColor} rounded-xl text-center`} />
        </div>
        <GeneralText text={description} customStyle='pt-2' />
      </div>
      { border && <hr className="border-t border-gray-300 my-4" />}
    </React.Fragment>
  );
};

export default ExperienceCard;
