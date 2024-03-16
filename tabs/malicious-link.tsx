import "../style.css"

function MaliciousLinkPage() {
  const urlParams = new URLSearchParams(window.location.search)
  const maliciousLink = urlParams.get("maliciousLink")
  return (
    <div className="text-center space-y-5">
      <h1 className="text-5xl font-bold">
        Malicious Link Detected
      </h1>
      <p className="text-4xl text-red-500 font-bold">{maliciousLink}</p>
      <p className="text-3xl">
        This link has been detected as malicious and has been blocked. <br/>
        You can safely close this tab.
      </p>
    </div>
  )
}

export default MaliciousLinkPage
