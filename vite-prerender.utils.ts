import * as fs from 'fs';
import * as path from 'path';

// read in files in a given directory
// recursively go through subdirectories
const readFilesInDirectory = (dir: string): string[] =>
    fs.readdirSync(dir).reduce((files: string[], file: string) => {
        let name = path.join(dir, file);
        // Replace backslashes with forward slashes
        name = name.replace(/\\/g, '/');
        const isDirectory = fs.statSync(name).isDirectory();
        return isDirectory ? [...files, ...readFilesInDirectory(name)] : [...files, name];
    }, []);

const extractRoutesFromFileNames = (routes: string[]): string[] => {
    const mappedRoutes = routes.map(route => {
        return route
            // strip all content files of their content prefix
            .replace('/content/','')
            // do analog transformation
            .replace('src','')
            .replace(/^\/(.*?)\/routes|\/app\/routes|\.(js|ts|md)$/g, '')
            .replace(/\[\.{3}.+\]/, '404')
            .replace(/\[([^\]]+)\]/g, ':$1')
            .replace(/index|\(.*?\)$/g, '')
            // remove trailing slashes
            .replace(/(?<!^)\/$/, '')
    })
    return [... new Set(mappedRoutes)]
}

export const extractRoutesToPrerender = () => {
    // first get all "regular" routes similar to analog
    const routes = extractRoutesFromFileNames(readFilesInDirectory('./src/app/pages'));
    // there will be one route that has a :slug parameter to indicate that it will be home of our blog
    const slugRouteIndex = routes.findIndex(route => route.includes(':slug'))
    // get all "content" routes
    const contentSlugs = extractRoutesFromFileNames(readFilesInDirectory('./src/content'));
    // for our :slug route we replace the param with the actual content slug
    const slugRoutes = contentSlugs.map(contentSlug => {
        const parts = contentSlug.split('/');
        const series = parts[parts.length - 2];
        const slug = parts[parts.length - 1].replace('.md', '');
        const newRoute = routes[slugRouteIndex].replace(':series', series).replace(':slug', slug);
        return newRoute;
    });
    // remove the placeholder :slug route
    routes.splice(slugRouteIndex,1)
    // add all content routes
    routes.push(...slugRoutes)
    return routes
}
