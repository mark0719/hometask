import React from 'react';
import { CustomBadge } from '../CustomBadge';
import { HorizontalLine } from '../HorizontalLine';
import { TeamMember, Invite } from '../../../types';
import { Images } from '../../../utilities/images';
import './UserAndInviteItemStyle.css';

interface UserItemProps {
  user: TeamMember | Invite;
  isUser: boolean;
}

const UserAndInviteItem: React.FC<UserItemProps> = ({ user, isUser }) => {
  return (
    <div key={user.id}>
      <div className='d-flex justify-content-between'>
        <div className={isUser ? 'userNameStyle' : 'phoneTextStyle'}>
        {isUser ? (user as TeamMember).user.name : (user as Invite).phone}
        </div>
        <div className='d-flex'>
          <CustomBadge status={isUser ? (user as TeamMember).status : 'invited'} />
          <img src={Images.chevronRightIcon} alt="Chevron-Right-Icon" />
        </div>
      </div>
      <HorizontalLine />
    </div>
  );
};

export { UserAndInviteItem };