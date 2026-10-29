MODERN HTML5 VERSION OF YOUR ACADEMIC WEBSITE

Upload index.html, main.htm, and menu.htm to the main directory of your existing GitHub Pages repository, replacing the old files. Keep all your other site files unchanged (courses.htm, pub.htm, resume.htm, h.jpg, favicon.ico, PDFs, etc.).

index.html is now a real, frame-free HTML5 homepage. The navigation is embedded at the top. Clicking Teaching, Publications, or My CV loads the corresponding existing .htm file dynamically into the page without using frames/iframes. The address becomes index.html?page=courses.htm, etc. JavaScript is required for that persistent-menu experience. Without JavaScript, the original page links still open directly.

main.htm and menu.htm are now compatibility redirects to index.html, so older links to those pages continue to work.

IMPORTANT LIMITATION: A visitor who directly opens courses.htm, pub.htm, or resume.htm will see the unchanged original page without the new header. To make ALL pages modern and independently search-indexable with the same header, provide the additional .htm files for conversion.

Original text is retained, including announcements about July 2026 that are now dated; review these before publishing.

Preview locally with a small HTTP server (not by double-clicking index.html), because modern browsers restrict fetch() of local file:// pages. On GitHub Pages it will work normally.
