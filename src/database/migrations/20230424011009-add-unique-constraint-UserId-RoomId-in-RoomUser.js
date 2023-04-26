'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addConstraint('RoomUsers', {
      fields: ['UserId', 'RoomId'],
      type: 'unique',
      name: 'userid_roomid_unique',
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeConstraint('RoomUsers', 'userid_roomid_unique');
  },
};
