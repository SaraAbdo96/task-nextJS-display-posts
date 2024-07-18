import Link from "next/link";

export interface PostProp {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Prop {
  post: PostProp;
  index: number;
}

const PostCard = ({ post }: Prop) => {
  return (
    <div className="max-w-sm w-full h-64 rounded-lg shadow-lg  text-center bg-gray-800 text-white overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl">
      <div className="p-6 flex flex-col gap-5 h-full ">
        <h2 className="font-bold text-white text-l line-clamp-2 uppercase">
          {post.title}
        </h2>
        <p className="text-slate-200 text-sm font-bold line-clamp-4">
          {post.body}
        </p>
        <Link
          href={`posts/${post.id}`}
          className="mt-auto text-white bg-blue-500 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
