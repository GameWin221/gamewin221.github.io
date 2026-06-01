export enum ProjectTag {
	Cpp = "C++",
	C = "C",
	Python = "Python",
	Embedded = "Embedded",
	Audio = "Audio",
	Robotics = "Robotics",
	CV = "CV",
	Printing3D = "3D Printing",
	SIMD = "SIMD",
	Graphics = "Graphics",
	Web = "Web",
	Game = "Game",
	GameJam = "GameJam",
	Godot = "Godot",
	Unity = "Unity",
	UnrealEngine5 = "Unreal Engine 5",
	Assembly = "Assembly",
	IoT = "IoT",
	Simulation = "Simulation",
	Rust = "Rust",
	Vulkan = "Vulkan",
	OpenGL = "OpenGL",
}

export const tagColors: Record<ProjectTag | string, string> = {
	[ProjectTag.Cpp]: "#4c85ff",
	[ProjectTag.C]: "#4c85ff",
	[ProjectTag.Python]: "#fcd75e",
	[ProjectTag.Embedded]: "#f34343",
	[ProjectTag.Audio]: "#b1db61",
	[ProjectTag.Robotics]: "#4ed460",
	[ProjectTag.CV]: "#d7da5a",
	[ProjectTag.Printing3D]: "#FF6B9D",
	[ProjectTag.SIMD]: "#C06C84",
	[ProjectTag.Graphics]: "#a688ff",
	[ProjectTag.Web]: "#45B7D1",
	[ProjectTag.Game]: "#FFEAA7",
	[ProjectTag.GameJam]: "#DFE6E9",
    [ProjectTag.Godot]: "#00B894",
	[ProjectTag.Unity]: "#00B894",
	[ProjectTag.UnrealEngine5]: "#2778bb",
	[ProjectTag.Assembly]: "#e77451",
	[ProjectTag.IoT]: "#00B894",
	[ProjectTag.Simulation]: "#6C5CE7",
	[ProjectTag.Rust]: "#e9743d",
	[ProjectTag.Vulkan]: "#6355e2",
	[ProjectTag.OpenGL]: "#92c2e2",
};

export function hexToRgba(input: string, alpha = 0.9) {
	if (!input) return `rgba(0, 0, 0, ${alpha})`;
	const value = input.trim();
	//if (/^(rgb|rgba)\(/i.test(value) || /^var\(/i.test(value) || /^[a-zA-Z]+$/.test(value)) return value;
	const hex = value.replace('#', '');
	if (hex.length === 3) {
		const r = parseInt(hex[0] + hex[0], 16);
		const g = parseInt(hex[1] + hex[1], 16);
		const b = parseInt(hex[2] + hex[2], 16);
		return `rgba(${r}, ${g}, ${b}, ${alpha})`;
	}
	if (hex.length === 6) {
		const r = parseInt(hex.slice(0, 2), 16);
		const g = parseInt(hex.slice(2, 4), 16);
		const b = parseInt(hex.slice(4, 6), 16);
		return `rgba(${r}, ${g}, ${b}, ${alpha})`;
	}
	return value;
}