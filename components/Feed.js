import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
     const posts = [
        {
            id: "1",
            name: "Fake Name",
            username: "faketwitter",
            userImg: "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
            img: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            text: "nice view!",
            timestamp: "3 hours ago"
        },
        {
            id: "2",
            name: "Fake Name2",
            username: "faketwitter2",
            userImg: "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
            img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            text: "nice view!",
            timestamp: "3 hours ago"
        }
     ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex py-2 px-3 sticky top=0 z-50 bg-white border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>    
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                <SparklesIcon className="h-5"/>
            </div>
        </div>
        <Input />
        {posts.map((post) => (
            <Post key = {post.id} post={post} />
        ))}
    </div>
  )
}
