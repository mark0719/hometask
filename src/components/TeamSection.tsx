import React from 'react';
import { TeamMember, Invite, Role } from '../types';
import { admin, standard } from '../utilities/constants';
import { TitleWithIcon } from './common/TitleWithIcon';
import { Images } from '../utilities/images';
import { UserAndInviteItem } from './common/UserAndInviteItem';
import './TeamSectionStyle.css';

interface TeamSectionProps {
  role: Role;
  users: TeamMember[];
  invites: Invite[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ role, users, invites }) => {
  
  return (
    (users.length + invites.length) > 0 ? (
      <div>
        <TitleWithIcon 
          url={role === admin ? Images.adminLogo : Images.personLogo}
          title={role === admin ? "Administrators" : "Standard Users"}
        />
        <div className='boxStyle'>
          {users?.map((user: TeamMember) => (
            <UserAndInviteItem key={user.id} user={user} isUser={true} />
          ))}
          {invites?.map((invite: Invite) => (
            <UserAndInviteItem key={invite.id} user={invite} isUser={false} />
          ))}
        </div>
      </div>
    ) : null
  );
};

export {TeamSection};