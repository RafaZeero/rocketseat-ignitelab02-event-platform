import { useParams } from "react-router-dom";
import { Header } from "../components/Headers";
import { Sidebar } from "../components/Sidebar";
import VideoPlayer from "../components/VideoPlayer";


export default function Event() {
  const { slug } = useParams<{ slug: string }>()
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className="flex flex-1">
        {slug
          ? <VideoPlayer
            lessonSlug={slug}

          /> : (
            <div className='flex-1'></div>
          )}
        <Sidebar />
      </main>
    </div>
  )
}
