export default function Loading() {
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-[#000]">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        <div className="text-white text-sm">Loading...</div>
      </div>
    </div>
  )
} 