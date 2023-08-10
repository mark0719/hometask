const api = {
  getUsers: () => {
    return {
      ok: true,
      data: require('../fixtures/TeamMembers.json'),
    };
  },
  getInvites: () => {
    return {
      ok: true,
      data: require('../fixtures/Invites.json'),
    };
  },
};

export default api;