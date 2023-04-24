const Tour = require('./../models/tourModel');

// const toursData = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

// checking id using param middleware -
// exports.checkID = (req, res, next, val) => {
//   console.log(`Tour id is : ${val}`);
//   if (Number(val) > toursData.length) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID',
//     });
//   }

//   next();
// };

// create a checkBody middleware -
exports.checkBody = (req, res, next) => {
  //console.log('middleware 1 chained to post request');
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'missing name or price',
    });
  }

  next();
};

exports.getAllTours = (request, response) => {
  //console.log(request.requestTime);
  response.status(200).json({
    status: 'success',
    requestedAt: request.requestTime,
    // results: toursData.length,
    // data: {
    //   tours: toursData,
    // },
  });
};

exports.getTourById = (request, response) => {
  console.log(request.params);

  // const id = Number(request.params.id);
  // const tour = toursData.find((element) => element.id === id);

  // response.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour: tour,
  //   },
  // });
};

exports.createTour = (request, response) => {
  response.status(201).json({
    status: 'success',
  });
};

exports.updateTour = (request, response) => {
  response.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour>',
    },
  });
};

exports.deleteTour = (request, response) => {
  response.status(204).json({
    status: 'success',
    data: null,
  });
};
