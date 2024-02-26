import { cookieBasedClient } from "@/utils/amplify-utils";


export default async function Home() {



  const { data: posts} = await cookieBasedClient.models.Post.list({
    selectionSet: ["title", "id"],
    authMode: "API_KEY",
  });


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-1/2 m-auto ">
     <h1 className=" text-2xl  pb-10 " >List All Titles </h1>
     {posts?.map( async (post, idx) => (
      
      <div key={idx} className="flex flex-row justify-between w-full p-2 border-b-2 border-gray-200">
        <h2 className="text-xl">{post.title}</h2>
        
      </div>

    ))}
    </main>
  );
}
