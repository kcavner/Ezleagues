const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
// require any related dbs

const userSchema = new Schema(
    {
        // userId
        // userId:{
        //     type: Schema.Types.ObjectId,
        //     default: () => new Types.ObjectId(),
        // },
        // first
        firstName: {
            type: String,
            required: true,
            maxlength: 40,
            trim: true,
        },
        // last
        lastName: {
            type: String,
            required: true,
            maxlength: 50,
            trim: true,
        },
        // user name
        userName: {
            type: String,
            required: true,
            maxlength: 50,
            trim: true,
        },
        // email
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
              validator: function(value) {
                // Regular expression to validate email format
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
              },
              message: 'Please enter a valid email address'
            }
          },
        // password
        password: {
            type: String,
            required: true,
            minlength: 4,
            maxlength: 64,
          },
        // birth date
        birthDate: {
            type: Date,
            required: true
        },
        // organization
        organizationName: {
            type: String,
            required: true
        },
        // teams that the user belongs to
        // 5.20.23 reference to the team model?
        // 5.21.23 changed to reference the Team model. We now pass a team id to the seed.
        team: {
            type: Schema.Types.ObjectId,
            ref: 'Team'
        },
        // isCommissioner
        isCommissioner: {
            type: Boolean,
            default: false
        },
        // isPlayer
        isPlayer: {
            type: Boolean,
            default: false
        },
        // isCapt
        isCaptain: {
            type: Boolean,
            default: false
        },
        // isLeagueWorker
        isLeagueWorker: {
            type: Boolean,
            default: false
        },
    }
)

// Hash the password before saving
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
      return next();
    }
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
      next();
    } catch (error) {
      return next(error);
    }
  });
  
  // Compare passwords
  userSchema.methods.isCorrectPassword = async function(candidatePassword) {
    try {
      return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
      throw error;
    }
  };

const User = model('user', userSchema);

module.exports = User;