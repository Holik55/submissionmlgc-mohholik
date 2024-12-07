import controller from './controller.js';

const routes = [
  {
    path: '/predict',
    method: 'POST',
    handler: controller.handlePrediction,
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
        maxBytes: 1 * 1024 * 1024, // Maksimum ukuran file (1 MB)
        output: 'stream', // Output berupa stream untuk mempermudah membaca file
        parse: true, // Parsing otomatis untuk multipart/form-data
      },
      pre: [
        {
          assign: 'validateContentType',
          method: (request, h) => {
            const contentType = request.headers['content-type'];
            if (!contentType || !contentType.startsWith('multipart/form-data')) {
              throw new Error('Invalid Content-Type. Expected multipart/form-data');
            }
            return h.continue;
          },
        },
      ],
    },
  },
  {
    path: '/predict/histories',
    method: 'GET',
    handler: controller.getPredictionHistory,
  },
];

export default routes;
