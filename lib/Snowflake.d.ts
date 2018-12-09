export interface SnowflakeConfig {
    color?: string;
    radius?: [number, number];
    speed?: [number, number];
    wind?: [number, number];
    changeFrequency?: number;
}
interface SnowflakeProps {
    color: string;
    radius: [number, number];
    speed: [number, number];
    wind: [number, number];
    changeFrequency: number;
}
interface SnowflakeParams {
    color: string;
    x: number;
    y: number;
    radius: number;
    speed: number;
    wind: number;
    isResized: boolean;
    nextSpeed: number;
    nextWind: number;
}
/**
 * An individual snowflake that will update it's location every call to `draw`
 */
declare class Snowflake {
    config: SnowflakeProps;
    params: SnowflakeParams;
    framesSinceLastUpdate: number;
    constructor(canvas: HTMLCanvasElement, config?: SnowflakeConfig);
    resized: () => boolean;
    draw: (canvas: HTMLCanvasElement) => void;
    translate: () => void;
    updateTargetParams: () => void;
    handleOffScreen: (canvas: HTMLCanvasElement) => void;
    update: (canvas: HTMLCanvasElement) => void;
}
export default Snowflake;