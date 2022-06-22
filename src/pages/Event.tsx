import { Header } from "../components/Headers";
import { Sidebar } from "../components/Sidebar";
import VideoPlayer from "../components/VideoPlayer";


export default function Event() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className="flex flex-1">
        <VideoPlayer />
        <Sidebar />
      </main>
    </div>
  )
}
