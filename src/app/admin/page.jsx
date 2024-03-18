import { createPost, deletePost } from '@/lib/action';

export const metadata = { title: { absolute: 'Admin' } }; // to ignore the template

export default function Page() {
  const createPostWithUserId = createPost.bind(null, 2);
  return (
    <section className="container mx-auto my-10">
      {/* <H1>Admin page</H1> */}
      <form
        action={createPostWithUserId}
        className="mx-auto flex max-w-4xl flex-1 flex-col gap-2 *:rounded *:outline-none"
      >
        <div className="flex flex-col *:rounded-md">
          <label htmlFor="#title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            className="px-4 py-2 text-gray-800"
            placeholder="Title"
          />
        </div>
        <div className="flex flex-col *:rounded-md">
          <label htmlFor="#highlight">Highlight</label>
          <textarea
            id="highlight"
            rows={3}
            cols={75}
            type="text"
            name="desc_highlight"
            className="px-4 py-2 text-gray-800"
            placeholder="Subject / TLDR / Summary"
          />
        </div>
        <div className="flex flex-col *:rounded-md">
          <label htmlFor="#article">Article</label>
          <textarea
            id="article"
            rows={10}
            cols={75}
            type="text"
            name="body"
            className="px-4 py-2 text-gray-800"
            placeholder="Article"
          />
        </div>
        <div className="flex flex-col *:rounded-md">
          <label htmlFor="#image">Image</label>
          <input
            id="image"
            type="text"
            name="img"
            className="px-4 py-2 text-gray-800"
            placeholder="Image link(optional)"
          />
        </div>
        <button className="bg-blue-600">Create Post</button>
      </form>
      <form
        action={deletePost}
        className="mx-auto my-6 flex max-w-4xl flex-1 items-center gap-2 *:rounded *:outline-none"
      >
        <div className="flex items-center gap-4 *:rounded-md">
          <label htmlFor="#id" className="text-2xl">
            Post ID
          </label>
          <input
            id="id"
            type="number"
            name="id"
            className="px-4 py-2 text-gray-800"
            placeholder="Post ID"
          />
        </div>

        <button className="bg-blue-600 px-6 py-2">Delete Post</button>
      </form>
    </section>
  );
}
