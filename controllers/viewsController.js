const catchAsync = require('../utils/catchAsync');
const Tour = require('../models/tourModel');

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
