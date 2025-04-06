// BEGIN
export default function getDomainInfo(url) {
    let scheme = 'http';
    let name = url;

    if (url.startsWith('https://')) {
        scheme = 'https';
        name = url.replace('https://', '');
    } else if (url.startsWith('http://')) {
        scheme = 'http';
        name = url.replace('http://', '');
    } else if (url.startsWith('//')) {
        scheme = 'http';
        name = url.replace('//', '');
    }

    return { scheme, name };
}
// END