import convert from './../src/modules/dataConverter';
const { jsonToCsv, jsonToXml, csvToJson, xmlToJson, convertData } = convert;

describe("Data Conversions", () => {
    test('Convert JSON to CSV', () => {
        const json = [
            { name: 'Alice', age: '25' },
            { name: 'Bob', age: '30' }
        ];
        const expectedCsv = `name,age\nAlice,25\nBob,30`;
        console.log(jsonToCsv(json));
        expect(jsonToCsv(json)).toBe(expectedCsv);
    });

    test('Convert CSV to JSON', () => {
        const csv = "name,age\nAlice,25\nBob,30";
        const expectedJson = [
            { name: 'Alice', age: '25' },
            { name: 'Bob', age: '30' }
        ];
        expect(csvToJson(csv)).toEqual(expectedJson);
    });

    test('Convert JSON to XML', async () => {
        const json = { person: { name: 'Alice', age: 25 } };
        const xml = await jsonToXml(json);
        expect(xml).toContain('<person>');
        expect(xml).toContain('<name>Alice</name>');
        expect(xml).toContain('<age>25</age>');
    });

    test('Convert XML to JSON', async () => {
        const xml = `<person><name>Alice</name><age>25</age></person>`;
        const expectedJson = { person: { name: 'Alice', age: '25' } };
        const json = await xmlToJson(xml);
        console.log(json);
        expect(json).toEqual(expectedJson);
    });

    test('Convert CSV to JSON via main function', async () => {
        const csv = `name,age\n'Alice','25'`;
        const expectedJson = [{ name: 'Alice', age: '25' }];
        const result = await convertData(csv, 'csv', 'json');
        expect(result).toEqual(expectedJson);
    });

    test('Invalid conversion throws error', async () => {
        await expect(convertData('data', 'csv', 'xml')).rejects.toThrow('Conversion from csv to xml is not supported.');
    });
})