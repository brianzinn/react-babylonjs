import { Effect } from "@babylonjs/core";
// register shader toy fragment example
Effect.ShadersStore.vaporWavePixelShader = `
uniform float time;
            uniform vec2 mousePos;
            uniform vec2 resolution;
            varying vec2 vUV;
            #define PI 3.1415926535
            #define STEPS 50
            mat2 rot( in float a ) {
                float c = cos(a);
                float s = sin(a);
                return mat2(c,s,-s,c);
            }
            // noise function
            float noise( in vec2 p ) {
                p *= rot(1.941611);
                return sin(p.x) * .25 + sin(p.y) * .25 + .50;
            }
            // get the 2 closest point with the projected height as z
            void grid( in vec2 p, inout vec3 projClosest, inout vec3 projSecondClosest ) {
                vec2 center = floor(p) + 0.5;
                vec2 secondBestCenter = center;
                float secondBestDist = 99999.9;
                vec2 bestCenter = center;
                float bestDist = 99999.9;
                for (int y = -1 ; y <= 1 ; y++)
                for (int x = -1 ; x <= 1 ; x++) {
                    vec2 currentCenter = center + vec2(x, y);
                    // vary each center a bit
                    currentCenter.x += noise(
                        time * vec2(0.5124, 0.5894) +
                        currentCenter * vec2(1.3124, 1.7894)) * 1.0 - 0.5;
                    currentCenter.y += noise(
                        time * vec2(0.5565, 0.5561) -
                        currentCenter * vec2(1.5124, 1.6053)) * 1.0 - 0.5;
                    vec2 delta = p - currentCenter;
                    float currentDist = dot(delta, delta)*0.5;
                    // use an analytical if to avoid the branch
                    float if1 = step(currentDist, bestDist);
                    float if1m = 1.0 - if1;
                    secondBestCenter = if1*bestCenter + if1m*secondBestCenter;
                    secondBestDist = if1*bestDist + if1m*secondBestDist;
                    bestCenter = if1*currentCenter + if1m*bestCenter;
                    bestDist = if1*currentDist + if1m*bestDist;
                    // else if
                    float if2 = step(currentDist, secondBestDist)*if1m;
                    float if2m = 1.0 - if2;
                    secondBestCenter = if2*currentCenter + if2m*secondBestCenter;
                    secondBestDist = if2*currentDist + if2m*secondBestDist;
                }
                projClosest = vec3(bestCenter, bestDist);
                projSecondClosest = vec3(secondBestCenter, secondBestDist);
            }
            // normal function
            vec3 normal( in vec3 p, in vec3 proj ) {
                vec2 dir = proj.xy - p.xy;
                vec3 tang = vec3(dir, proj.z*0.12);
                vec3 nine = vec3(dir, 0).yxz;
                nine.x = -nine.x;
                return normalize(cross(nine, tang));
            }
            // distance function
            float de( in vec3 p, inout vec3 projClosest, inout vec3 projSecondClosest ) {
                // get the closest points
                grid(p.xy, projClosest, projSecondClosest);
                float below = 0.0;
                below -= sin(dot(p.xy, vec2(0.005, 0.051)) * 4.0 + time * 0.5) * 0.4 + 0.2;
                below -= 1.0 - projClosest.z;
                return max(0.0, p.z - below);
            }
            // return the sun color at this direction
            vec4 getSunColor( in vec3 dir, inout float inside ) {
                float dotp = dot(dir, vec3(-0.99, 0.0, 0.1));
                float sunHeight = smoothstep(0.01, 0.29, dir.z);
                inside = smoothstep(0.977, 0.979, dotp);
                float ytemp = abs(dir.y)*dir.y;
                float sunWave = sin(dir.z*300.0+time*1.846+
                                    sin(ytemp*190.0+time*0.45)*1.3)*0.5+0.5;
                float sunHeight2 = smoothstep(-0.1, 0.2, dir.z);
                sunWave = sunWave * sunHeight2 + 1.0 - sunHeight2;
                sunWave = (1.0-smoothstep(sunHeight2, 1.0, sunWave)) * (1.0 - sunHeight2) + sunHeight2;
                float sun = inside * sunWave;
                return vec4(mix(vec3(0.998, 0.108, 0.47), vec3(0.988, 0.769, 0.176), sunHeight), sun);
            }
            // get the space color
            vec3 getSpaceColor( in vec3 dir ) {
                float scanline = sin(dir.z * 700.0 - time * 5.1)*0.5+0.5;
                scanline *= scanline;
                vec3 color = mix(vec3(0.1, 0.16, 0.26), vec3(0.1), scanline);
                vec2 uv = vec2(atan(dir.y, dir.x) / (2.0 * PI) + 0.5, mod(dir.z, 1.0));
                uv.x = mod(uv.x+2.0*PI, 1.0);
                uv.x *= 100.0;
                uv.y *= 15.00;
                uv *= rot(1.941611+time*0.00155);
                vec2 center = floor(uv) + 0.5;
                center.x += noise(center*48.6613) * 0.8 - 0.4;
                center.y += noise(center*-31.1577) * 0.8 - 0.4;
                float radius = smoothstep(0.6, 1.0, noise(center*42.487+
                                                        vec2(0.1514, 0.1355)*time));
                radius *= 0.01;
                vec2 delta = uv-center;
                float dist = dot(delta, delta);
                float frac = 1.0-smoothstep(0.0, radius, dist);
                float frac2 = frac;
                frac2 *= frac2; frac2 *= frac2; frac2 *= frac2;
                vec3 lightColor = mix(vec3(0.988, 0.769, 0.176),
                                    vec3(0.988, 0.434, 0.875), noise(center*74.487));
                return mix(color, lightColor, frac) + vec3(1)*frac2;
            }
            // get the background color (ala cubemap)
            vec3 getBackgroundColor( in vec3 dir ) {
                float horizon = 1.0 - smoothstep(0.0, 0.02, dir.z);
                // this is the background with the scanline
                vec3 color = getSpaceColor(dir);
                // get the sun
                float inside = 0.0;
                vec4 sun = getSunColor(dir, inside);
                color = mix(color, vec3(0.1, 0.16, 0.26), inside);
                color = mix(color, sun.rgb, sun.a);
                // the horizon
                color = mix(color, vec3(0.43, 0.77, 0.85), horizon * (1.0 - sun.a * 0.19));
                return color;
            }
            // the color gets more blue/white near edges of the voronoi cells
            vec3 getWaveColor( in vec3 p, in vec3 projClosest, in vec3 projSecondClosest,
                            in vec3 dir, float dist, vec2 frag ) {
                float distanceToEdge = abs(projClosest.z-projSecondClosest.z);
                float distanceFrac = smoothstep(-10.0, 100.0, dist);
                distanceFrac *= distanceFrac; distanceFrac *= distanceFrac;
                float frac = smoothstep(0.0, 0.1+distanceFrac*0.9, distanceToEdge);
                // get the reflection
                vec3 norm = normal(p, projClosest);
                vec3 color = getBackgroundColor(reflect(dir, norm));
                // add a screenspace scanline
                frac *= (sin(frag.y/resolution.y*700.0)*0.5+0.5)*(1.0-distanceFrac);
                return mix(vec3(0.43, 0.77, 0.85), color, frac);
            }
            void main( void ) {
                vec2 uv = vUV.xy / resolution.xy * 2.0 - 1.0;
                uv.y *= resolution.y / resolution.x;
                vec3 from = vec3(0, 0, 0.2);
                vec3 dir = normalize(vec3(uv.x*0.6, 1.0, uv.y*-0.6));
                dir.xy *= rot(PI*.5);
                vec2 mouse=(mousePos.xy / resolution.xy - 0.5) * 0.5;
                mouse *= step(1.0, mousePos.x);
                dir.xz *= rot(3.16-(-mouse.y*1.5)+sin(time*0.785)*0.008);
                dir.xy *= rot(-mouse.x*4.0+sin(time*0.416)*0.01);
                dir.yz *= rot(sin(time*0.287)*0.009);
                vec3 color = vec3(0);
                if (dir.z > 0.0) {
                    color = getBackgroundColor(dir);
                } else {
                // project the starting position to z = 0 so we ccan lower the raymarch count
                    float totdist = from.z / -dir.z;
                    for (int steps = 0 ; steps < STEPS ; steps++) {
                        vec3 p = from + totdist * dir;
                        vec3 projClosest;
                        vec3 projSecondClosest;
                        p.x -= time * 2.7;
                        float dist = de(p, projClosest, projSecondClosest);
                        totdist += dist;
                        if ( dist < 0.01 || steps == STEPS-1 ) {
                            color = getWaveColor(p, projClosest, projSecondClosest,
                                                dir, totdist, vUV);
                            break;
                        }
                    }
                }
                gl_FragColor = vec4(color, 1);
            }
`;

Effect.ShadersStore.seaCloudsPixelShader = `
uniform float time;
uniform vec2 mousePos;
uniform vec2 resolution;
varying vec2 vUV;
            
  float hash( float n ) {
    return fract(sin(n)*43758.5453);
  }
  
  float noise( in vec3 x ) {
    vec3 p = floor(x);
    vec3 f = fract(x);
    f = f*f*(3.0-2.0*f);
    float n = p.x + p.y*57.0 + 113.0*p.z;
    return mix(mix(mix( hash(n+  0.0), hash(n+  1.0),f.x),
                   mix( hash(n+ 57.0), hash(n+ 58.0),f.x),f.y),
               mix(mix( hash(n+113.0), hash(n+114.0),f.x),
                   mix( hash(n+170.0), hash(n+171.0),f.x),f.y),f.z);
  }
  
  vec4 map( in vec3 p ) {
    float d = 0.2 - p.y;
    vec3 q = p - vec3(1.0,0.1,0.0)*time;
    float f;
    f  = 0.5000*noise( q ); q = q*2.02;
    f += 0.2500*noise( q ); q = q*2.03;
    f += 0.1250*noise( q ); q = q*2.01;
    f += 0.0625*noise( q );
    d += 3.0 * f;
    d = clamp( d, 0.0, 1.0 );
    vec4 res = vec4( d );
    res.xyz = mix( 1.15*vec3(1.0,0.95,0.8), vec3(0.7,0.7,0.7), res.x );
    return res;
  }
  
  vec3 sundir = vec3(-1.0,0.0,0.0);
  
  vec4 raymarch( in vec3 ro, in vec3 rd ) {
    vec4 sum = vec4(0, 0, 0, 0);
    float t = 0.0;
    for(int i=0; i<64; i++) {
      if( sum.a > 0.99 ) continue;

      vec3 pos = ro + t*rd;
      vec4 col = map( pos );
		
      #if 1
        float dif =  clamp((col.w - map(pos+0.3*sundir).w)/0.6, 0.0, 1.0 );
        vec3 lin = vec3(0.65,0.68,0.7)*1.35 + 0.45*vec3(0.7, 0.5, 0.3)*dif;
        col.xyz *= lin;
      #endif
		
      col.a *= 0.35;
      col.rgb *= col.a;
      sum = sum + col*(1.0 - sum.a);	

      #if 0
        t += 0.1;
      #else
        t += max(0.1,0.025*t);
      #endif
    }

    sum.xyz /= (0.001+sum.w);
    return clamp( sum, 0.0, 1.0 );
  }
  
  void main(void) {
    vec2 q = gl_FragCoord.xy / resolution.xy;
    vec2 p = -1.0 + 2.0*q;
    p.x *= resolution.x/ resolution.y;
    vec2 mo = -1.0 + 2.0*mousePos.xy / resolution.xy;
    
    // camera
    vec3 ro = 2.0*normalize(vec3(cos(2.75-3.0*mo.x), 0.7+(mo.y+1.0), sin(2.75-3.0*mo.x)));
    vec3 ta = vec3(0.0, 1.0, 0.0);
    vec3 ww = normalize( ta - ro);
    vec3 uu = normalize(cross( vec3(0.0,1.0,0.0), ww ));
    vec3 vv = normalize(cross(ww,uu));
    vec3 rd = normalize( p.x*uu + p.y*vv + 1.5*ww );

	
    vec4 res = raymarch( ro, rd );

    float sun = clamp( dot(sundir,rd), 0.0, 1.0 );
    vec3 col = vec3(0.6,0.71,0.75) - rd.y*0.2*vec3(1.0,0.5,1.0) + 0.15*0.5;
    col += 0.2*vec3(1.0,.6,0.1)*pow( sun, 8.0 );
    col *= 0.95;
    col = mix( col, res.xyz, res.w );
    col += 0.1*vec3(1.0,0.4,0.2)*pow( sun, 3.0 );
  
    gl_FragColor = vec4( col, 1.0 );
  }
`;

Effect.ShadersStore.shaderShiftRGBVertexShader = `
attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;
uniform mat4 worldViewProjection;
uniform mat4 projection;
uniform float scale;
uniform float shift;
varying vec2 vUV;
        
void main() {
vec3 pos = position;
pos.y = pos.y + ((sin(uv.x * 3.1415926535897932384626433832795) * shift * 5.0) * 0.125);
vUV = uv;
gl_Position = worldViewProjection * vec4(pos,1.);
}`;

Effect.ShadersStore.shaderShiftRGBPixelShader = `
      uniform sampler2D textureSampler;
      uniform float hasTexture;
      uniform float shift;
      uniform float scale;
      uniform float opacity;
      uniform vec3 color;
      varying vec2 vUV;
      void main() {
        float angle = 1.55;
        vec2 p = (vUV - vec2(0.5, 0.5)) * (1.0 - scale) + vec2(0.5, 0.5);
        vec2 offset = shift / 4.0 * vec2(cos(angle), sin(angle));
        vec4 cr = texture2D(textureSampler, p + offset);
        vec4 cga = texture2D(textureSampler, p);
        vec4 cb = texture2D(textureSampler, p - offset);
        if (hasTexture == 1.0) gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);
        else gl_FragColor = vec4(color, opacity);
      }
`;
