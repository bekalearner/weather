import {weatherCodes} from "@/shared/index.js";

export const getWeatherIcon = (code) => {
  const isDay = true;

  switch (code) {
    case weatherCodes.SUNNY:
      return isDay ? 'sun' : 'moon-star';

    case weatherCodes.PARTLY_CLOUDY:
      return isDay ? 'cloud-sun' : 'cloud-moon';

    case weatherCodes.CLOUDY:
    case weatherCodes.OVERCAST:
      return 'cloudy';

    case weatherCodes.MIST:
    case weatherCodes.FOG:
    case weatherCodes.FREEZING_FOG:
      return 'cloud-fog';

    case weatherCodes.PATCHY_RAIN:
    case weatherCodes.LIGHT_DRIZZLE:
    case weatherCodes.FREEZING_DRIZZLE:
    case weatherCodes.LIGHT_RAIN:
      return 'cloud-drizzle';

    case weatherCodes.PATCHY_SNOW:
    case weatherCodes.LIGHT_SNOW:
    case weatherCodes.MODERATE_SNOW:
    case weatherCodes.LIGHT_SNOW_SHOWERS:
      return 'cloud-snow';

    case weatherCodes.PATCHY_SLEET:
    case weatherCodes.LIGHT_SLEET:
    case weatherCodes.HEAVY_SLEET:
    case weatherCodes.LIGHT_SLEET_SHOWERS:
    case weatherCodes.HEAVY_SLEET_SHOWERS:
      return 'cloud-hail';

    case weatherCodes.THUNDERY_OUTBREAKS:
    case weatherCodes.LIGHT_RAIN_THUNDER:
    case weatherCodes.HEAVY_RAIN_THUNDER:
    case weatherCodes.LIGHT_SNOW_THUNDER:
    case weatherCodes.HEAVY_SNOW_THUNDER:
      return 'cloud-lightning';

    case weatherCodes.MODERATE_RAIN:
    case weatherCodes.HEAVY_RAIN:
    case weatherCodes.HEAVY_RAIN_SHOWER:
      return 'cloud-rain';

    case weatherCodes.BLOWING_SNOW:
    case weatherCodes.BLIZZARD:
    case weatherCodes.HEAVY_SNOW:
    case weatherCodes.HEAVY_SNOW_SHOWERS:
      return 'cloud-snow';

    case weatherCodes.LIGHT_RAIN_SHOWER:
      return isDay ? 'cloud-sun-rain' : 'cloud-moon-rain';

    case weatherCodes.TORRENTIAL_RAIN:
      return 'cloud-rain-wind';

    case weatherCodes.ICE_PELLETS:
    case weatherCodes.LIGHT_SHOWERS_ICE_PELLETS:
    case weatherCodes.HEAVY_SHOWERS_ICE_PELLETS:
      return 'cloud-hail';

    default:
      return 'cloud';
  }
};