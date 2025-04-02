const catchAsync = require('../utils/catchAsync');
const Tour = require('../models/tourModel');
const AppError = require('../utils/appError');
const User = require('../models/userModel');

exports.getOverview = catchAsync(async (req, res) => {
    const tours = await Tour.find();

    res.status(200).render('overview', {
        title: 'All Tours',
        tours,
    });
});

exports.getTour = catchAsync(async (req, res, next) => {
    // Get the data, based on the slug
    const tour = await Tour.findOne({ slug: req.params.slug }).populate({
        path: 'reviews',
        fields: 'review rating user',
    });

    if (!tour) {
        return next(new AppError('There is no tour with that name.', 404));
    }

    // Build Template
    res.status(200)
        .set('Content-Security-Policy', "connect-src 'self' https://unpkg.com")
        .render('tour', {
            title: tour.name,
            tour,
        });
});

exports.getLoginForm = (req, res) => {
    res.status(200)
        .set(
            'Content-Security-Policy',
            "connect-src 'self' https://cdnjs.cloudflare.com",
        )
        .render('login', {
            title: 'Log into your account',
        });
};

exports.getSignupForm = (req, res) => {
    res.status(200).render('signup', {
        title: 'Create an account',
    });
};

exports.getAccount = (req, res) => {
    res.status(200).render('account', {
        title: 'Your account',
    });
};

exports.updateUserData = catchAsync(async (req, res, next) => {
    const updatedUser = await User.findByIdAndUpdate(
        req.user.id,
        {
            name: req.body.name,
            email: req.body.email,
        },
        {
            new: true,
            runValidators: true,
        },
    );

    res.status(200).render('account', {
        title: 'Your account',
        user: updatedUser,
    });
});
