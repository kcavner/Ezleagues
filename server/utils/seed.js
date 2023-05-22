const connection = require('../config/connection');
const { User, Organization, Sport, Team, Match } = require('../models');
const { users, organizations, sports, teams, matches } = require('./data');

connection.on('error', (err)=> err);

connection.once('open', async ()=> {
    console.log('connected');
    // console.log('user data: ', users);
    // console.log('Org data:', organizations);
    // console.log('Sport data:', sports);
    // console.log('Team data: ', teams);
    console.log('Match data', matches);

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

    async function seedOrganizations(){
        try{
            for(const organization of organizations){
                const newOrganization = new Organization({
                    name : organization.name,
                    sports : organization.sports,
                    location : organization.location
                });
                await newOrganization.save();
            }
            console.log('Organizations seeded successfully');
        }catch (error){
            console.error('Error seeding organizations: ', error);

        }
    }

    seedOrganizations();

    async function seedSports(){
        try{
            for(const sport of sports){
                const newSport = new Sport({
                    name : sport.name,
                    description : sport.description,
                    startDate : sport.startDate,
                    registeredTeams : sport.registeredTeams,
                    matchesPlayed : sport.matchesPlayed
                });
                await newSport.save();
            }
            console.log('Sports seeded successfully');
        }catch(error){
            console.error('Error seeding sports: ', error);
        }
    }

    seedSports();

    async function seedTeams(){
        try{
            for(const team of teams){
                const newTeam = new Team({
                    name : team.name,
                    association : team.association,
                    stats : team.stats,
                    scheduleOfGames : team.scheduleOfGames,
                    teamColor : team.teamColor,
                    roster : team.roster
                });
                await newTeam.save();
            }
            console.log('Teams seeded successfully');
        }catch(error){
            console.error('Error seeding teams: ', error);
        }
    }

    seedTeams();

    async function seedMatches(){
        try{
            for(const match of matches){
                const newMatch = new Match({
                    date : match.date,
                    location : match.location,
                    teamsPlaying : match.teamsPlaying,
                    score : match.score
                });
                await newMatch.save();
            }
            console.log('Matches seeded successfully');
        }catch(error){
            console.error('Error seeding matches: ', error);
        }
    }

    seedMatches();
});
