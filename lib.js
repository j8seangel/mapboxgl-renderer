import sharp from 'sharp';
import mbgl from '@mapbox/mapbox-gl-native';
import rp from 'request-promise';

// https://github.com/consbio/mbgl-renderer/blob/master/src/render.js
export const render = (style, options, width = 1024, height = 1024) => {
  const {
    center = null,
    zoom = null,
    bearing = 0,
    pitch = 0,
    ratio = 1,
  } = options;
  if (!center || !zoom) {
    throw new Error('center and zoom required');
  }
  return new Promise((resolve, reject) => {
    const mapOptions = {
      request: async (req, callback) => {
        const { url, kind } = req;
        try {
          const data = await rp({
            url,
            encoding: null,
            gzip: true,
          });
          return callback(null, { data })
        } catch (err) {
          return callback(err);
        }
      },
      ratio,
    };
    const map = new mbgl.Map(mapOptions);
    map.load(style);

    map.render(
      {
        zoom,
        center,
        height,
        width,
        bearing,
        pitch,
      },
      (err, buffer) => {
        if (err) {
          console.error('Error rendering map');
          console.error(err);
          return reject(err);
        }

        map.release(); // release map resources to prevent reusing in future render requests

        // Convert raw image buffer to PNG
        try {
          return sharp(buffer, {
            raw: {
              width: width * ratio,
              height: height * ratio,
              channels: 4,
            },
          })
            .png()
            .toBuffer()
            .then(resolve)
            .catch(reject);
        } catch (pngErr) {
          console.error('Error encoding PNG');
          console.error(pngErr);
          return reject(pngErr);
        }
      }
    );
  });
};
