const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '60e733f971bc166f1bd208799a14ef17',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;