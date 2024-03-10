let num = 1; // closure works
export const sample = async formData => {
  'use server';
  //   const name = formData.get('name'); // this works too

  const { name, email, phone, message } = Object.fromEntries(formData);
  console.log(++num, name, email, phone, message, typeof formData);
};

// create a post
export const createPost = async formData => {
  'use server';
};
