function rgbToHex(r: number, g: number, b: number): string {
  // Convert each RGB component to its hexadecimal representation
  const rHex = r.toString(16).padStart(2, "0");
  const gHex = g.toString(16).padStart(2, "0");
  const bHex = b.toString(16).padStart(2, "0");

  // Combine the hexadecimal components into a single string
  const hexString = `#${rHex}${gHex}${bHex}`;

  return hexString.toUpperCase();
}
function hexToRgb(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}
export { rgbToHex, hexToRgb };
