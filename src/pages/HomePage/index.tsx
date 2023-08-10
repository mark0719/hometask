import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../slices/usersSlices';
import { fetchInvites } from '../../slices/invitesSlices';
import { AppDispatch } from '../../store';
import { TeamMember, Invite, Role } from '../../types';
import { TeamSection } from '../../components/TeamSection';
import { admin, standard } from '../../utilities/constants';
import './index.css';

function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const {users, error: usersError} = useSelector((state: any) => state.users);
  const {invites, error: invitesError} = useSelector((state: any) => state.invites);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchInvites());
  },[dispatch]);

  return (
    <div className='mainContainer mt-5 m-auto'>
      <div className='adminSection'>
        <TeamSection 
          role={admin}
          users = {users?.filter((user: TeamMember) => user.role === admin)}
          invites = {invites?.filter((invite: Invite) => invite.role === admin)}
        />
      </div>
      <div className='standardSection mt-4'>
        <TeamSection
          role={standard}
          users = {users?.filter((user:TeamMember) => user.role === standard)}
          invites = {invites?.filter((invite: Invite) => invite.role === standard)}
        />
      </div>
    </div>
  )
}

export {HomePage};
