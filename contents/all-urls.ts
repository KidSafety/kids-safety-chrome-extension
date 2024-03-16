import type { PlasmoCSConfig } from "plasmo"

import trackingService from "~lib/tracking/TrackingService"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true,
  world: "MAIN",
  run_at: "document_start"
}

window.addEventListener("DOMContentLoaded", (e) => {
  trackingService.trackEvent("content_script_loaded", e)
})
