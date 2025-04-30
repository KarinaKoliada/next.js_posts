export const getPosts = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getPostById = async (id: string) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    return data;
  } catch (e) {
    console.error(e);
  }
};
