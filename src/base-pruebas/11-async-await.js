export const getImagen = async () => {
  try {
    const apiKey = 'rKbBwxNKoEFod3Rl45gWXJt5i6j2m4Wx';
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    return url;
  } catch (error) {
    // manejo del error
    console.error(error);
  }
};
