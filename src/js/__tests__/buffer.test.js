import ArrayBufferConverter from "../buffer";
import { getBuffer } from "../buffer";

test('Get string', () => {
    const bufferConverter = new ArrayBufferConverter();
    const buffer = getBuffer()

    bufferConverter.load(buffer);
    const result = bufferConverter.toString();

    expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
})
