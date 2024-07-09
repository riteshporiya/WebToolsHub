export const encodeIP = (ip: string) =>
    ip.split('.')
        .map(n => '0'.repeat(8 - (+n).toString(2).length) + (+n).toString(2))
        .join('')

const decodeIP = (ip: string) => {
    const buffer = new Array(4).fill(0);
    const ip32bit = '0'.repeat(32 - ip.length) + ip;
    return buffer.map((b, index) => parseInt(ip32bit.substr(index * 8, 8), 2)).join('.');
}

export const getNetWorkAddress = (ip: string, subnet: number) => {
    const a = encodeIP(ip)
        .split('')
        .map((digit, index) => index < subnet ? digit : '0')
        .join('')
    return decodeIP(a);
}

export const getBroadcastAddress = (ip: string, subnet: number) => {
    const a = encodeIP(ip)
        .split('')
        .map((digit, index) => index < subnet ? digit : '1')
        .join('')
    return decodeIP(a);
}

export const getNumberOfHost = (ip: string, subnet: number) => {
    const address = encodeIP(
        getNetWorkAddress(ip, subnet)
    );
    const broadcast = encodeIP(
        getBroadcastAddress(ip, subnet)
    );
    return parseInt(broadcast, 2) - parseInt(address, 2) + 1;
}

export const getUsableNumberOfHost = (numberOfHost: number) =>
    numberOfHost === 1 ? 0 : numberOfHost - 2;

export const getUsableNetworkIPRange = (ip: string, subnet: number) => {
    const address = parseInt(encodeIP(
        getNetWorkAddress(ip, subnet)
    ), 2);
    const broadcast = parseInt(encodeIP(
        getBroadcastAddress(ip, subnet)
    ), 2);
    return decodeIP((address).toString(2)) + ' - ' + decodeIP((broadcast).toString(2));
}

export const convertToSubnet = (n: number) =>
    [0, 8, 16, 24].map(i =>
        parseInt(('1'.repeat(n) + '0'.repeat(32 - n)
        ).substr(i, 8), 2)).join('.');

function convertDottedDecimalToDecimal(dottedDecimal: string | number): number {
    if (typeof dottedDecimal === 'number') {
        return dottedDecimal;
    }

    const octets = dottedDecimal.split('.').map(Number);
    return (octets[0] << 24) + (octets[1] << 16) + (octets[2] << 8) + octets[3];
}

export const getLongDecimalIPRange = (ip: string, subnet: number) => {
    const address = parseInt(encodeIP(getNetWorkAddress(ip, subnet)), 2);
    const broadcast = parseInt(encodeIP(getBroadcastAddress(ip, subnet)), 2);
    return convertDottedDecimalToDecimal(address) + ' - ' + convertDottedDecimalToDecimal(broadcast);
}

const convertToCIDRFormat = (ipAddress: string) =>
    ipAddress.split('.').map((octet) => parseInt(octet).toString(16).toUpperCase().padStart(2, '0')).join('.');


export const getLongHexIPRange = (ip: string, subnet: number) => {
    const networkAddress = getNetWorkAddress(ip, subnet);
    const broadcastAddress = getBroadcastAddress(ip, subnet);

    return (
        convertToCIDRFormat(networkAddress) + ' - ' + convertToCIDRFormat(broadcastAddress)
    );
}

function convertDecimalSubnetMaskToHex(decimalSubnetMask: string): string {
    const octets = decimalSubnetMask.split('.');
    const hexSubnetMask = octets.map((octet) => parseInt(octet, 10).toString(16).toUpperCase()).join('.');
    return hexSubnetMask;
}

export const getResult = (ip: string, subnet: number) => [
    { name: 'Input', value: ip + '/' + subnet },
    { name: 'Input IP', value: ip },
    { name: 'Input Long', value: parseInt(encodeIP(ip), 2) },
    { name: 'Input Hex', value: convertToCIDRFormat(ip) },
    // { name: 'CIDR', value: getNetWorkAddress(ip, subnet) + '/' + subnet},
    { name: 'CIDR IP Range', value: getUsableNetworkIPRange(ip, subnet) },
    { name: 'IPs in Range', value: getNumberOfHost(ip, subnet) },
    { name: 'CIDR Long Range', value: getLongDecimalIPRange(ip, subnet) },
    { name: 'CIDR Hex Range', value: getLongHexIPRange(ip, subnet) },
    { name: 'Mask Bits', value: subnet },
    { name: 'Subnet Mask', value: convertToSubnet(subnet) },
    // { name: 'Hex Subnet Mask', value: convertDecimalSubnetMaskToHex(convertToSubnet(subnet)) },

].map(obj => ({ ...obj, key: obj.name }));
