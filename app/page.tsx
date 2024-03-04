export const runtime = 'edge'

const image = 'https://i.imgur.com/jkNjTAe.gif'

export default function Home() {

  return (
    <html lang="en">
      <body>
        <h1>Welcome to my app!</h1>
      </body>
    </html>
  );
}

export async function generateMetadata() {
  const meta = {
    'og:image': image,
    'fc:frame': 'vNext',

    'fc:frame:image': image,
    'fc:frame:image:aspect_ratio': '1:1',
  
    'fc:frame:button:1': "create from your idea",
    'fc:frame:button:1:action': 'post',

    'fc:frame:button:2': "image from random idea",
    'fc:frame:button:2:action': 'post',

    'fc:frame:input:text': "what's your idea?",

    'hey:portal': 'vLatest',
    'hey:portal:image': image,
    'hey:portal:button:1': 'Generate my image',
    'hey:portal:button:1:type': 'submit'
  }

  return {
    openGraph: {
      images: [
        {
          url: image,
          width: '1000',
          height: '1000'
        }
      ]
    },
    other: {
      ...meta
    },
  }
}


