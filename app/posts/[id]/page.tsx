import React from "react";

const postDetails = async (id: number) => {
  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const postData = await postResponse.json();

  const commentsResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  const commentsData = await commentsResponse.json();

  return { post: postData, comments: commentsData };
};

const PostPage = async ({ params }: { params: { id: number } }) => {
  const { post, comments } = await postDetails(params.id);
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-3xl mx-auto p-7 bg-gray-900 text-white rounded-lg shadow-lg my-10">
        <h1 className="text-3xl font-bold mb-4 text-center uppercase">
          {post.title}
        </h1>
        <p className="text-lg mb-8 text-gray-200">{post.body}</p>
        <div className="pt-4 border-t">
          <h1 className="text-xl font-semibold text-gray-500 mb-4">
            Comments:
          </h1>
          {comments.length > 0 && (
            <div className="space-y-2">
              {comments.map((comment: any) => (
                <div key={comment.id} className="p-3 bg-gray-100 rounded-lg">
                  <h3 className="text-md font-bold text-gray-900">
                    {comment.name}
                    <span className="text-sm font-normal text-gray-600">
                      ({comment.email})
                    </span>
                  </h3>
                  <p className="text-gray-700 mt-2">{comment.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
