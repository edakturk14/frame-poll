import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <html lang="en">
      <head>
        <title>Custom Meta Tags Example</title>
        <meta property="og:image" content="https://www.prosportstickers.com/wp-content/uploads/nc/u/spongebob_wallpaper_sticker_9__56561.jpg" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://www.prosportstickers.com/wp-content/uploads/nc/u/spongebob_wallpaper_sticker_9__56561.jpg" />
        {/* Button 1 */}
        <meta property="fc:frame:button:1" content="Button 1" />
        <meta property="fc:frame:button:1:action" content="link" />
        <meta property="fc:frame:button:1:target" content="https://www.google.com/maps" />
      </head>
      <body>
        <h1>Welcome to my app!</h1>
      </body>
    </html>
  );
}