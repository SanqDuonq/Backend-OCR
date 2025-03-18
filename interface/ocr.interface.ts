export interface IOcr {
    decodeImg(imagePath: string): Promise<string>;
}