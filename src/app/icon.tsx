import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#D4AF37', // Primary Gold
          fontSize: 24,
          fontWeight: 'bold',
          fontFamily: 'serif',
          border: '2px solid #D4AF37',
          borderRadius: '4px',
        }}
      >
        O
      </div>
    ),
    { ...size }
  )
}
