import PaginationControls from "@/components/PaginationControls";
import PostCard, { PostProp } from "@/components/PostCard";

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const allPosts = await response.json();

  return allPosts;
}

const Home = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const posts = await getPosts();
  const totalPosts = posts.length;
  const page: number = Number(searchParams?.page ?? "1");
  const perPage = Number(searchParams?.per_page ?? "8");

  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage);

  const entries = posts.slice(start, end);

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10 h-full">
      <div className="md:w-2/4 sm:w-3/4 m-auto p-4  rounded-lg bg-slate-800 drop-shadow-xl">
        <h2 className="text-slate-200 text-center text-2xl font-extrabold font-[verdana] uppercase">
          Posts Task using Next JS
        </h2>
      </div>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {entries.map((item: PostProp, index: number) => (
          <PostCard key={item.id} post={item} index={index} />
        ))}
      </section>
      <PaginationControls
        hasNextPage={end < posts.length}
        hasPrevPage={start > 0}
        totalPosts={totalPosts}
      />
    </main>
  );
};

export default Home;
