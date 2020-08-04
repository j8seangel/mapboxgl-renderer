export const style = {
  "version": 8,
  "glyphs": "https://raw.githubusercontent.com/GlobalFishingWatch/map-gl-glyphs/master/_output/{fontstack}/{range}.pbf?raw=true",
  "sprite": "https://raw.githubusercontent.com/GlobalFishingWatch/map-gl-sprites/master/out/sprites",
  "sources": {
    "aoi-6": {
      "type": "geojson",
      "data": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -82.42414360599997,
                    21.551266906000023
                  ],
                  [
                    -82.42414360599997,
                    1.7392250490000265
                  ],
                  [
                    -46.15867214299993,
                    1.4002702140000451
                  ],
                  [
                    -45.962434851999944,
                    21.475000831000045
                  ],
                  [
                    -82.42414360599997,
                    21.551266906000023
                  ]
                ]
              ]
            },
            "properties": {}
          }
        ]
      }
    },
    "aoi-4": {
      "type": "geojson",
      "data": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -98,
                    -8
                  ],
                  [
                    -80,
                    -8
                  ],
                  [
                    -80,
                    8
                  ],
                  [
                    -98,
                    8
                  ],
                  [
                    -98,
                    -8
                  ]
                ]
              ]
            },
            "properties": {}
          }
        ]
      }
    }
  },
  "layers": [
    {
      "id": "background",
      "type": "background",
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "background-color": "#002458"
      },
      "metadata": {
        "group": "background"
      }
    },
    {
      "id": "aoi-6-0",
      "source": "aoi-6",
      "type": "line",
      "paint": {
        "line-color": "white",
        "line-width": 2
      },
      "layout": {
        "visibility": "visible"
      }
    },
    {
      "id": "aoi-4-0",
      "source": "aoi-4",
      "type": "line",
      "paint": {
        "line-color": "white",
        "line-width": 2
      },
      "layout": {
        "visibility": "visible"
      }
    }
  ]
}