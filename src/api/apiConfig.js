const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'df95cfce705a93c42dc5daba3d46e397',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;