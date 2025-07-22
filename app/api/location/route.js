// app/api/location/route.js (rename location.js to route.js)
export async function GET() {
  try {
    
    // Step 1: Get IP
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    
    if (!ipResponse.ok) {
      throw new Error(`IP API failed: ${ipResponse.status}`);
    }
    
    const ipData = await ipResponse.json();
    const clientIP = ipData.ip;
    
    // Step 2: Get location
    const locationResponse = await fetch(`http://ip-api.com/json/${clientIP}?fields=status,city,country`);
    
    if (!locationResponse.ok) {
      throw new Error(`Location API failed: ${locationResponse.status}`);
    }
    
    const locationData = await locationResponse.json();
    
    if (locationData.status === 'success') {
      return Response.json({
        ip: clientIP,
        city: locationData.city || 'Unknown',
        country: locationData.country || 'Unknown'
      });
    } else {
      throw new Error('Location lookup failed');
    }
    
  } catch (error) {
    return Response.json({
      ip: 'Unknown',
      city: 'Unknown',
      country: 'Unknown',
      error: error.message
    });
  }
}