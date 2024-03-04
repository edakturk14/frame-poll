export const runtime = 'edge'

const image = 'https://www.prosportstickers.com/wp-content/uploads/nc/u/spongebob_wallpaper_sticker_9__56561.jpg'

export default function Home() {
  const meta = {
    'og:image': image,
    'fc:frame': 'vNext',

    'fc:frame:image': image,
  
    'fc:frame:button:1': "button 1",
    'fc:frame:button:1:action': 'link',

    'fc:frame:button:2': "button 2",
    'fc:frame:button:2:action': 'link',

    'fc:frame:input:text': "what's your idea?",
  }

  return {
    other: {
      ...meta
    },
  }
}


