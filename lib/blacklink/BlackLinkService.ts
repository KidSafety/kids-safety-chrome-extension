class BlackLinkService {
  blackLinks: [] = []
  constructor() {}

  public fetchBlackLinks = async () => {}

  public isLinkBlacklisted = async (url: string) => {
    url = url.split("?")[0]
    if (url.endsWith("/")) url = url.slice(0, -1)
    if (url === "https://www.google.com") {
      return true
    }
    return false
  }
}

const blackLinkService = new BlackLinkService()
export default blackLinkService
