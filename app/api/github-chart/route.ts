import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username') || 'AnuragGoyal007';
  const color = searchParams.get('color') || '39d353';
  const emptyColor = searchParams.get('emptyColor') || '161b22';

  try {
    const res = await fetch(`https://ghchart.rshah.org/${color}/${username}`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch from ghchart');
    }
    
    let svgText = await res.text();
    
    // Replace the default empty colors (#ebedf0 or #EEEEEE) with the customized emptyColor
    svgText = svgText.replace(/fill="#ebedf0"/g, `fill="#${emptyColor}"`);
    svgText = svgText.replace(/fill:#EEEEEE/gi, `fill:#${emptyColor}`);

    return new Response(svgText, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch graph' }, { status: 500 });
  }
}
