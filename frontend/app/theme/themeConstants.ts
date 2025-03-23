// themeConstants.ts – Defines color palettes and theme variant base definitions used by the theme system.

export type ThemeVariant = "red" | "blue" | "gray";

export interface Palette {
	[key: number]: string;
}

// Base palette definitions – one for each theme
export const BASE_PALETTES: Record<ThemeVariant, Palette> = {
	red: {
		0: '#000000', 10: '#410002', 20: '#690005', 30: '#93000A', 40: '#BA1A1A',
		50: '#DE3730', 60: '#FF5449', 70: '#FF897D', 80: '#FFB4AB', 90: '#FFDAD6',
		95: '#FFEDEA', 99: '#FFFBFF', 100: '#FFFFFF'
	},
	blue: {
		0: '#000000', 10: '#001F2A', 20: '#003547', 30: '#004D65', 40: '#006784',
		50: '#0081A3', 60: '#1C9BC2', 70: '#44B6E3', 80: '#84D2FF', 90: '#C2E9FF',
		95: '#E3F3FF', 99: '#F8FBFF', 100: '#FFFFFF'
	},
	gray: {
		0: '#000000', 10: '#1A1C1E', 20: '#2E3133', 30: '#44474A', 40: '#5C5F61',
		50: '#75787A', 60: '#8E9193', 70: '#A9ACAD', 80: '#C4C7C9', 90: '#E0E3E5',
		95: '#EFF1F3', 99: '#FBFCFE', 100: '#FFFFFF'
	}
};

export const ERROR_PALETTE: Palette = {
	0: '#000000', 10: '#410002', 20: '#690005', 30: '#93000A', 40: '#BA1A1A',
	50: '#DE3730', 60: '#FF5449', 70: '#FF897D', 80: '#FFB4AB', 90: '#FFDAD6',
	95: '#FFEDEA', 99: '#FFFBFF', 100: '#FFFFFF'
};

// Brightness adjustment factors
export const FACTORS = {
	secondary: 0.9,
	tertiary: 0.8,
	neutralVariant: 0.95
};

// Surface color definitions
export const SURFACE_COLORS = {
	light: { surface: '#FFFBFF', surfaceVariant: '#F3DDD9', onSurface: '#1F1B1A', onSurfaceVariant: '#534341' },
	dark: { surface: '#1F1B1A', surfaceVariant: '#534341', onSurface: '#FFFBFF', onSurfaceVariant: '#F3DDD9' }
};
