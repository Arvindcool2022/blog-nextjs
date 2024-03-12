import H1 from '@/components/ui/H1';
import { createPost } from '@/lib/action';

export const metadata = { title: { absolute: 'Admin' } }; // to ignore the template

export default function Page() {
  const createPostWithUserId = createPost.bind(null, 2);
  return (
    <div className="container">
      <H1>Admin page</H1>
      <form action={createPostWithUserId}>
        <label htmlFor="#title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          className=""
          placeholder="Title"
        />

        <label htmlFor="#highlight">Highlight</label>
        <textarea
          id="highlight"
          rows={3}
          cols={75}
          type="text"
          name="desc_highlight"
          className=""
          placeholder="Subject / TLDR / Summary"
        />

        <label htmlFor="#article">Article</label>
        <textarea
          id="article"
          rows={10}
          cols={75}
          type="text"
          name="body"
          className=""
          placeholder="Article"
        />

        <label htmlFor="#image">Image</label>
        <input
          id="image"
          type="text"
          name="img"
          className=""
          placeholder="Image link(optional)"
        />
        <button>Create Post</button>
      </form>
    </div>
  );
}
