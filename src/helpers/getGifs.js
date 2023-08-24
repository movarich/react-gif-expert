export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=oVGTfqG9RqsP8L01N5qRysfxZ8c9nv0e&q=${category}&limit=10`
    const resp = await fetch(url)
    const { data } = await resp.json()

    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))

    return gifs
}
