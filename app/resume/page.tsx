export const metadata = {
  title: "Resume - SOUVIK SAHOO",
}

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-start justify-center py-12 px-4">
      <div className="w-full max-w-4xl bg-[#0b0f14] border border-[#30363d] rounded-lg shadow-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-[#30363d]">
          <h1 className="text-2xl font-semibold">Resume — SOUVIK SAHOO</h1>
        </div>
        <div className="p-4">
          <div className="w-full h-[80vh] bg-[#02040a]">
            <iframe src="/resume.pdf" title="Resume" width="100%" height="100%" />
          </div>
          <div className="mt-4 flex gap-4">
            <a href="/resume.pdf" download className="px-4 py-2 bg-[#238636] text-white rounded-md">Download PDF</a>
            <a href="/" className="px-4 py-2 bg-transparent border border-[#30363d] text-foreground rounded-md">Back</a>
          </div>
        </div>
      </div>
    </main>
  )
}
