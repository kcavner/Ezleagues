const connection = require('../config/connection');
const { User, Organization, Sport, Team, Match } = require('../models');
const  users  = require('./data');

connection.on('error', (err)=> err);

connection.once('open', async ()=> {
    console.log('connected');
    console.log('user data: ', users);

    // drop existing data
    await User.deleteMany({});
    await Organization.deleteMany({});
    await Sport.deleteMany({});
    await Team.deleteMany({});
    await Match.deleteMany({});

    async function seedUsers(){
        try{
            for(const user of users){
                const newUser = new User({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    userName: user.userName,
                    email: user.email,
                    password: user.password,
                    birthDate: new Date(user.birthDate),
                    organizationName: user.organizationName,
                    teams: user.teams,
                    isCommissioner: user.isCommissioner,
                    isPlayer: user.isPlayer,
                    isCaptain: user.isCaptain,
                    isLeagueWorker: user.isLeagueWorker,
                });
                await newUser.save();
            }
            console.log('Users seeded successfully');
        }catch(error){
            console.error('Error seeding users:', error);
        }
    }

    seedUsers();
});
