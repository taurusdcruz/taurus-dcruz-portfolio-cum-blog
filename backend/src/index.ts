import express from 'express';
import passport from 'passport';
import session from 'express-session';
import mongoose from 'mongoose';
import morgan from 'morgan';
import authRoutes from './routes/authRoutes';
import postRoutes from './routes/postRoutes';


const app = express();
const PORT = process.env.PORT || 5000;


app.use(morgan('combined')); // Add this line to log API calls
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use('/api/posts', postRoutes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
